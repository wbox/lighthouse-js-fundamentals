/*
<p id="intro">
  Hello World!
</p>

<p id="info">
  JavaScript on The DOM
</p>
*/

var elm = document.getElementById('info').innerHTML;
alert(elm);


var elm = document.getElementsByTagName('p');
for ( var i = 0; i < elm.length; i++) {
	alert(elm[i].innerHTML);
}
