"use strict";
exports.__esModule = true;
/**********
    Закрывает форму и очищает все поля

**********/
function CloseForm() {
    var form = document.querySelector('.add-form-wrap');
    form.style.visibility = 'hidden';
    var characts = document.querySelectorAll('.add-form .characts .charact');
    characts[4].style.visibility = 'hidden';
    characts[5].style.visibility = 'hidden';
    var inputs = document.querySelectorAll('.add-form .characts .input-form input[name=value]');
    inputs[3].style.visibility = 'hidden';
    inputs[4].style.visibility = 'hidden';
}
exports.CloseForm = CloseForm;
function ClearForm() {
    var inputs = document.querySelectorAll('.add-form .add-charact input[name=value]');
    var select = document.querySelector('.add-form .add-charact select[name=value]');
    for (var i = 0; i < inputs.length; i++)
        inputs[i].value = '';
    select.value = 'Abstract';
}
exports.ClearForm = ClearForm;
function On() {
    var btn = document.querySelector('.add-form .cancel-btn');
    btn.onclick = function () {
        CloseForm();
        ClearForm();
    };
}
exports.On = On;
