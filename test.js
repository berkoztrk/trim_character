const {trim,trimLeft,trimRight,trimMultiple,trimLeftMultiple,trimRightMultiple} = require('./index');

const example = '{2019}'
const exampleTrimChar = '{';
const exampleTrimChar2 = '}';

console.log(`trim('${example}','${exampleTrimChar}') => ${trim(example,exampleTrimChar)}`);
console.log(`trimLeft('${example}','${exampleTrimChar}') => ${trimLeft(example,exampleTrimChar)}`);
console.log(`trimRight('${example}','${exampleTrimChar}') => ${trimRight(example,exampleTrimChar)}`);

console.log(`trimMultiple('${example}','${exampleTrimChar}','${exampleTrimChar2}') => ${trimMultiple(example,exampleTrimChar,exampleTrimChar2)}`);
console.log(`trimLeftMultiple('${example}','${exampleTrimChar}','${exampleTrimChar2}') => ${trimLeftMultiple(example,exampleTrimChar,exampleTrimChar2)}`);
console.log(`trimRightMultiple('${example}','${exampleTrimChar}','${exampleTrimChar2}') => ${trimRightMultiple(example,exampleTrimChar,exampleTrimChar2)}`);
