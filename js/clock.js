
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var mi = today.getMilliseconds();
    h = checkTime (h);
    m = checkTime(m);
    s = checkTime(s);
    mi = checkTimemi(mi);
    document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s + ":" + mi;

    var t = setTimeout(startTime, 1);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function checkTimemi(i) {
    if ( i < 10) { i = "0" + "0" + i};
     if (i < 100 && i >=10) {i = "0" + i}; // add zero in front of numbers < 10

    return i;
}
