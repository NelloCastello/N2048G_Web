setSizeField();
window.addEventListener('resize', event => setSizeField());

function setSizeField() {
    let elemField = document.querySelector('.game__field');
    let elemContent = document.querySelector('.game__content');
    let elemThis = document.querySelector('.game_container')

    elemField.style.width = "unset";
    elemField.style.height = "unset";
    elemField.style.flex = "1";
    elemThis.style.alignItems = "unset";

    if (elemField.clientHeight <= elemField.clientWidth) {
        elemThis.style.alignItems = "center";
        elemField.style.height = "unset";
        elemField.style.flex = "1";
        elemField.style.width = elemField.clientHeight + "px";
    } else {
        elemField.style.flex = "unset";
        elemField.style.height = elemField.clientWidth + "px";
    }

    if (elemField.clientWidth < elemContent.clientWidth) {
        elemField.style.width = elemContent.clientWidth + "px";
        elemField.style.height = elemField.clientWidth + "px";
    }
}