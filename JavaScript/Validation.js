
var pass="";
var email="";

if (document.images) {
    var image1 = new Image(); // Preload an image
    image1.src = "1.jpg";
    var image2 = new Image(); // Preload second image
    image2.src = "b.jpg";
}

function isTheFieldEmpty(inputField, helpId) {

   
    // See if the input value contains any text
    return editNodeText(/^[A-Za-z0-9]{6,15}$/, inputField.value, helpId, "Please enter a valid name At least 6 letter.");
}



// inputField.value – Value typed in the html text box
function isPassword(inputField, helpId) {
    pass = inputField.value;
    return editNodeText(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@ $ % & *]).{8,12}/, inputField.value, helpId, "At least one number,uppercase,lowercase letter,{@,$,%,&,*} and at least 8 or more characters");
}

function isSamePass(inputField, helpId) {
    
     
    if (inputField.value != pass) {
        if (helpId != null)
            // We need to show a warning
            // Remove any warnings that may exist
            while (helpId.childNodes[0]) {
                helpId.removeChild(helpId.childNodes[0]);
            }

        // Add new warning
        helpId.appendChild(document.createTextNode("Enter Same Password"));
    }
    else {

        // If the right information was entered, clear the help message
        if (helpId != null) {

            // Remove any warnings that may exist
            while (helpId.childNodes[0]) {
                helpId.removeChild(helpId.childNodes[0]);
            }

        }
    }
   
}

function isSameEmail(inputField, helpId) {


    if (inputField.value != email) {
        if (helpId != null)
            // We need to show a warning
            // Remove any warnings that may exist
            while (helpId.childNodes[0]) {
                helpId.removeChild(helpId.childNodes[0]);
            }

        // Add new warning
        helpId.appendChild(document.createTextNode("Enter Same Email"));
    }
    else {

        // If the right information was entered, clear the help message
        if (helpId != null) {

            // Remove any warnings that may exist
            while (helpId.childNodes[0]) {
                helpId.removeChild(helpId.childNodes[0]);
            }

        }
    }
}

function isPhoneOk(inputField, helpId) {

    return editNodeText(/^[7-9][0-9]{9}$/, inputField.value, helpId, "Enter a Phone Number start with 7/8/9");

}

function isEmailOk(inputField, helpId) {
    email = inputField.value;
    return editNodeText(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/, inputField.value, helpId, "Enter an Email (i.e. derekbanas@newthinktank.com)");

}

function editNodeText(regex, input, helpId, helpMessage) {
    // See if the info matches the regex that was defined
    // If the wrong information was entered, warn them
    if (!regex.test(input)) {

        if (helpId != null)
            // We need to show a warning
            // Remove any warnings that may exist
            while (helpId.childNodes[0]) {
                helpId.removeChild(helpId.childNodes[0]);
            }

        // Add new warning
        helpId.appendChild(document.createTextNode(helpMessage));

    } else {

        // If the right information was entered, clear the help message
        if (helpId != null) {

            // Remove any warnings that may exist
            while (helpId.childNodes[0]) {
                helpId.removeChild(helpId.childNodes[0]);
            }

        }

    }
}

function Call() {
    var username = document.New.register_name.value;
    var password = document.New.register_password.value;
    var phone = document.New.phone.value;
    var email = document.New.register_email.value;
    var confpass = document.New.con_register_password.value;
    var confemail = document.New.con_register_email.value;
    var gender = document.New.register_gender.value;
    var country = document.New.register_country.value;

    if (grecaptcha.getResponse() == "") {
        alert("Please Verify Captcha");
        return false;
    }

    

    var num = Math.ceil((Math.random() * 10));
    var otp = num == 1 ? num * 5555 : num * 555;
    alert("Generated OTP " + otp);

    var v = prompt("Enter OTP");
    if (v == otp) {

        try {
            
            alert("Account Create Successful");
            localStorage.setItem('name', username);
            localStorage.setItem('pass', password);
            localStorage.setItem('email', email);
            localStorage.setItem('phone', phone);
            localStorage.setItem('conpass', confpass);
            localStorage.setItem('conemail', confemail);
            localStorage.setItem('gender', gender);
            localStorage.setItem('country', country);
           // open("Show.html");
        }
        catch (e) {
            alert("Error: " + e.description);
        }

    }
    else {
        alert("Enter Correct OTP");
        v = prompt("Enter OTP");
    }
}