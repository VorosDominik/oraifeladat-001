// megjelenit.js
import Megjelenitsor from "./megjelenitsor.js";

class Megjelenit {
  #list = [];
  constructor(list, szuloelem) {
    this.#list = list;
    this.szuloelem = szuloelem;
    this.tabelelem = $("<table>").appendTo(szuloelem);

    // Hallgatja az "refresh-display" eseményt
    window.addEventListener('refresh-display', () => {
      this.megjelenites();
    });

    this.megjelenites();
  }

  megjelenites() {
    // Töröld az összes elemet a táblából
    this.tabelelem.empty();

    // Hozz létre egy sor az első sor az összeszokszorított fejléccel
    const headerRow = $("<tr>").appendTo(this.tabelelem);
    for (const header of ["Tevékenység", "Határidő"]) {
      $("<th>").text(header).appendTo(headerRow);
    }

    // Add hozzá az új elemeket a táblázathoz
    this.#list.forEach((elem) => {
      new Megjelenitsor(elem, this.tabelelem);
    });
  }
}

export default Megjelenit;