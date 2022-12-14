$(document).ready(function () {
  //global variables
  var pageHeader = $('.p-5');
  var dayContainer = $('.container-lg');
  var timeBlocks = dayContainer.children('.time-block')
  var saveBtns = $('.saveBtn');
  var today = dayjs();
  var currentHour = dayjs().hour();
  var weekDay = today.format('dddd');
  var month = today.format('MMMM');
  var dayDate = today.date();
  //display date
  pageHeader.children('#currentDay').text(weekDay + ", " + month + " " + dayDate);
  //color code time blocks
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
  //retrieve saved text
  for (i = 0; i < timeBlocks.length; i += 1) {
    var timeBlock = timeBlocks.eq(i);
    var savedText = localStorage.getItem(timeBlock.attr('id'));
    timeBlock.children('textarea').val(savedText);
  };

});



