const taskForm = (task) => {
  console.log("task page", task);
  console.log("task name: ", task.name);
  const form = `
  <form id = "taskForm">
  <table>
  <th>${task.name}</th>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Date</th>
    <th>Comment</th>
  </tr>
  <tr>
    <td> ${task.name} </td>
    <td> ${task.status}</td>
    <td> ${task.date}</td>
    <td> ${task.comment}</td>
  </tr>
  </table>
  </form>
    `;
  return form;
};
export default taskForm;
