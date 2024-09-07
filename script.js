<!DOCTYPE html>
<html>
<body>

<h1>How many years do you have left in school?</h1>


<p id="demo"></p>

<script>
let years = ();
if (years <= 0) {
  document.getElementById("demo").innerHTML = "Congratulations! You have finished school!";
} else if (years == 1){
   document.getElementById("demo").innerHTML = "Nearly there";
  } else if (years == 2) {
   document.getElementById("demo").innerHTML = "Still learning";
  } else if (years == 3) {
   document.getElementById("demo").innerHTML = "Sucks to be you";
  } else {
alert("Det låter alarmerande!");
  }

</script>

</body>
</html>
