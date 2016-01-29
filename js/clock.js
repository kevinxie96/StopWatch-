var h1,m1,s1,mi1,h,m,s,mi;

function reference() {
    var today = new Date();
    h1 = today.getHours();
    m1 = today.getMinutes();
    s1 = today.getSeconds();
    mi1 = today.getMilliseconds();
  
     document.getElementById('starttime').innerHTML =  checkhms(h1) + ":" + checkhms(m1) + ":" + checkhms(s1) + ":" + checkmilli(mi1);
}


var milliseconds = 0;
var seconds = 0;


function elapsed(){

  if (milliseconds>=9){
     milliseconds=0
     seconds+=1
  }
  else
     milliseconds+=1
     document.d.d2.value = seconds + "." + milliseconds;
     var timer = setTimeout(elapsed, 100);
  }


function startTime() {
    

    var today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    mi = today.getMilliseconds();
    
    document.getElementById('time').innerHTML =
    checkhms (h) + ":" + checkhms(m) + ":" + checkhms(s) + ":" + checkmilli(mi);

    var t = setTimeout(startTime, 1);

    
}


function checkhms(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function checkmilli(i) {
    if (i < 10) { i = "0" + "0" + i};
    if ( i >= 10 && i < 100) { i = "0" + i};
    // add zero in front of numbers < 10
 
    return i;
}
