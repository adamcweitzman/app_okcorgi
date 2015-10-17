$(function() {
  console.log("Ruff ruff");
  $("#paw-right").on("click", function(){
  	var dog_id = $(this).val();
  	console.log(dog_id);
  	window.location.href="/likes";
  	return dog_id;
  })
});