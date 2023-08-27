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
  if (localStorage.getItem("lang") === null) {
    $('#en').show();
    $('#sp').hide();
    $('#ge').hide();
    localStorage.setItem("lang", "#en");

    $('#en_home').show();
    $('#en_algorithms').show();
    $('#en_c_vision').show();

    $('#sp_home').hide();
    $('#sp_algorithms').hide();
    $('#sp_c_vision').hide();
  
    $('#ge_home').hide();
    $('#ge_algorithms').hide();
    $('#ge_c_vision').hide();
  } else {
    $('#en').hide();
    $('#sp').hide();
    $('#ge').hide();
    $(localStorage.getItem("lang")).show();

    $('#en_home').hide();
    $('#en_algorithms').hide();
    $('#en_c_vision').hide();

    $('#sp_home').hide();
    $('#sp_algorithms').hide();
    $('#sp_c_vision').hide();
  
    $('#ge_home').hide();
    $('#ge_algorithms').hide();
    $('#ge_c_vision').hide();

    $(localStorage.getItem("lang") + '_home').show();
    $(localStorage.getItem("lang") + '_algorithms').show();
    $(localStorage.getItem("lang") + '_c_vision').show();
  }
  
  $('#switch-lang-en').click(function() {
    $('#en').show();
    $('#sp').hide();
    $('#ge').hide();
    localStorage.setItem("lang", "#en")

    $('#en_home').show();
    $('#en_algorithms').show();
    $('#en_c_vision').show();
  
    $('#sp_home').hide();
    $('#sp_algorithms').hide();
    $('#sp_c_vision').hide();
  
    $('#ge_home').hide();
    $('#ge_algorithms').hide();
    $('#ge_c_vision').hide();
  });
  $('#switch-lang-sp').click(function() {
    $('#en').hide();
    $('#sp').show();
    $('#ge').hide();
    localStorage.setItem("lang", "#sp")

    $('#en_home').hide();
    $('#en_algorithms').hide();
    $('#en_c_vision').hide();
  
    $('#sp_home').show();
    $('#sp_algorithms').show();
    $('#sp_c_vision').show();
  
    $('#ge_home').hide();
    $('#ge_algorithms').hide();
    $('#ge_c_vision').hide();
  });
  $('#switch-lang-ge').click(function() {
    $('#en').hide();
    $('#sp').hide();
    $('#ge').show();
    localStorage.setItem("lang", "#ge")

    $('#en_home').hide();
    $('#en_algorithms').hide();
    $('#en_c_vision').hide();
  
    $('#sp_home').hide();
    $('#sp_algorithms').hide();
    $('#sp_c_vision').hide();
  
    $('#ge_home').show();
    $('#ge_algorithms').show();
    $('#ge_c_vision').show();
  });
});