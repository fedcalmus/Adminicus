$(function() {

    var AppPlugins = {

        /* Navigation Toggle */
        navBarFunction: function () {

            var toggle = $(".menuToggle"),
                menuItems = $(".menuItems"),
                className = "showMenuItems";

            toggle.on("click", function () {
                menuItems.toggleClass(className);
            });

        },

        /* Select2 Plugin */
        select2: function() {
            $("#listOfFilms").select2({
                width: "100%"
            });
        },

        /* Magnific Popup Plugin */
        maginficPopup: function () {

            // Init popup on click
            $('.open-popup-link').magnificPopup({
                type:'inline',
                midClick: true
            });

            // Close Popup event handler
            $(document).on('click', '.popup-modal-dismiss', function (e) {
                e.preventDefault();
                $.magnificPopup.close();
            });

        }
    };

    /* ------ Plugins Init ------ */
    AppPlugins.navBarFunction();
    AppPlugins.maginficPopup();
    AppPlugins.select2();

});