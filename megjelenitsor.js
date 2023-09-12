class Megjelenitsor {
    #adat = {};
  
    constructor(adat, szuloelem) {
      this.#adat = adat;
      this.tablaElem = szuloelem;
      this.hozzaadSor();
    }
  
    hozzaadSor() {
      let txt = "<tr>";
      for (const key in this.#adat) {
        txt += `<td> ${this.#adat[key]} </td>`;
      }
      txt += `<td>
                <button class="kesz-gomb">🛡</button>
                <button class="megse-gomb">⚔</button>
                <button class="torol-gomb">🧨</button>
              </td>`;
      txt += "</tr>";
      
      const sorElem = $(txt);
      this.tablaElem.append(sorElem);
  
      // Eseménykezelő a "Kész" gombra
      sorElem.find(".kesz-gomb").on("click", () => {
        sorElem.css("background-color", "green");
      });
  
      // Eseménykezelő a "Megse" gombra
      sorElem.find(".megse-gomb").on("click", () => {
        sorElem.css("background-color", "red");
      });
  
      // Eseménykezelő a "Töröl" gombra
      sorElem.find(".torol-gomb").on("click", () => {
        sorElem.remove();
      });
    }
    /* #eseményTrigger(esemnynev){
        const esemnynev = new costumeEvent(esemnynev , {derail:this})
        window.dispatchEvent(esemnynev);

    } */
  }
  
  export default Megjelenitsor;
  