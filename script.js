class EJModal {
  constructor(location, htmlId) {
    this.displayDiv = document.getElementById(location);
    this.modalArea = document.createElement("div");
    this.modalBox = document.createElement("div");
    this.modalClose = document.createElement("div");
    this.modalSection = document.createElement("section");
    this.modalHTMLDiv = document.getElementById(htmlId);
    this.modalHTML = this.modalHTMLDiv.childNodes[1];
  }

  createModalArea() {
    this.displayDiv.appendChild(this.modalArea);
    this.modalArea.setAttribute("class", "modal-area");
    this.modalArea.style.display = true;
    this.modalArea.style.position = "fixed";
    this.modalArea.style.zIndex = 1;
    this.modalArea.style.left = 0;
    this.modalArea.style.top = 0;
    this.modalArea.style.width = "100%";
    this.modalArea.style.height = "100%";
    this.modalArea.style.overflow = "auto";
    this.modalArea.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    window.onclick = function (event) {
      if (event.target === this.modalArea) {
        this.modalArea.style.display = "none";
      }
    }.bind(this);
  }

  createModalBox() {
    this.modalArea.appendChild(this.modalBox);
    this.modalBox.setAttribute("class", "modal-box");
    this.modalBox.style.backgroundColor = "#fefefe";
    this.modalBox.style.margin = "auto";
    this.modalBox.style.padding = "20px";
    this.modalBox.style.border = "1px solid #888";
    this.modalBox.style.width = "60%";
    this.modalBox.style.marginTop = "100px";
    this.modalBox.style.marginBottom = "100px";
  }

  createModalClose() {
    this.modalBox.appendChild(this.modalClose);
    this.modalClose.setAttribute("class", "modal-close");
    this.modalClose.setAttribute("id", "modal_close");
    this.modalClose.innerHTML = "Close";
    this.modalClose.addEventListener(
      "click",
      function () {
        this.modalArea.style.display = "none";
      }.bind(this)
    );
    this.modalClose.style.color = "#aaaaaa";
    this.modalClose.style.fontSize = "28px";
    this.modalClose.style.fontWeight = "bold";
    this.modalClose.style.width = "100%";
    this.modalClose.style.textAlign = "center";
    this.modalClose.style.background =
      "linear-gradient(45deg, transparent 5%, #ff013c 5%)";
    this.modalClose.setAttribute(
      "onmouseover",
      "myModal.modalCloseMouseover()"
    );
    this.modalClose.setAttribute(
      "onmouseleave",
      "myModal.modalCloseMouseleave()"
    );
  }

  modalCloseMouseover() {
    this.modalClose.style.color = "#000";
    this.modalClose.style.cursor = "pointer";
  }

  modalCloseMouseleave() {
    this.modalClose.style.color = "#aaaaaa";
  }

  createModalSection() {
    this.modalBox.appendChild(this.modalSection);
    this.modalSection.setAttribute("class", "modal-section");
    this.modalSection.appendChild(this.modalHTML);
    this.modalHTMLDiv.style.display = "none";
    this.modalSection.style.overflow = "auto";
    this.modalSection.style.backgroundColor = "rgba(117, 58, 58, 0.2)";
    this.modalSection.style.top = "2px";
    this.modalSection.style.padding = "7px";
  }

  render() {
    this.createModalArea();
    this.createModalBox();
    this.createModalClose();
    this.createModalSection();
  }
}

let myModal = new EJModal("location", "modalHTML");
myModal.render();

//<div id="location"></div>
//<div id="modalHTML"><div>
//<p> aaa</p>
//<p>bbb</p>
//</div></div>