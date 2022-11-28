<html>
<head>
<title>Demo of StudyTok Image moving across screen</title>
<script >
<!--
function reset1(){
clearTimeout(my_time);
document.getElementById('i1').style.left= "500px";
document.getElementById('i1').style.top= "100px";
document.getElementById("msg").innerHTML="";
}

function disp(){
var step=1;
document.getElementById("msg").innerHTML="X: " + x  + " Y : " + y
if(y < 400 ){y= y +step;
document.getElementById('i1').style.top= y + "px";
}else{
if(x < 800){x= x +step;
document.getElementById('i1').style.left= x + "px";
document.getElementById('i1').style.left= "500px";
document.getElementById('i1').style.top= "100px";
document.getElementById("msg").innerHTML="";
}
}

}

function timer(){
disp();
my_time=setTimeout('timer()',10);
}
//-->
</script>
</head>
<body >
<img src=images/help.jpg id='i1' 
  style="position:absolute; left: 500; top: 100;">
<br><br><br><br>
<input type=button onClick=timer() value='Start'>
<input type=button onClick=reset1() value='Reset'>
<div id='msg'></div>

</body>
</html>
