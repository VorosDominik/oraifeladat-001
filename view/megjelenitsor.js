// megjelenitsor.js
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
      this.#eseményTrigger("kesz-esemeny");
    });

    // Eseménykezelő a "Megse" gombra
    sorElem.find(".megse-gomb").on("click", () => {
      sorElem.css("background-color", "red");
      this.#eseményTrigger("megse-esemeny");
    });

    // Eseménykezelő a "Töröl" gombra
    sorElem.find(".torol-gomb").on("click", () => {
      sorElem.remove();
      this.#eseményTrigger("torol-esemeny");
    });
  }

  #eseményTrigger(eseménynev) {
    const customEvent = new CustomEvent(eseménynev, { detail: this.#adat });
    window.dispatchEvent(customEvent);
  }
}

export default Megjelenitsor;