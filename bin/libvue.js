#!/usr/bin/env node
/* eslint-disable */

// Dependencies
const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const detectCase = require('detect-case');
const pascalToKebab = require('./utils/pascal-to-kebab');
const { vueTemplate, docTemplate, routeTemplate } = require('./utils/templates');

// Setup a new program
const program = new Command();
program.name('libvue-util').description('Libvue CLI is here to help work faster!').version('0.0.1');

// A little configuration
const config = {
    componentDocsViewDir: path.join(__dirname, `../src/docs/views/documentation/components`),
    componentRouteFile: path.join(__dirname, `../src/docs/router/routes/documentation/components.js`),
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
        const docViewFile = path.join(`${config.componentDocsViewDir}/${pascalToKebab(componentName)}.vue`);
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
            fs.writeFileSync(componentFile, vueTemplate.replace(/%name%/g, pascalToKebab(componentName)));
            console.log(`Created Component: ${componentFile}`);

            // Register the component in <componentFolder>/index.js
            let libComponentsIndexContent = fs.readFileSync(config.libComponentsIndex, 'utf8');
            const importLine = `import { defineAsyncComponent } from 'vue';\n\nconst ${componentName} = defineAsyncComponent(() => import('./${componentName}/${componentName}.vue'));`;
            const exportLine = `export default {\n    ${componentName},`;
            libComponentsIndexContent = libComponentsIndexContent.replace(
                "import { defineAsyncComponent } from 'vue';\n",
                importLine
            );
            libComponentsIndexContent = libComponentsIndexContent.replace(
                'export default {',
                exportLine
            );
            fs.writeFileSync(config.libComponentsIndex, libComponentsIndexContent);

            // Create documentation file
            if (options.docs) {
                // Create doc view file
                fs.writeFileSync(
                    docViewFile,
                    docTemplate
                        .replace(/%name%/g, componentName)
                        .replace(/%component%/g, `<${pascalToKebab(componentName)}/>`)
                );
                console.log(`Created Doc View: ${docViewFile}`);

                // Register doc view component in routes/documentation/index.js
                let componentRouteFileContent = fs.readFileSync(config.componentRouteFile, 'utf8');
                const importLine = `import ${componentName} from '../../../views/documentation/components/${pascalToKebab(
                    componentName
                )}.vue';\n`;
                const exportLine = `export default [\n    ${routeTemplate
                    .replace(/%pascal-name%/g, componentName)
                    .replace(/%kebab-name%/g, pascalToKebab(componentName))},`;
                componentRouteFileContent = `${importLine}${componentRouteFileContent}`.replace(
                    'export default [',
                    exportLine
                );
                fs.writeFileSync(config.componentRouteFile, componentRouteFileContent);
            }

            console.log(`Updated index at ${config.libComponentsIndex}`);
        }
    });

program.parse();
