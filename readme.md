# trim_character
String utility for trimming strings from special characters.

## Installation
``
    npm i @berkozturk/trim_character
``

## Example Usage

```
  const {trim,trimLeft,trimRight,trimMultiple,trimLeftMultiple,trimRightMultiple} = require('@berkozturk/trim_character');
  trim('{2019}','{') => 2019}
  trimLeft('{2019}','{') => 2019}
  trimRight('{2019}','{') => {2019}
  trimMultiple('{2019}','{','}') => 2019
  trimLeftMultiple('{2019}','{','}') => 2019}
  trimRightMultiple('{2019}','{','}') => {2019

```