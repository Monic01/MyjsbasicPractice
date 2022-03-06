

var time = document.getElementsByClassName('time');
var h = 0, m = 0, s = 0;
var t = 0;
var stopt ;

function timer() {
    
    t++;
    stop();
    stopt = setTimeout(timer,1000); 
    
    block_timer();
}
function start() {
    timer();
}
function stop(){
    clearTimeout(stopt);
    
}
function reset(){
    time[0].innerHTML="00:00:00";
    t = 0,h = 0, m = 0, s = 0;
}
function block_timer(){
    s = t;
    m = parseInt(t/60) ;
    h =  parseInt(m/60);
    
    s = time_cal(s);
    m = time_cal(m);
    h = time_cal(h);
    time[0].innerHTML = h +':'+ m + ':' + s;
}
function time_cal(x){
    var a = 0,b = 0;
    a = x%60;
    if (a<10){
        b = '0'+ a;
    }
    else {
        b = a;
    }
    return b;
}

