# boxup-preset 

> some presets for boxup.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/boxup-preset/blob/master/LICENSE)
[![build:?](https://img.shields.io/travis/bubkoo/boxup-preset/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/boxup-preset)

## Install

```
npm install boxup-preset --save
```

## Usage

```js
var presets = require('cli-boxes');

console.log(presets.single);
/*
{
    "topLeft": "┌",
    "topRight": "┐",
    "bottomRight": "┘",
    "bottomLeft": "└",
    "vertical": "│",
    "horizontal": "─"
}
*/
```

## API

### presets

#### `single`

```
┌────┐
│    │
└────┘
```

#### `double`

```
╔════╗
║    ║
╚════╝
```

#### `round`

```
╭────╮
│    │
╰────╯
```

#### `single-double`

```
╓────╖
║    ║
╙────╜
```

#### `double-single`

```
╒════╕
│    │
╘════╛
```

#### `classic`

```
+----+
|    |
+----+
```

## Related

- [boxup](https://github.com/bubkoo/boxup) - box up text in the terminal
- [boxup-cli](https://github.com/bubkoo/boxup-cli) - CLI for boxup

