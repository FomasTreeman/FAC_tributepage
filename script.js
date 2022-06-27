date = new Date();
currentDate = date.getDate().toString() + " / " +  (date.getMonth()+ 1).toString() + " / "  + date.getFullYear().toString();
console.log(currentDate)
document.getElementById("time").innerHTML = currentDate;

