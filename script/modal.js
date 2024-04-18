$('.button').click(function(){
    var buttonId = $(this).attr('id');
    $('#modal-container').fadeIn().removeAttr('class').addClass(buttonId + '-modal');
    $('body').addClass('modal-active');
  });
  
  $('#modal-container .close').click(function(){
    $('#modal-container').fadeOut().addClass('out');
    $('body').removeClass('modal-active');
  });
  
  $('#modal-container').click(function(e){
    if (e.target === this) {
      $(this).fadeOut().addClass('out');
      $('body').removeClass('modal-active');
    }
  });
  