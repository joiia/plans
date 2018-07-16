import $ from 'jquery';

class FormFields {
    constructor() {
        this.checkboxFinishDate = $("#event__finish-date");
        this.checkboxFinishTime = $("#event__finish-time");
        this.fieldFinishDate = $(".form__field--finish-date");
        this.fieldFinishTime = $(".form__field--finish-time");
        this.rowDateTime = $(".form__row--finish-date-time");
        this.toggleVisibility(this.checkboxFinishDate, this.fieldFinishDate, this.rowDateTime);
        this.toggleVisibility(this.checkboxFinishTime, this.fieldFinishTime, this.rowDateTime);
    }

    toggleVisibility(checkbox, field, row) {     
        checkbox.click(function() {
            field.toggleClass("form__field--is-hidden");
            //row.removeClass("form__row--is-hidden");

            var checkboxes = checkbox.parents().eq(3).find('input[type="checkbox"]');
            if (!checkboxes.is(":checked")){
                row.addClass("form__row--is-hidden");
            } else {
                row.removeClass("form__row--is-hidden");
            }

        });
    }
    
   

}

export default FormFields;
