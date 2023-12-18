[![logo](https://github.com/libvue/core/raw/main/public/logo.svg)](https://github.com/libvue/core/raw/main/public/logo.svg)

[![license](https://img.shields.io/badge/license-MIT-blue)](https://img.shields.io/badge/license-MIT-blue)
[![npm (tag)](https://img.shields.io/npm/v/@libvue/core/latest?label=npm%20package)](https://badge.fury.io/js/@libvue%2Fcore)

#### A collection of vue 3 components.

[documentation](https://libvue.github.io/core/) - [npm](https://www.npmjs.com/package/@libvue/core)

### Install

```shell
npm install --save @libvue/core
```

#### main.js
```js
import { LvButton, LvTable, spaceAfter } from '@libvue/core';

// Register components
app.component('LvButton', LvButton);
app.component('LvTable', LvTable);

// Register directives
app.directive('space-after', spaceAfter);
```

#### app.scss
```scss
@import '@libvue/core';

html {
  min-height: 100%;
  height: 100%;
  font-size: 100%;
}
body {
  margin: 0;
  font-family: "Inter", sans-serif;
  height: 100%;
  font-size: .875rem;
  line-height: 1.5;
}
#app {
  display: flex;
  min-height: 100%;
}
```
