import list from "./list";

const form = `
  <form id="toDoForm">
  <div class = "form-group">
    <label>Name</label>
    <input type="text" placeholder="Project 1 "name="name" id = "name"> </input>
    </div>
    <div class ="form-group">
    <label for="status">Status</label>
    <select name="status" id = "status">
      <option value="none">none</option>
      <option value="assign">assign</option>
      <option value="working">working</option>
      <option value="complete">complete</option>
    </select>
    </div>
    <div class= "form-group">
    <label for="date" > Date </label>
     <input type="text"  id = "date" name="date" placeholder="yy/mm/dd"/>
     </div>
     <div class="form-group">
    <label>comment</label>
    <textarea name="comment" id = "comment">Comment</textarea>

    </div>
    <div class="form-group">
    <label for="categoryId">Project number</label>
    <select name="categoryId" id="categories"></select>
  </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
    <br>
    <button id = "yourTask"ype="button" class="btn btn-primary">Your Task</button>
    

  </form>

`;


const newInfo = () =>{
  
    const categoryResponse = $.ajax({
      type: "GET",
      url: "/api/project/all",
    }).done((ProjectCategories) => {
      console.log("ProjectCategories: ", ProjectCategories);
      let optionsHtml = "";
      ProjectCategories.forEach((projectEl) => {
        console.log("projectEl: ", projectEl);
        optionsHtml += `<option value=${projectEl._id}>${projectEl.projectName}</option>`;
        console.log("optionsHtml", optionsHtml);
      });
      console.log("optionsHtml", optionsHtml);
      $("#categories").append(optionsHtml);
    });

    $(document).on("click", "#yourTask",() => {
      console.log("clicked");
      $("body").empty();
      $("body").append((list));
    });

  $(document).on("submit","#toDoForm", async(e)=>{
    e.preventDefault();
    console.log($("#name").val());
    console.log($("#status").val());
    console.log($("#date").val());
    console.log($("#comment").val());
    console.log($("#categories").val());
    console.log("data entered");

    const requestBody = {
      name: $("#name").val(),
      status: $("#status").val(),
      date: $("#date").val(),
      comment: $("#comment").val(),
      categoryId: $("#categories").val(),
      // categoryId: $("#categoryList").val(),
    };
    console.log("request body: ", requestBody);

    const response = await $.ajax({
      type: "POST", 
      url: "http://localhost:3000/internal/add",
      contentType: "application/json",
      data: JSON.stringify(requestBody),
    });
    console.log("response", response);

    console.log(`This is the response I get back!: ${response}`);
   
  })


  
  return form;
}


export default newInfo;
