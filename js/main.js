var $input = $('#todo-input');
var $list = $('.list');

$('form').on('submit', function (e) {
  var $li = $('<li>');

  e.preventDefault();
  $li.html($input.val());
  $list.append($li);
});

$('form').on('click', 'li', function (e) {
  $(this).toggleClass('is-clicked');
});
