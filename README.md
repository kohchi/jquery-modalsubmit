jquery-modalsubmit
====================
The specified data you inputted to the form is displayed on the modal window.

This is the jquery plugin that displays the specified data you inputted
to the form.
This is able not to display on the modal window like normal submit.

for example
-----------
```javascript
$('input#preview').modalsubmit();
// or
var my_preview = function() {
	var fo = document.modalsubmit;
	fo.mode.value = "preview";
	fo.submit();
}
$('input#preview').modalsubmit();
  left: 120,
  submitfn: my_preview,
  closed: '[close window]'
});

....
<form name="modalsubmit" method="post" action="foo/bar.cgi">
....
</form>
```

Options
-------
+ `left` :  
  the pixel value of left position on the modal window. Default is '30px'.
+ `top` :  
  the pixel value of top position on the modal window. Default is '30px'.
+ `padding` :  
  the padding value in the modal window. Default is '10px'.
+ `duration` :  
  the fade speed to display the modal window. Default is '1000ms'.
+ `formname` :  
  the form name attribute value. Default is 'modalsubmit'.
+ `submitfn` :  
  the function name that you submit the form of. Default is null.
+ `domodal` :  
  whether you use the modal window or not. Default is true.
+ `closed` :  
  the lavel name of the link to close the modal window. Default is '[closed]'.

License
-------
You may use this under the terms of either MIT License or
GNU General Public License (GPL) Version 2. (same as jQuery).

### Copyright
Copyright (c) MIYAGINO.net. All Rights Reserved.
