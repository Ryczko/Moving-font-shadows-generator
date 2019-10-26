new Picker({
    parent: document.querySelector('.shadowEdit .shadowColor1'),
    color: '255, 255, 255',
    popup: 'top',
    onChange: function (color) {
        colorChanging('shadowColor1', color)
    }

});
new Picker({
    parent: document.querySelector('.shadowEdit .shadowColor2'),
    color: '#1e90ff',
    popup: 'top',
    onChange: function (color) {
        colorChanging('shadowColor2', color)
    }

});
new Picker({
    parent: document.querySelector('.shadowEdit .shadowColor3'),
    color: '#ffd700',
    popup: 'top',
    onChange: function (color) {
        colorChanging('shadowColor3', color)
    }

});
new Picker({
    parent: document.querySelector('.shadowEdit .shadowColor4'),
    color: '#ee5ac9',
    popup: 'top',
    onChange: function (color) {
        colorChanging('shadowColor4', color)
    }

});
new Picker({
    parent: document.querySelector('.control .textColor'),
    color: '#000000',
    popup: 'top',
    onChange: function (color) {
        colorChanging('textColor', color, 'control');
        txt.style.color = `rgba(${color.rgba})`;
    }

});

function colorChanging(name, color, name2 = 'shadowEdit') {
    document.querySelector(`.${name2} .${name}`).style.backgroundColor = `rgba(${color.rgba})`;
    document.documentElement.style.setProperty(`--${name}`, color.rgba);
    refreshProperties();
    refreshAllTexrareas();
    refreshShadow();
}