import { TODOLIST2 } from "../adatok.js"
class model{
    #list=[]
    constructor(){
        this.#list=TODOLIST2

    }
    ujadat(obj){
        this.#list.push(obj)
    }
    getlist(){
        return this.#list
    }


}
export default model