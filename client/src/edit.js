
import list from "./list";
const editForm = (task) => {
 
  const form = `
  
  <form id="editForm">
  <div>
    <label>Name</label>
    <input name="name" value =${task.name}></input>

    <label for="status">Status</label>
    <input name="status" value=${task.status}></input>
  
    <label for="date" > Date </label>
     <input name="date" value=${task.date}></input>
    <label>comment</label>
    <input name="comment" value = ${task.comment}/></input>

    <label for="categoryId">Project number</label>
    <select name="categoryId" id="categories"></select>
    
    <i type="submit" id="edit" class="btn btn-primary">Submit</i>
    </div>

  </form>
  
    `;

  //Delete
  $(document).on("click", "#edit", async (e) => {
    e.preventDefault();
    console.log("edit clicked");
    const projectId = task._id;
    console.log("project id: ", projectId);
    // console.log("delete has been clicked")

    const response = await $.ajax({
      type: "DELETE",
      url: `api/project/update${projectId}`,
      contentType: "application/json",
    });

    window.alert("task edited!");
    // $("body").empty();
    // $("body").append(edit());
  });

  // Edit
  $(document).on("submit","#editForm", (e) => {
    e.preventDefault();
    console.log("edit button was clicked");
    
    const formvalues= {
      name: $("input[name='name']").val(),
      status: $("input[name='status']").val(),
      date: $("input[name='date']").val(),
      comment: $("input[name='comment']").val(),
      id:$("input[name='taskId']").val()
    }
    console.log("form values: ", formvalues);
    // $("body").appendTo(edit);
  });
  return form;
};

export default editForm;


  
  





















// const edit = () => {
  
//   return form;
// }
// export default edit;
// $(document).on("click", "#edit",  (e) => {
//   e.preventDefault();
//   console.log("clicked");
//   const projectId = task._id;
//   console.log("project id: ", projectId);
// const response = (task) => {
//    const response =  $.ajax({
//       type: "DELETE",
//       url: `api/update/${projectId}`,
//       contentType: "application/json",
//     });


// $(document).on("submit","#toDoForm", async(e)=>{
//     e.preventDefault();
//       const requestBody = {
//       id: $("#projectId").val(),
//       name: $("#name").val(),
//       status: $("#status").val(),
//       date: $("#date").val(),
//       comment: $("#comment").val(),
//       categoryId: $("#categories").val(),
//     };
   
// };


