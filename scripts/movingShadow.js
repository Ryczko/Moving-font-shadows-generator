let moveValues = {
    xMove: null,
    yMove: null,
    xMoveReverse: null,
    yMoveReverse: null
}




function refreshShadow(isForUser = false) {
    const shadow1Properties = addValues(0, "+", "+", isForUser);
    const shadow2Properties = addValues(1, "-", "-", isForUser);
    const shadow3Properties = addValues(2, "-", "+", isForUser);
    const shadow4Properties = addValues(3, "+", "-", isForUser);

    txt.style.textShadow =
        shadow1Properties +
        shadow2Properties +
        shadow3Properties +
        shadow4Properties;

    forUser = shadow1Properties +
        shadow2Properties +
        shadow3Properties +
        shadow4Properties;
    if (isForUser) return forUser
}

function addValues(index, symbol1, symbol2, isForUser) {
    if (addShadowCheckboxes[index].checked) {
        const idFirst = addShadowCheckboxes.find(el => {
            return el.checked == true;
        }).dataset.index;

        let comma = idFirst == index ? "" : ",";
        let x = null;
        let y = null;


        if (isForUser == false) {
            if (symbol2 == "+" && symbol1 == "+") {
                x = moveValues.xMove;
                y = moveValues.yMove;
            } else if (symbol2 == "-" && symbol1 == "-") {
                x = moveValues.xMoveReverse;
                y = moveValues.yMoveReverse;

            } else if (symbol1 == "-" && symbol2 == "+") {
                x = moveValues.xMoveReverse;
                y = moveValues.yMove;

            } else if (symbol2 == "-" && symbol1 == "+") {
                let z = moveValues.yMove;
                y = -moveValues.xMove;
                x = z;
            }
            return `${comma}${x}px ${y}px ${properties.shadowBlur} ${
             properties["shadowColor" + (index + 1).toString()] }`;

        } else {
            if (comma == ",") {
                comma = `+","+`;
            }
            if (symbol2 == "+" && symbol1 == "+") {
                x = "moveValues.xMove";
                y = "moveValues.yMove";
            } else if (symbol2 == "-" && symbol1 == "-") {
                x = "-moveValues.xMove";
                y = "-moveValues.yMove";

            } else if (symbol1 == "-" && symbol2 == "+") {
                x = "-moveValues.xMove";
                y = "moveValues.yMove";

            } else if (symbol2 == "-" && symbol1 == "+") {
                x = " moveValues.yMove";
                y = "-moveValues.xMove";
            }
            return `${comma}${x}+"px "+ ${y}+"px "+"${properties.shadowBlur} ${
            properties["shadowColor" + (index + 1).toString()] }"`;
        }



    } else return ""
}

function shadow(e) {
    const {
        offsetWidth: width,
        offsetHeight: height
    } = box;
    let {
        offsetX: x,
        offsetY: y
    } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    moveValues.xMove = Math.round(
        (x / width) * properties.moveSensitivity - properties.moveSensitivity / 2
    );
    moveValues.yMove = Math.round(
        (y / height) * properties.moveSensitivity - properties.moveSensitivity / 2
    );
    moveValues.xMoveReverse = -moveValues.xMove;
    moveValues.yMoveReverse = -moveValues.yMove;

    refreshProperties();
    refreshShadow();
}
box.addEventListener("mousemove", shadow);