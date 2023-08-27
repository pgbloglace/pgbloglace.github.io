function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

$(document).ready(function(){
  $('#en').show();
  $('#sp').hide();
  $('#ge').hide();
  $('#switch-lang-en').click(function() {
    $('#en').show();
    $('#sp').hide();
    $('#ge').hide();
    localStorage.setItem("test", "#en")
  });
  $('#switch-lang-sp').click(function() {
    $('#en').hide();
    $('#sp').show();
    $('#ge').hide();
    localStorage.setItem("test", "#sp")
  });
  $('#switch-lang-ge').click(function() {
    $('#en').hide();
    $('#sp').hide();
    $('#ge').show();
    localStorage.setItem("test", "#ge")
  });
});