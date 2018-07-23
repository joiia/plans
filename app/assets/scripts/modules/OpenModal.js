import $ from 'jquery';

class OpenModal {
    constructor(button, modal) {
        this.openModalEventBtn = button;
        this.modal = modal;
        this.modalBg = modal.find($(".modal__bg"));
        this.events();
    }
    
    events() {      
        this.openModalEventBtn.click(this.toggleVisibility.bind(this));
        this.modalBg.click(this.toggleVisibility.bind(this));
    }
    
    toggleVisibility(e) {
        e.preventDefault();
        this.modal.toggleClass("modal--is-visible");
    }
}

export default OpenModal;