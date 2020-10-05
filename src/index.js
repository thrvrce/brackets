module.exports = function check(str, bracketsConfig) {
    var strRegEx = "";
    for (var i = 0; i < bracketsConfig.length; i++){
      if (i>0)
        strRegEx = `${strRegEx}|`;
      for (var j = 0 ; j<= 1 ; j++){
        if ( /^\w{1}$/.test(bracketsConfig[i][j]) )
          strRegEx = `${strRegEx}${bracketsConfig[i][j]}`;
        else
          strRegEx = `${strRegEx}\\${bracketsConfig[i][j]}`;
      }
    }
    var regEx = new RegExp(strRegEx);
    while (str.search(regEx) !== -1){
      str = str.replace(regEx, "");
    }
    return str.length === 0;
  }
