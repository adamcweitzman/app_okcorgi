$(function() {
  console.log("Ruff ruff");
  $("#paw-right").on("click", function(){
  	dog_id = $(this).val();
  	console.log(dog_id);
  	window.location.href="/likes";
  	return dog_id;
  })
});