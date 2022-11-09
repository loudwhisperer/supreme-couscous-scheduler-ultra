
$(function () {
  //global variables
  const currentD = $("#currentDay");
  const save = $(".saveBtn");
  const one = $("#hour-one");
  const two = $("#hour-two");
  const three = $("#hour-three");
  const four = $("#hour-four");
  const five = $("#hour-five");
  const nine = $("#hour-nine");
  const ten = $("#hour-ten");
  const eleven = $("#hour-eleven");
  const twelve = $("#hour-twelve");
  let now = dayjs().format("H");
  let varArr = [one, two, three, four, five, nine, ten, eleven, twelve];
  let timeArr = [13, 14, 15, 16, 17, 9, 10, 11, 12];
  // adds current date and day to header
  setInterval(function () {
    currentD.text(dayjs().format("dddd, MMMM D YYYY"));
  }, 1000);
//save click event
  function saveManager(event) {
    event.preventDefault();
    //set local variables
    let text = $(this).siblings("textarea").val();
    let time = $(this).siblings("div").data("mili");
    // save local variables to storage
    localStorage.setItem(time, text);
  }

  save.on("click", saveManager);
// setting color of each time and getting local storage values 
  for (let i = 0; i < varArr.length; i++){
     for (let i = 0; i < timeArr.length; i++){
    if (now == timeArr[i]){
      varArr[i].addClass("present")
    } else if (now > timeArr[i]){
      varArr[i].addClass("past");
     } else {
    varArr[i].addClass("future");
    };
    $(varArr[i].children("textarea")).val(localStorage.getItem(timeArr[i]));
  }}
})

