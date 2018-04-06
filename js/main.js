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
        select2: function () {
            $("#listOfFilms").select2({
                width: "100%"
            });
        },

        /* Magnific Popup Plugin */
        maginficPopup: function () {

            // Init popup on click
            $('.open-popup-link').magnificPopup({
                type: 'inline',
                midClick: true
            });

            // Close Popup event handler

            $(document).on('click', '.popup-modal-dismiss', function (e) {
                e.preventDefault();
                $.magnificPopup.close();
            });

        },

        /* Datepicker */
        datepicker: function () {

            $.datetimepicker.setLocale('de');
            $('#datetimepicker1').datetimepicker({
                i18n:{
                    de:{
                        months:[
                            'Januar','Februar','März','April',
                            'Mai','Juni','Juli','August',
                            'September','Oktober','November','Dezember',
                        ],
                        dayOfWeek:[
                            "So.", "Mo", "Di", "Mi",
                            "Do", "Fr", "Sa.",
                        ]
                    }
                },
                timepicker:false,
                format:'d.m.Y'
            });
        }
    };


    /* ------ Plugins Init ------ */
    AppPlugins.navBarFunction();
    AppPlugins.maginficPopup();
    AppPlugins.select2();
    AppPlugins.datepicker();

});