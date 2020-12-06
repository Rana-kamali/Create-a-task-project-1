console.log("app is running");
/// P1 New clicked
$( ".grid-item-right" ).click(function() {
    alert( "You are creating a new task" );
    console.log("Creating a new task");
  });

  // P2 Add project name


$(".btn-primary").on("click", () => {
  console.log("was clicked!");
  const input = $(".nameInput").val();
  console.log(input);
$(".nameInput").append(input);
});