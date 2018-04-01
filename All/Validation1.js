
var pass = "";
var email = "";
var username = "";

function Other(data)
{
    if (data == 'other')
        document.getElementById('other').innerHTML = "<tr><th>"+"<label style=\"width:170px\" for=\"other\" class=\"label\">Country Name</label>"+"</th><td>"+" <input type=\"couname\" name=\"couname\" value=\"\" id=\"other\" style=\"width:170px\" required />"+"</td> </tr>";
}
function check()
{
    var str = localStorage.getItem('obj2');
    var data = str.split("|");

    var l = 0;
    for (var i = 0; i < data.length; i++) {
        try {
            var call = JSON.parse(data[i]);
            if (username == call["username"])
            { l = 1;  break; }
            else
                l = 0;

        }
        catch (e) {
            alert("Error: " + e.description);
        }
        

    }
    return (l == 1 ? true : false);
}


function isTheFieldEmpty(inputField, helpId) {

    
    username = inputField.value;
    if(check())
    {
         if (helpId != null)
        // We need to show a warning
        // Remove any warnings that may exist
        while (helpId.childNodes[0]) {
            helpId.removeChild(helpId.childNodes[0]);
        }

    // Add new warning
    helpId.appendChild(document.createTextNode("UserName Already exist"));
    }
    else
    return editNodeText(/^[A-Za-z0-9]{6,15}$/, inputField.value, helpId, "Please enter a valid name At least 6 letter.");
}



// inputField.value – Value typed in the html text box
function isPassword(inputField, helpId) {
    pass = inputField.value;
    return editNodeText(/(?=.*\d)(?=.*[@ $ # & * ])(?=.*[A-Z])(?=.*[a-z]).{8,12}$/, inputField.value, helpId, "Enter Valid Password at least 8 Charcter(Ndfga@13)");
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

    return editNodeText(/^[6-9][0-9]{9}$/, inputField.value, helpId, "Enter 10 Digit Valid Phone Number");

}

function isEmailOk(inputField, helpId) {
    email = inputField.value;
    return editNodeText(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/, inputField.value, helpId, "Enter an Email like derekbanas@gmail.com");

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

