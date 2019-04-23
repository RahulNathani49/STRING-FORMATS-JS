var string = document.getElementById("first").innerHTML;

function reset() {
    document.getElementById("first").innerHTML = "SAMPLE";
}

function format1() {
    var last = string.charAt(string.length - 1);
    end = string.length - 1;

    var middle = string.slice(1, end);
    var first = string.charAt(0);
    var result = last + middle + first;
    document.getElementById("first").innerHTML = result;
}

function format2() {
    var i;
    var j;
    var a = [];
    var str;
    var x = "";
    for (i = string.length - 1, j = 0; i > 0, j < string.length; i--, j++) {
        a[j] = string[i];
        x = x + a[j];
    }
    document.getElementById("first").innerHTML = x;
}

function format3() {
    var x = "";
    var a = [];
    var len = string.length;
    for (var i = 0; i < len; i++) {
        a[i] = string[i];
    }
    for (var i = 0; i < len; i++) {
        if (i == 0 || i % 2 == 0) {
            x = x + a[i];
        }

    }
    document.getElementById("first").innerHTML = x;
}

function format4() {
    var x = "";
    var a = [];
    var len = string.length;
    for (var i = 0; i < len; i++) {
        a[i] = string[i];
    }
    for (var i = 0; i < len; i++) {
        if (i % 2 != 0) {
          a[i] = a[i].toLowerCase();
            console.log(a[i]);
        }
        x=x+a[i];
    }
    document.getElementById("first").innerHTML = x;
}
function format5(){

    end = string.length - 1;
    var first = string.charAt(0);
    var middle = string.slice(1, end);
    middle=middle.toLowerCase();
    var last = string.charAt(string.length - 1);
    document.getElementById("first").innerHTML = first+middle+last;    
}