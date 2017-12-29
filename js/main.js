$(function () {
  'use strict';

 
  var $inputs = $('[data-rule]')
    , $form = $('#signup')
    , inputs = [];

  $inputs.each(function (index, node) {
    
    var tmp = new Input(node);
    inputs.push(tmp);
  })

  $form.on('submit', function (e) {
    e.preventDefault();
    $inputs.trigger('blur');

    for (var i = 0; i < inputs.length; i++) {
      var item = inputs[i];
      var r = item.validator.is_valid();
      if (!r) {
        alert('invalid');
        return;
      }
    }

    alert('注册成功');
  })

  function signup() {
    // $.post('/api/signup', {...})
  }
});

