//texareas to copy
const areas = {
    html: document.querySelector(".htmlCopy"),
    css: document.querySelector(".cssCopy"),
    js: document.querySelector(".jsCopy")
};


const CopyButtons = document.querySelectorAll(".copyBtn");


//copping text from textArea
function copyTextfield() {
    const place = this.dataset.field;
    areas[place].select();
    document.execCommand("copy");
    console.log(areas[place]);
}

CopyButtons.forEach(function (el) {
    el.addEventListener("click", copyTextfield);
});


//changing textareas content
function changeHtml() {
    areas.html.value = `
      <div class="box">
        <h1 class="shadowText">${txt.textContent}</h1>
      </div>`;
}

function changeCss() {
    areas.css.value =
        `  .box {
        width: 600px;
        height: 300px;
    }       
    .box .shadowText {
        color: ${properties.textColor};
        text-transform: ${properties.upperCase};
        font-size: 100px;
        cursor: default;
        line-height: 300px;
    }`;
}

function changeJs() {
    areas.js.value = `
  const txt = document.querySelector(".box .shadowText");
  const box = document.querySelector(".box");
  const moveSensitivity=${properties.moveSensitivity}
  let moveValues = {
    xMove: null,
    yMove: null
}
  box.addEventListener("mousemove", shadow);
  function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = box;
    let { offsetX: x, offsetY: y } = e;
    if (this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }
    moveValues.xMove = Math.round((x / width) * moveSensitivity - moveSensitivity / 2);
    moveValues.yMove = Math.round((y / height) * moveSensitivity - moveSensitivity / 2); 
    txt.style.textShadow=${refreshShadow(true)}
  }`;
}




function refreshAllTexrareas() {
    changeCss();
    changeJs();
    changeHtml();
}
refreshAllTexrareas();