import $ from 'jquery';

class OpenPopup {
    constructor() {
        this.popupParent = $(".popup__parent");
        this.popupLink = $(".popup__link");
        this.popupDiv = $(".popup");
        this.showPopup();
    }

    showPopup() {
        var link = this.popupLink;

        link.click(function(e) {

            var that = $(this);
            var parent = that.parent();
            var popup = parent.find(".popup");

            e.preventDefault();
            popup.addClass("popup--is-visible");

            $(document).mouseup(function (e){ 
                if (!popup.is(e.target) && popup.has(e.target).length === 0) {
                    popup.removeClass("popup--is-visible");
                };
            });
        });
    }
}

export default OpenPopup;