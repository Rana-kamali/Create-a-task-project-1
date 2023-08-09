import "regenerator-runtime/runtime";
import style from "./style.css";


import newInfo from "./newInfo";
import list from "./list";
import login from "./login";
import editForm from "./edit";


// $("body").prepend(login());
// $("body").prepend(newInfo());
$("body").prepend(list());
$("body").prepend(editForm());
const testFunction = ()=>{
    console.log("testFunction");
}