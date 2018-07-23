import $ from 'jquery';

import MobileMenu from "./modules/MobileMenu";
import OpenModal from "./modules/OpenModal";
import FormFields from "./modules/FormFields";
import OpenPopup from "./modules/OpenPopup";

var mobileMenu = new MobileMenu();

new OpenModal($(".open-modal--add-event"), $(".modal--add-event"));
new OpenModal($(".open-modal--message"), $(".modal--message"));

var formFields = new FormFields();
var openPopup = new OpenPopup();

$(".post__comment-input").keyup(function () {
    if ($(this).val()) {
        $(this).addClass("not-empty");
    } else {
        $(this).removeClass("not-empty");
    }
}).keyup();



