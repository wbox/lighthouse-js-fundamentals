/*
<p id="intro">
  Hello World!
</p>

<p id="info">
  JavaScript on The DOM
</p>
*/

/* 
In this example we are acceing the content from the element
with id 'info' and calling the function alert to show it to
the user. innerHTML was the new thing here. :)
*/
var elm = document.getElementById('info').innerHTML;
alert(elm);

/*
 In this example the variable eml will receive
 an array from the document.getElementsByTagName('p'),
 with all elements from the html file with tag p as an object (array).
 The for loop is accessing the content of the p tags.
 The tricky part is also to use innerHTML method from the eml
 */
var elm = document.getElementsByTagName('p');
for ( var i = 0; i < elm.length; i++) {
	alert(elm[i].innerHTML);
}
