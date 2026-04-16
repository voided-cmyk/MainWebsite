$(document).ready(function() {
    console.log("Membership page loaded.");

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    $("#membership-form").on("submit", function(event) {
        event.preventDefault();

        var formIsValid = true;
        var name = $("#full-name").val().trim();
        var email = $("#email").val().trim();

        if (name === "") {
            $("#error-name").addClass("show");
            $("#full-name").addClass("invalid");
            formIsValid = false;
        } else {
            $("#error-name").removeClass("show");
            $("#full-name").removeClass("invalid");
        }

        if (email === "" || !emailRegex.test(email)) {
            $("#error-email").addClass("show");
            $("#email").addClass("invalid");
            formIsValid = false;
        } else {
            $("#error-email").removeClass("show");
            $("#email").removeClass("invalid");
        }

        if ($("input[name='membership']:checked").length === 0) {
            $("#error-membership").addClass("show");
            formIsValid = false;
        } else {
            $("#error-membership").removeClass("show");
        }

        if (formIsValid) {
            // week 9 slides on fade in & out
            $(this).find("fieldset, .form-submit").fadeOut(300, function() {
                $("#success-msg").fadeIn(400);
            });

            console.log("Membership form submitted:");
            console.log("Full name:", name);
            console.log("Email:", email);
            console.log("Membership type:", $("input[name='membership']:checked").val());

            var selectedFacilities = [];
            $("input[name='facility']:checked").each(function() {
                selectedFacilities.push($(this).val());
            });
            console.log("Selected facilities:", selectedFacilities.length ? selectedFacilities.join(", ") : "None preferred");
        }
    });

    $("#full-name").on("input", function() {
        if ($(this).val().trim() !== "") {
            $(this).removeClass("invalid");
            $("#error-name").removeClass("show");
        }
    });

    $("#email").on("input", function() {
        if (emailRegex.test($(this).val().trim())) {
            $(this).removeClass("invalid");
            $("#error-email").removeClass("show");
        }
    });

    $("input[name='membership']").on("change", function() {
        $("#error-membership").removeClass("show");
    });
});
