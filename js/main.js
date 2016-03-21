var $input = $('#todo-input');
var $list = $('.list');

$('form').on('submit', 'click', 'li', function (e) {
  var $li = $('<li>');
  e.preventDefault();
  $li.html($input.val());
  $list.append($li);
});
