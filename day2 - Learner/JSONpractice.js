<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>

    var timemaster;
    var timemaster2;
    var timetoday = new Date();
        var todayTime1 = timetoday.getHours();
    var todayTime2 = timetoday.getMinutes() ;
    var todayTime3;
    var func1 = function(){
switch (timetoday().getDay()) {
    case 0:
     day="Sunday";
        break;
    case 1:
    day="Monday";
        break;
    case 2:
    day="Tuesday";
        break;
    case 3:
    day="Wednesday";
        break;
    case 4:
     day="Thursday";
        break;
    case 5:
    day="Friday";
        break;
    case 6:
  day="Saturday";
}
    }
   timemaster2 = timemaster + timetoday.getHours + timetoday.getMinutes;
    document.getElementById("demo").innerHTML=  + "," + todayTime1;
</script>

</body>
</html>
