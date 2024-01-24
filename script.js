const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click",() => {
    menuList.classList.toggle("hidden");
});
window.addEventListener("scroll",function(){
    var header = document.squerySelectior("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});
document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById('menu-icon');
    var menuList = document.getElementById('menu-list');

    menuIcon.addEventListener('click', function () {
        menuList.classList.toggle('active');
    });

    window.addEventListener('scroll', function () {
        var header = document.querySelector('header');
        if (window.scrollY > header.offsetTop + header.offsetHeight) {
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.width = '100%';
        } else {
            header.style.position = 'static';
        }
    });
});
function toggleDropdown(dropdownId) {
  var dropdownOptions = document.getElementById(dropdownId);
  if (dropdownOptions.style.display === "block") {
    dropdownOptions.style.display = "none";
  } else {
    dropdownOptions.style.display = "block";
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      var dropdownId = "dropdownOptions" + (i + 1); // Construct the corresponding dropdown ID
      if (openDropdown.style.display === "block" && event.target.id !== dropdownId) {
        openDropdown.style.display = "none";
      }
    }
  }
}
