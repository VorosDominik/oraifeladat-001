import Megjelenitsor from "./megjelenitsor.js";
class Megjelenit {
  #list = [];
  constructor(list, szuloelem) {
    this.#list = list;
    this.szuloelem = szuloelem;
    this.tabelelem = $("<table>").appendTo(szuloelem);
    this.megjelenites();
  }

  megjelenites() {
    this.#list.forEach((elem) => {
      new Megjelenitsor(elem, this.tabelelem);
    });
  }
}
export default Megjelenit