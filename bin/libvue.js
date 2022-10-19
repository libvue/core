#!/usr/bin/env node

// Dependencies
const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const detectCase = require('detect-case');
const pascalToKebab = require('./utils/pascal-to-kebab');
const template = require('./utils/template');

// Setup a new program
const program = new Command();
program.name('libvue-util').description('CLI to help contribute faster').version('0.0.1');

// A little configuration
const config = {
    docsViewsDir: path.join(__dirname, `../src/docs/views/components`),
    libComponentsDir: path.join(__dirname, `../src/lib/components`),
    libComponentsIndex: path.join(__dirname, `../src/lib/components/index.js`),
};

/**
 * make:component
 * @description: scaffolds a new component
 */
program
    .command('make:component')
    .description('Adds a new component')
    .argument('component name', 'Name of the component')
    .option('--no-docs', 'Skip it adding to the docs')
    .action((componentName, options) => {
        // Force we use PascalCase
        if (detectCase(componentName) !== 'pascalcase') {
            console.log(`Given component name is not PascalCase but ${detectCase(componentName)}`);
            return false;
        }

        // Prepare some folders and files we need to check
        const componentFolder = path.join(`${config.libComponentsDir}/${componentName}`);
        const componentFile = path.join(`${config.libComponentsDir}/${componentName}/${componentName}.vue`);
        const componentFolderExists = fs.existsSync(componentFolder);
        const componentFileExists = fs.existsSync(componentFile);

        // Do a check if the file exists
        if (componentFileExists) {
            console.error('Sorry, component already exists.');
        } else {
            // Create folder if it does not exist
            if (!componentFolderExists) {
                fs.mkdirSync(componentFolder);
                console.log(`Created Directory: ${componentFolder}`);
            }
            // Create the <componentName>/<componentName>.vue file
            fs.writeFileSync(componentFile, template.replace(/%name%/g, pascalToKebab(componentName)));
            console.log(`Created File: ${componentFile}`);

            // Register the component in <componentFolder>/index.js
            let libComponentsIndexContent = fs.readFileSync(config.libComponentsIndex, 'utf8');
            const importLine = `import ${componentName} from './${componentName}/${componentName}.vue';\n`;
            const exportLine = `export default {\n    ${componentName},`;
            libComponentsIndexContent = `${importLine}${libComponentsIndexContent}`.replace(
                'export default {',
                exportLine
            );
            fs.writeFileSync(config.libComponentsIndex, libComponentsIndexContent);

            console.log(`Updated index at ${config.libComponentsIndex}`);
        }
    });

program.parse();
