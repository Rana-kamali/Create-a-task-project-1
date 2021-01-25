
const form = `
<div id = "todlist">
<label>items</label>
  <input type="text" placeholder="Item ID "name="list" id = "list"> </input>
  </div>
<ol>
<li id = "list"></li>
</ol>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
`;


const newlist = () =>{
  
  $(document).on("click", () =>{
  console.log("button clicked :")
const listData = $.get(`http://localhost:3000/project/getById`,(data) => {
    console.log(data);
    const todolist = data.value;
    const list = `<li id="1">${todolist}</li>`;
    $("#list").append("#1");
}) 
    

  })
  return form;
}
  
  export default newlist;