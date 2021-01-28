import list from "./list";

const taskForm = (task) => {
  console.log("task page", task);
  console.log("task name: ", task.name);
  const form = `
  <form id = "taskForm">
  <table class="styled-table">
  <th>Project Name : ${task.name}</th>
  <tr>
 
    <th>Name</th>
    <th>Status</th>
    <th>Date</th>
    <th>Comment</th>
    <th>Action</th>
    <th></th>
  </tr>
  <tr>
    <td> ${task.name} </td>
    <td> ${task.status}</td>
    <td> ${task.date}</td>
    <td> ${task.comment}</td>
    <td>
        <i id = "edit" class="material-icons button edit">edit</i>
        </td>
        <td>
        <i  id ="delete"class="material-icons button delete">delete</i>
      </td>
  </tr>
  </table>
  </form>
    `;
    $(document).on("click", "#delete", async (e) => {
      console.log("clicked")
      const projectId = task._id;
      console.log("project id: ", projectId)
      // console.log("delete has been clicked")
      e.preventDefault();
    
    
      const response = await $.ajax({
        type: "DELETE",
        url: `api/project/delete/${projectId}`,
        contentType: "application/json",
      });
      
      window.alert("task Deleted!");
      $("body").empty();
      $("body").append((list));
    });
    
  return form;
  
};

// $("#taskrow").on("click", "edit", (e) =>{
//   console.log("edit button was clicked");
//   const idTobeEdited = e.target.id;

//   console.log(idTobeEdited);
//   $(`#heading-${idTobeEdited}`).appendTo();
// })

// const response = $.ajax({
//   type: "Patch", // OR GET
//   url: `api/update/${projectId}`,
//   contentType: "application/json",
//   data: JSON.stringify(response),
// });
// console.log(`This is the response I get back!: ${response}`);
// $(document).on("click", "#taskrow", () => {
// console.log(" edit clicked");
// const projectId = $("#projects").val();

// const response = $.ajax({
//     type: "Patch", // OR GET
//     url: `api/update/${projectId}`,
//     contentType: "application/json",
//     data: JSON.stringify(response),
//   });
// })

    



    // $(document).on("click", "#delete", async (e) => {
    //   // const projectId = task;
    //   // console.log("project id: ", projectId)
    //   // console.log("delete has been clicked")
    //   e.preventDefault();
    
    
    //   const response = await $.ajax({
    //     type: "DELETE",
    //     url: `/api/project/delete/${projectId}`,
    //     contentType: "application/json",
    //   });
    
    //   window.alert("task Deleted!");
  
export default taskForm;
