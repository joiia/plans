import $ from 'jquery';

class OpenModal {
    constructor(button, modal) {
        this.openModalEventBtn = button;
        this.allModals = $(".modal");
        this.modal = modal;
        this.modalBg = modal.find($(".modal__bg"));
        this.events();
    }
    
    events() {      
        this.openModalEventBtn.click(this.showModal.bind(this));
        this.modalBg.click(this.hideModal.bind(this));
    }
    
    showModal(e) {
        e.preventDefault();
        this.allModals.removeClass("modal--is-visible");
        this.modal.addClass("modal--is-visible");
    }
    
    hideModal(e) {
        e.preventDefault();
        this.modal.removeClass("modal--is-visible");
    }
}

export default OpenModal;