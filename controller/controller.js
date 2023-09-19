import { TODOLIST2 } from "../adatok.js";
import Megjelenit from "../view/Megjelenit.js";
import UrlaPosztaly from "../view/urlaposztaly.js";
import model from "../model/model.js";
class controller{
    constructor(){
        const ujadat = $(".ujadat");
        const szuloElem = $(".tarolo");
        const MODEL= new model()
        new Megjelenit(MODEL.getlist(), szuloElem);
        $(window).on("torol-gomb", (event) => {
          console.log(event.detail);
        });
        new UrlaPosztaly(ujadat, TODOLIST2);
        $(window).on("refresh-display");
        
    }
}
export default controller