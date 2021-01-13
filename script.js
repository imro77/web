
var menuItems = document.getElementsByClassName("sekcia");
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

//var list = $('.menu a');
//console.info(list);
//list.click(function() {
//window.alert('click');
//    list.removeClass('active');
//    console.info("klik:",this);
    //$(this).addClass('active');
//</script>}); 

//jQuery('.sekcia').click(function(){
//    jQuery('.sekcia').removeClass('active');
//    jQuery(this).addClass('active');
//  });
