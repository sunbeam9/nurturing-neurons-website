$(document).ready(() => {
    $("#name-input").blur((e) => {
        var input = $("#name-input");
        var errors = $("#name-errors");

        var parselyInput = input.parsley();
        parselyInput.validate();

        if (parselyInput.isValid()) {
            if (input.hasClass("is-invalid")) {
                input.removeClass("is-invalid");
            }
            if (errors.hasClass("is-invalid")) {
                errors.removeClass("is-invalid");
            }
            return;
        }

        errors.text(parselyInput.getErrorsMessages([0]));
        
        if (!input.hasClass("is-invalid")) {
            input.addClass("is-invalid");
        }
        if (!errors.hasClass("is-invalid")) {
            errors.addClass("is-invalid");
        }
    });
    $("#email-input").blur((e) => {
        var input = $("#email-input");
        var errors = $("#email-errors");

        var parselyInput = input.parsley();
        parselyInput.validate();

        if (parselyInput.isValid()) {
            if (input.hasClass("is-invalid")) {
                input.removeClass("is-invalid");
            }
            if (errors.hasClass("is-invalid")) {
                errors.removeClass("is-invalid");
            }
            return;
        }

        errors.text(parselyInput.getErrorsMessages([0]));
        
        if (!input.hasClass("is-invalid")) {
            input.addClass("is-invalid");
        }
        if (!errors.hasClass("is-invalid")) {
            errors.addClass("is-invalid");
        }
    });
    $("#textarea-input").blur((e) => {
        var input = $("#textarea-input");
        var errors = $("#textarea-errors");

        var parselyInput = input.parsley();
        parselyInput.validate();

        if (parselyInput.isValid()) {
            if (input.hasClass("is-invalid")) {
                input.removeClass("is-invalid");
            }
            if (errors.hasClass("is-invalid")) {
                errors.removeClass("is-invalid");
            }
            return;
        }

        errors.text(parselyInput.getErrorsMessages([0]));
        
        if (!input.hasClass("is-invalid")) {
            input.addClass("is-invalid");
        }
        if (!errors.hasClass("is-invalid")) {
            errors.addClass("is-invalid");
        }
    });
    $("form").submit((e) => {
        var nameParselyInput = $("#name-input").parsley();
        var emailParselyInput = $("#email-input").parsley();
        var textareaParselyInput = $("#textarea-input").parsley();

        nameParselyInput.validate();
        emailParselyInput.validate();
        textareaParselyInput.validate();

        if (!nameParselyInput.isValid() || !emailParselyInput.isValid() || !textareaParselyInput.isValid()) {
            $("name-errors").text(nameParselyInput.getErrorsMessages([0]));

            if (!$("#name-input").hasClass("is-invalid")) {
                $("#name-input").addClass("is-invalid");
            }
            if (!$("#name-errors").hasClass("is-invalid")) {
                $("#name-errors").addClass("is-invalid");
            }
            
            $("#email-errors").text(emailParselyInput.getErrorsMessages([0]));

            if (!$("#email-input").hasClass("is-invalid")) {
                $("#email-input").addClass("is-invalid");
            }
            if (!$("#email-errors").hasClass("is-invalid")) {
                $("#email-errors").addClass("is-invalid");
            }

            $("#textarea-errors").text(textareaParselyInput.getErrorsMessages([0]));

            if (!$("#textarea-input").hasClass("is-invalid")) {
                $("#textarea-input").addClass("is-invalid");
            }
            if (!$("#textarea-errors").hasClass("is-invalid")) {
                $("#textarea-errors").addClass("is-invalid");
            }

            return false;
        }
        return true;
    })
});
