import $ from 'jquery';

class OpenModal {
    constructor() {
        this.openModalEventBtn = $(".open-modal--add-event");
        this.modalEvent = $(".modal--add-event");
        this.modalBg = $(".modal__bg");
        this.events();
    }
    
    events() {      
        this.openModalEventBtn.click(this.toggleVisibility.bind(this));
        this.modalBg.click(this.toggleVisibility.bind(this));
    }
    
    toggleVisibility(e) {
        e.preventDefault();
        this.modalEvent.toggleClass("modal--is-visible");
    }
}

export default OpenModal;