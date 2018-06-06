window.onload = onWindowLoaded;


function onWindowLoaded() {
    tryToListen('button', 'click', onButtonClicked);
    tryToListen('movie', 'click', onMovieClicked);
    tryToListen('close_form', 'click', onButtonCloseClicked);
    tryToListen('submit', 'click', onButtonSubmitClicked);
    tryToListen('mask', 'mouseup', onOutOfFormClicked);
    tryToListen('name', 'focus', focusFieldName);
    tryToListen('email', 'focus', focusFieldEmail);
    tryToListen('message', 'focus', focusFieldMessage);
}

function focusFieldMessage(){
    var el = getById("message");
    el.style.borderColor = "#c9c9c9";
}

function focusFieldEmail(){
    var el = getById("email");
    el.style.borderColor = "#c9c9c9";
}

function focusFieldName(){
    var el = getById("name");
    el.style.borderColor = "#c9c9c9";
}

function onOutOfFormClicked() {
    var el = getById('mask');
    mask.style.cursor = 'default';
    onButtonCloseClicked();
    
}

function onButtonSubmitClicked() {
    var formIsValid = true;
    
    var requiredFields = document.getElementsByClassName('requied_field');
    
    for (var i = 0; i < requiredFields.length; i++) {
        if (requiredFields[i].value == '') {
            requiredFields[i].style.borderColor = '#FF0000';
            formIsValid = false;
        } else {
            requiredFields[i].style.borderColor = '#c9c9c9';    
        }
    }    
    
    if (formIsValid == false) {  
        event.preventDefault();
    }    
}

function onButtonCloseClicked() {
    var el = getById('form');
    el.style.display = 'none';
    el.style.boxShadow = 'none';
    
    document.body.style.overflow = 'auto';
}

function onButtonClicked() {
    
    var form = getById('form');
    var mask = getById('mask');
    
    mask.style.cursor = 'pointer';
    
    form.style.display = 'block';
    form.style.position = 'absolute';
    form.style.top = '350px';
    form.style.left = '0';
    form.style.right = '0';
    form.style.margin = 'auto';
    form.style.boxShadow = '0 0 0 9999px rgba(0, 0, 0, 0.8)';
    
    document.body.style.overflow = 'hidden';
}

function displayEl(el) {
    el.style.display = 'block';
}

function opacityEl(el) {
    el.style.opacity = 1;
}

function onMovieClicked() {
    event.preventDefault();
    var el = getById('more_movie');
    var button = getById('movie');

    displayEl(el);
    setTimeout(opacityEl, 0, el);
    
    button.style.display = "none";
}

function getById(id) {
    return document.getElementById(id);
}

function tryToListen(id, eventName, func) {
    var el = getById(id);
    if (el) {
        el.addEventListener(eventName, func)
    }
}

/*

1. Задать класс для обязательных к проверке полей.
2. По клику на темный фон форма не закрывается.
3. Не убираются красные поля при клике на input.

*/