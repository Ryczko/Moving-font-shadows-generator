let properties = {}
refreshProperties();

//controls to turn on shadows
const addShadowCheckboxes = [
    ...document.querySelectorAll(".control .shadowEdit input.check")
];

//controls to changing values
const controls = [...document.querySelectorAll(".control input.editField")];


//text input
const txtContentInput = document.querySelector(".txt");

//Generated box and text
const txt = document.querySelector(".box .shadowText");
const box = document.querySelector(".box");


//upperCase Checkbox
const upperCaseCheckbox = document.querySelector(
    ".control .textEdit .upperCase"
);

function textUpperCase() {
    let uc = null;
    if (this.checked) {
        txt.style.textTransform = "uppercase";
        uc = "uppercase";
    } else {
        txt.style.textTransform = "none";
        uc = "none";
    }
    document.documentElement.style.setProperty(`--upperCase`, uc);
    refreshProperties();
    changeCss();
}
upperCaseCheckbox.addEventListener("click", textUpperCase);

txt.style.textShadow = `5px 5px ${properties.shadowBlur} ${properties.shadowColor1}`;
//refrefhing all properties after change


function refreshProperties() {
    properties = {
        shadowBlur: getComputedStyle(document.documentElement).getPropertyValue(
            "--shadowBlur"
        ),
        textColor: getComputedStyle(document.documentElement).getPropertyValue(
            "--textColor"
        ),
        fontWeight: getComputedStyle(document.documentElement).getPropertyValue(
            "--fontWeight"
        ),
        shadowColor1: getComputedStyle(document.documentElement).getPropertyValue(
            "--shadowColor1"
        ),
        shadowColor2: getComputedStyle(document.documentElement).getPropertyValue(
            "--shadowColor2"
        ),
        shadowColor3: getComputedStyle(document.documentElement).getPropertyValue(
            "--shadowColor3"
        ),
        shadowColor4: getComputedStyle(document.documentElement).getPropertyValue(
            "--shadowColor4"
        ),
        boxWidth: getComputedStyle(document.documentElement).getPropertyValue(
            "--boxWidth"
        ),
        boxHeight: getComputedStyle(document.documentElement).getPropertyValue(
            "--boxHeight"
        ),
        moveSensitivity: getComputedStyle(
            document.documentElement
        ).getPropertyValue("--moveSensitivity"),
        upperCase: getComputedStyle(document.documentElement).getPropertyValue(
            "--upperCase"
        ),

    };
}


//turning on/off shadow
addShadowCheckboxes.forEach(el => {
    el.addEventListener("click", function () {
        el.parentElement.parentElement.classList.toggle("shadowUnactive");
        refreshShadow();
        refreshProperties();
        refreshAllTexrareas();
    });
});


//changing text content
function changeTxtContent() {
    txt.textContent = this.value;
    changeHtml();
    changeCss();
}
txtContentInput.addEventListener("input", changeTxtContent);


//changing parameters
function changeParameters() {
    const px = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + px);
    console.log(this.name, this.value);
    refreshProperties();
    refreshShadow();
    refreshAllTexrareas();
}


controls.forEach(control => {
    control.addEventListener("change", changeParameters);
    control.addEventListener("mousemove", changeParameters);
});