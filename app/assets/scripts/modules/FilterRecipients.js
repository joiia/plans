import $ from 'jquery';

class FilterRecipients {
    constructor() {
        this.filter();
    }

    filter() {
        $(".popup--recipients .popup__select-all").on('click', function () {
            $(this).find(".table-item__check").toggleClass("table-item__check--is-checked");
            
            if (!$(".popup--recipients .popup__container .table-item__check--is-checked").length) {
                $(".popup--recipients .popup__container .table-item__check").toggleClass("table-item__check--is-checked");
                $(".panel__item--recipients .table-item__recipient").removeClass('table-item__recipient--is-hidden');
            } else if ($(".popup--recipients .popup__container .table-item__check--is-checked").length >= $(".popup--recipients .popup__container .table-item__check").length ) {
                $(".popup--recipients .popup__container .table-item__check").toggleClass("table-item__check--is-checked");
                $(".panel__item--recipients .table-item__recipient").addClass('table-item__recipient--is-hidden');
            } else {
                $(".popup--recipients .popup__container .table-item__check:not(.table-item__check--is-checked)").toggleClass("table-item__check--is-checked");
                $(".panel__item--recipients .table-item__recipient").removeClass('table-item__recipient--is-hidden');
            }
        });

        $(".popup--recipients .popup__container .popup__row").on('click', function () {
            $(".popup--recipients .popup__select-all .table-item__check").removeClass("table-item__check--is-checked");
            $(this).find(".table-item__check").toggleClass("table-item__check--is-checked");
            $(".panel__item--recipients .table-item__recipient").eq($(this).index()).toggleClass('table-item__recipient--is-hidden');
        });
        
        $(".panel__item--recipients .table-item__delete").on('click', function () {
            $(this).parent().toggleClass('table-item__recipient--is-hidden');
            $(".popup--recipients .popup__container .table-item__check").eq($(this).parent().index()).toggleClass('table-item__check--is-checked');
        });

    }
}

export default FilterRecipients;