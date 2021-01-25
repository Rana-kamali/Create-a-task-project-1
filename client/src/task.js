
const taskForm = (task)=>{
    console.log("task page", task);
    console.log("task name: ", task.name);
    const form = `
    <form id = "taskForm">
        <input id="projectName" type="text" value="${task.name}" />
    </form>
    `
    return form;
}
export default taskForm;