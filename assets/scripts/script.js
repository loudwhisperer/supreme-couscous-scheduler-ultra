
$(function () {
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
  
  let heroInterval = setInterval(function () {
    currentD.text(dayjs().format("dddd, MMMM D YYYY"));
  }, 1000);

  function saveManager(event) {
    event.preventDefault();
    let text = $(this).siblings("textarea").val();
    let time = $(this).siblings("div").data("mili");

    localStorage.setItem(time, text);
  }

  save.on("click", saveManager);
  
  let now = dayjs().format("H")


  let varArr = [one, two, three, four, five, nine, ten, eleven, twelve]
  let timeArr = [13, 14, 15, 16, 17, 9, 10, 11, 12]

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

