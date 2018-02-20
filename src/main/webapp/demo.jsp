<!DOCTYPE html>
<html>
<body>
<h1 class="hello">Hello surbhi</h1>
<p id=demo><b>Hello</b></p>
<button type="button" onclick=myFunc()>button1</button>
<button type="button" onclick=myFunc1()>button2</button>
<script>
function myFunc(){
	alert(document.getElementById('demo').innerHTML)
    }
    function myFunc1(){
	alert(document.getElementById('demo').innerText)
    }
</script>
</html>
</body>