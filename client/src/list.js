import taskForm from "./task"
const form = `
<form id = "projectsForm">
<div class="form-group">
<label for="projectId">Project name</label>
<select name="projectId" id="projects"></select>
</div>
<button type="submit" class="btn btn-primary">show Tasks</button>

</form>
<ul id="tasksList" ></ul>
<div id="taskDetail"></div>

`;

const list = () => {
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/project/all",
  }).done((ProjectCategories) => {
    console.log("ProjectCategories: ", ProjectCategories);
    let optionsHtml = "";
    ProjectCategories.forEach((projectEl) => {
      console.log("projectEl: ", projectEl);
      optionsHtml += `<option value=${projectEl._id}>${projectEl.projectName}</option>`;
      console.log("optionsHtml", optionsHtml);
    });
    console.log("optionsHtml", optionsHtml);
    $("#projects").append(optionsHtml);
  });

  $(document).on("submit", "#projectsForm", (e) => {
    e.preventDefault();
    console.log($("#projects").val());
    const projectId = $("#projects").val();
    $.ajax({
      type: "GET",
      url: `http://localhost:3000/project/getById/${projectId}`,
    }).done((tasks) => {
      $("#tasksList").empty();

      tasks.forEach((task) => {
        const taskHtml = $(`<li>${task.name}</li>`);

        taskHtml.on("click", () => {
          console.log("id: ", task);
          const detail = taskForm(task);
          console.log("detail: ", detail);
          $("#taskDetail").empty();
          $("#taskDetail").append(detail);
        });
        $("#tasksList").append(taskHtml);

      });
    });
  });
  return form;
};

export default list;
