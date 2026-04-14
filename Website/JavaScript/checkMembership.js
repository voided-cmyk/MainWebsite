$(document).ready(function() {
    console.log("Website has been loaded!");

    // ============================== MEMBERSHIP FORMS ==============================

    $("#membership-form").on("submit", function(event) {
        event.preventDefault(); // allow for my own validation
    
        var formIsValid = true; 

        /* === Full Name Validation === */
        var name = $("#full-name").val().trim(); 
        if (name === "") { 
            $("#error-name").addClass("show");
            $("#full-name").addClass("invalid");
            formIsValid = false;
        } else {
            $("#error-name").removeClass("show");
            $("#full-name").removeClass("invalid");
        }


        /* === Email Validation === */
        var email = $("#email").val().trim();

        // had to look this one up, but it basically returns true or false if it matches the pattern of a valid email.
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "" || !emailRegex.test(email)) { // if the regex test fails, it returns false
            $("#error-email").addClass("show");
            $("#email").addClass("invalid");
            formIsValid = false;
        } else {
            $("#error-email").removeClass("show");
            $("#email").removeClass("invalid");
        }

        /* === Membership Type Validation === */
        if ($("input[name='membership']:checked").length === 0) {
            // if no membership option is selected, show error
            $("#error-membership").addClass("show");
            formIsValid = false;
        } else {
            $("#error-membership").removeClass("show");
        }


        /* === After all checks passed show success message === */
        if (formIsValid) {
            // fade in animation
            $(this).find("fieldset, .form-submit").fadeOut(300, function() {
                // Show success message after the fade-out finishes
                $("#success-msg").fadeIn(400);
            });

            // Log submitted data to the browser console (only for demonstration, I would send this to a server but the course doesn't cover that)
            console.log("Form submitted! Values:");
            console.log("Name: ", name);
            console.log("Email: ", email);
            console.log("Membership: ", $("input[name='membership']:checked").val());

            // Collect selected checkboxes
            var facilities = [];
            $("input[name='facility']:checked").each(function (){
                facilities.push($(this).val());
            });
            console.log("Facilities: ", facilities.join(", ") || "None Preferred");
        }

    }); // end of form submit function


    // ============================== LIVE VALIDATION ==============================

    $("#full-name").on("input", function() { // for any team members viewing, the value "this" refers to the input field that triggered the event, in this case the full name field.
        if ($(this).val().trim() !== "") {
            $(this).removeClass("invalid");
            $("#error-name").removeClass("show");
        }
    });

    $("#email").on("input", function() {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // same regex at line 27
        if (emailRegex.test($(this).val().trim())) {
            $(this).removeClass("invalid");
            $("#error-email").removeClass("show");
        }
    });

    $("input[name='membership']").on("change", function() {
        $("#error-membership").removeClass("show");
    });
});
