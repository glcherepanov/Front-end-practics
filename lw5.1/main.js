function writeLastSymbol(string) {
    return string.charAt(string.length - 1); 
}

function writeWhithoutLast(string) {
    var str = "";

    for (i = 0; i < string.length - 1; i++) {
        str += string.charAt(i);
    } 
    return(str);
} 

function writeReversStr(string) {
    var str = "";

    for (i = string.length - 1; i >= 0; i = i - 1) {
        str += string.charAt(i);
    } 
    return(str);
}

function delExtraSpaces(string) {
    var str = "";
    var space = " ";

    for (i = 0; i < string.length; i++) {
        if (string.charAt(i) != space) {
            str += string.charAt(i);
        } else if (string.charAt(i - 1) != space) {
            str += space;
        }
    }
    return str.trim();
}

var string = "Hello, world!";
var string2 = "  Hell   o,     wo   rld!          ";

console.log(writeLastSymbol(string));
console.log(writeWhithoutLast(string));
console.log(writeReversStr(string));
console.log(delExtraSpaces(string2));