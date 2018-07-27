import $ from 'jquery';
const SimpleScrollbar = require('simple-scrollbar');

import MobileMenu from "./modules/MobileMenu";
import OpenModal from "./modules/OpenModal";
import FormFields from "./modules/FormFields";
import OpenPopup from "./modules/OpenPopup";
import FilterRecipients from "./modules/FilterRecipients";


var mobileMenu = new MobileMenu();

new OpenModal($(".open-modal--add-event"), $(".modal--add-event"));
new OpenModal($(".open-modal--messages"), $(".modal--messages"));
new OpenModal($(".open-modal--new-message"), $(".modal--new-message"));

var formFields = new FormFields();
var openPopup = new OpenPopup();
var filterRecipients = new FilterRecipients();

$(".post__comment-input").keyup(function () {
    if ($(this).val()) {
        $(this).addClass("not-empty");
    } else {
        $(this).removeClass("not-empty");
    }
}).keyup();




var el = document.querySelector('.popup__container');
SimpleScrollbar.initEl(el);
