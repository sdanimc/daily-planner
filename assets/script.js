// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var pageHeader = $('.p-5');
var dayContainer = $('.container-lg');
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
  //save text to localstorage
  saveBtns.click(function () {
    var parentId = $(this).parent().attr('id');
    var text = $(this).siblings('textarea').val();
    console.log(text);
    window.localStorage.setItem(parentId, text);
  }
  );
  //retrieve saved texts
  for (i = 0; i < timeBlocks.length; i += 1) {
    var timeBlock = timeBlocks.eq(i);
    var savedText = localStorage.getItem(timeBlock.attr('id'));
    timeBlock.children('textarea').val(savedText);
  };

});



