$(document).ready(function(){
  $('#en').hide();
  $('#sp').hide();
  $('#ge').hide();
  $(localStorage.getItem("test")).show();

  $('#switch-lang-en').click(function() {
    $('#en').show();
    $('#sp').hide();
    $('#ge').hide();
  });
  $('#switch-lang-sp').click(function() {
    $('#en').hide();
    $('#sp').show();
    $('#ge').hide();
  });
  $('#switch-lang-ge').click(function() {
    $('#en').hide();
    $('#sp').hide();
    $('#ge').show();
  });
});