
import newInfo from "./newInfo";

const form =`
<form id ="loginForm">
<div>
  <h3>Login to your account</h3>
  
    <input type="text" name="name" placeholder="User Name" />
    <input type="text" name="password" placeholder="Password" />
    <input type="submit" value="login" />
  </form>
</div>`

const login = () => {
  $(document).on("submit", "#loginForm",  async(event) => {
    console.log("event", event);
    event.preventDefault();

    const formData = {
      username: $("input[name='name']").val(),
      password: $("input[name='password']").val(),
    };
    console.log("formData", formData);
    const response = $.ajax({
        type: "POST",
        url: "/api/user/login",
        contentType: "application/json",
        data: JSON.stringify(formData),

        
      });
    console.log("response", response);
    $("body").empty();
    $("body").append((newInfo));

    
    
  });
    return form
}
export default login;
