



import { TODOLIST2 } from "./adatok.js";
import  Megjelenit  from "./Megjelenit.js";
$(document).ready(function () {

    
    const szuloElem = $(" .tarolo")
    new Megjelenit(TODOLIST2,szuloElem);
    $(window).on("torol-gomb", (event) =>{
        console.log(event.detail)
    })


})
    