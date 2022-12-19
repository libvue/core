[![logo](public/logo.svg)](public/logo.svg)

[![license](https://img.shields.io/badge/license-MIT-blue)](https://img.shields.io/badge/license-MIT-blue)
[![npm (tag)](https://img.shields.io/npm/v/@libvue/core/latest?label=npm%20package)](https://badge.fury.io/js/@libvue%2Fcore)

#### An opensource collection of vue 3 components.

[documentation](https://harmendv.github.io/libvue/) - [playground](https://harmendv.github.io/libvue/#/playground) - [npm](https://www.npmjs.com/package/@libvue/core)

### Install

```bash
> npm install --save @libvue/core
```

```js
// app.js
import { spaceAfter, LvButton, LvTable } from '@libvue/core';

// Register spaceAfter directive
app.directive('space-after', spaceAfter);

// Register Common Components
app.component('LvButton', LvButton);
app.component('LvTable', LvTable);

```

```scss
// app.scss
@import '@libvue/core';
```
