console.log("app is running");
/// P1 New clicked
$( ".grid-item-right" ).click(function() {
    // alert( "You are creating a new task" );
    console.log("Creating a new task");
  });

  // P2 Add project name

  ////// HEADER 
const $container = $(`.modal-header`);
console.log(" container is : ", $container);

const $h1= `<h1>create a task</h1>`;
console.log(`h1 is working`, $h1);
$container.append($h1);

//<!-- project name-->
const $name = $(`.modal-body`);
console.log(" container is : ", $name);

const $h= `<p>
<label>Name</label>
<input type="text" class="nameInput" placeholder="Project 1"> </input>
</p>`;
console.log(`h is working`, $h);
$name.append($h);
$(".btn-primary").on("click", () => {
  console.log("was clicked!");
  const input = $(".nameInput").val();
  console.log(input);
$(".nameInput").append(input);
}); 


// <!-- project status-->
////status
const $select = $(`.modal-body`);
console.log(" select : ", $select);

const $h2= `<label for="status">Status</label>
<select name="status-form" id="status-form">
<option value="none">none</option>
<option value="assign">assign</option>
<option value="working">working</option>
<option value="complete">complete</option>
</select>`;

console.log(`select is working`,$h2 );
$select.append($h2);

$(".btn-primary").on("click", () => {
  console.log("was clicked!");
  const form = $("#status-form").val();
  console.log(form);
$("#status-form").append(form);


}); 
//  <!-- comment box --> 
const $comment = $(`.modal-body`);
console.log(" comment is : ", $comment);

const $h3= `<br>
<label>comment</label>
<textarea rows="4" cols="50" name="comment" form="usrform" id="commentform">
Enter text here...</textarea>`;

console.log(` is working`, $h3);
$comment.append($h3);

$(".btn-primary").on("click", () => {
  console.log("was clicked!");
  const wittecomment = $("#commentform").val();
  console.log(wittecomment);
$("#commentform").append(wittecomment);
}); 

