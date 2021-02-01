import edit from "./edit";
import list from "./list";

const taskForm = (task) => {
  console.log("task page", task);
  console.log("task name: ", task.name);
  const form = `
  
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
  <form id = "taskForm">
  <tr>
    <td> <input name="name" value =${task.name}></td>
    <td><input name="status" value=${task.status}> </td>
    <td><input name="date" value=${task.date}></td>
    <td><input name="comment" value = ${task.comment}></td>
    <input name="taskId" value=${task._id} type="hidden"/>
    <td>
        <button type="submit" id ="edit" class="material-icons button edit">edit</button>
        </td>
        <td>
        <i  id ="delete"class="material-icons button delete">delete</i>
      </td>
  </tr>
  </form>
  </table>
  
    `;

  //Delete
  $(document).on("click", "#delete", async (e) => {
    e.preventDefault();
    console.log("clicked");
    const projectId = task._id;
    console.log("project id: ", projectId);
    // console.log("delete has been clicked")

    const response = await $.ajax({
      type: "DELETE",
      url: `api/project/delete/${projectId}`,
      contentType: "application/json",
    });

    window.alert("task Deleted!");
    $("body").empty();
    $("body").append(list);
  });

  // Edit
  $(document).on("submit","#taskForm", (e) => {
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

export default taskForm;
