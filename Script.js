var dd = document.getElementById('date').value;
var mm = document.getElementById('month').value;
var yy = document.getElementById('year').value;

function age (){
    var dd = document.getElementById('date').value;
    var mm = document.getElementById('month').value;
    var yy = document.getElementById('year').value;

    var date = new Date();
    var dd2 = date.getDate();
    var mm2 = 1 + date.getMonth();
    var yy2 = date.getFullYear();
    var month = [31,28,31,30,31,30,31,31,30,31,30,31];
    if (dd > dd2){
        dd2 = dd2 + month[mm2-1];
        mm2 = mm2 - 1;
    }
    if (mm > mm2){
        mm2 = mm2 + 12;
        yy2 = yy2 - 1;
    }
    var d = dd2 - dd;
    var m = mm2 - mm;
    var y = yy2 - yy;
    document.getElementById('age').innerHTML = 'Your Age is: '+y+' Years '+m+' Months '+d+' Days';
}