console.log("app is running");
///list
const todoList = [];
// console.log("printing to do list", todolist);
$(".resultpage").append('<ul id="todos"></ul>');
todoList.forEach((element, i) => {
  console.log("element", element);
  console.log("index", i);
});
// for (var i=0; i < todoList.length; i++){
//   todoList.push({});
// }
console.log(todoList);

/// P1 New clicked
$( ".grid-item-right" ).click(function() {
    // alert( "You are creating a new task" );
    console.log("Creating a new task");
  });

  // P2 Add project name

  ////// HEADER 
const $container = $(`.modal-header`);
// console.log(" container is : ", $container);

const $h1= `<h1>create a task</h1>`;
// console.log(`h1 is working`, $h1);
$container.append($h1);

//<!-- project name-->

const $modalBody = $(`.modal-body`);
// console.log(" container is : ", $name);
const $form = `
  <form>
    <label>Name</label>
    <input name="name" type="text" placeholder="Project 1"> </input>
    <label for="status">Status</label>
    <select name="status">
      <option value="none">none</option>
      <option value="assign">assign</option>
      <option value="working">working</option>
      <option value="complete">complete</option>
    </select>
    <lable for="date"> Date </lable>
      <input type="text" id="datepicker" name="date"/>
    <label>comment</label>
    <textarea rows="4" cols="50" name="comment"> Enter text here...</textarea>
  </form>
`

// console.log(`h is working`, $h);
$modalBody.append($form);
$( function() {
  $( "#datepicker" ).datepicker();
} );



