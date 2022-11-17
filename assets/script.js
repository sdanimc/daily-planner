// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//is below right?
var pageHeader = $('.p-5');
var dayContainer = $('.container-lg');
//var timeBlocks = $('.time-block');
var saveBtns = $('.saveBtn');
var today = dayjs();
console.log(today);
var currentHour = dayjs().hour();
var weekDay = today.format('dddd');
var month = today.format('MMMM');
var dayDate = today.date();

$(function () {
  //display date
  pageHeader.children('#currentDay').text(weekDay + ", " + month + " " + dayDate);
  //color code time blocks
  var timeBlocks = dayContainer.children('.time-block')
  for (i = 0; i < timeBlocks.length; i += 1) {
    var timeBlock = timeBlocks.eq(i)
    var blockTime = 9 + i;
    if (blockTime > currentHour) {
      timeBlock.removeClass('present');
      timeBlock.removeClass('past');
      timeBlock.addClass('future');
    }
    else if (blockTime < currentHour) {
      timeBlock.removeClass('present');
      timeBlock.removeClass('future');
      timeBlock.addClass('past');
    }
    else {
      timeBlock.removeClass('future');
      timeBlock.removeClass('past');
      timeBlock.addClass('present');
    };
  };
  /* // TODO: Add a listener for click events on the save button. This code should
   // use the id in the containing time-block as a key to save the user input in
   // local storage. HINT: What does `this` reference in the click listener
   // function? How can DOM traversal be used to get the "hour-x" id of the
   // time-block containing the button that was clicked? How might the id be
   // useful when saving the description in local storage?
  saveBtns.on('click, function(event?)){
    getparent attribute
   $('#)
   }
  
   */

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});



