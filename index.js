
const trim = (str,char) => {
  str = trimLeft(str,char);
  str = trimRight(str,char);
  return str.trim();
}
const trimLeft = (str,char) => {
  while(str.charAt(0) === char) {
    str = str.substring(1);
  }
  return str.trimLeft();
}
const trimRight = (str,char) => {
    while(str.charAt(str.length-1) === char) {
      str = str.substring(0,str.length-1);
    }
    return str.trimRight();
}
const trimMultiple = (str,...chars) => {
  for(const char of chars){
    str = trim(str,char);
  }
  return str;
}
const trimLeftMultiple = (str,...chars) => {
  for(const char of chars){
    str = trimLeft(str,char);
  }
  return str;
}
const trimRightMultiple = (str,...chars) => {
  for(const char of chars){
    str = trimRight(str,char);
  }
  return str;
}

module.exports = {
  trim,
  trimLeft,
  trimRight,
  trimMultiple,
  trimLeftMultiple,
  trimRightMultiple
}
