// urlaposztaly.js
class UrlaPosztaly {
  constructor(szuloElem, lista) {
    this.lista = lista;
    this.adat = { tevekenyseg: "", hatarido: "" };
    this.szuloElem = szuloElem;
    this.Formelem = $("<form> </form>").appendTo(szuloElem);
    this.tevelem();
    this.hatelem();
    this.letrehozGomb();
  }

  tevelem() {
    let txt = `
      <label for="Tevekenysega">Tevekenyseg:</label><br>
      <input type="text" id="tevekenyseg" name="tevekenyseg" value="${this.adat.tevekenyseg}"><br>
    `;
    this.Formelem.append(txt);
  }

  hatelem() {
    let txt = `
      <label for="hataridoa">Hatarido:</label><br>
      <input type="text" id="hatarido" name="hatarido" value="${this.adat.hatarido}"><br>
    `;
    this.Formelem.append(txt);
  }

  letrehozGomb() {
    const that = this;
    const letrehozButton = $("<button>Létrehoz</button>").appendTo(this.szuloElem);

    // Amikor a "Létrehoz" gombra kattintanak, frissítsd az értékeket
    letrehozButton.click(function () {
      that.adat.tevekenyseg = that.Formelem.find('input[name="tevekenyseg"]').val();
      that.adat.hatarido = that.Formelem.find('input[name="hatarido"]').val();

      // Append the data to the lista property
      that.lista.push(that.adat);

      // Trigger a custom event
      const event = new Event('refresh-display');
      window.dispatchEvent(event);

      // You can add additional steps here if needed.
    });
  }
}

export default UrlaPosztaly;