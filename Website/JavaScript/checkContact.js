$(document).ready(function() {
    console.log("Contact page loaded.");

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    $("#contact-form").on("submit", function(event) {
        event.preventDefault();

        var formIsValid = true;
        var name = $("#full-name").val().trim();
        var email = $("#email").val().trim();
        var phone = $("#phone").val().trim();
        var message = $("#message").val().trim();

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

        if (formIsValid) {
            $(this).find("fieldset, .form-submit").fadeOut(300, function() {
                $("#success-msg").fadeIn(400);
            });

            console.log("------ Contact form submitted ------");
            console.log("Full name:", name);
            console.log("Email:", email);
            console.log("Phone:", phone || "Not provided");
            console.log("Message:", message || "No message provided");

            var selectedIssues = [];
            $("input[name='facility']:checked").each(function() {
                selectedIssues.push($(this).val());
            });
            console.log("Selected issue(s):", selectedIssues.length ? selectedIssues.join(", ") : "None selected");
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
});
