   var str="";
  
   

   function Call()
   {
    var username = document.New.register_name.value;
    var password = document.New.register_password.value;
    var phone = document.New.phone.value;
    var email = document.New.register_email.value;
    var confpass = document.New.con_register_password.value;
    var confemail = document.New.con_register_email.value;
    var date = document.New.register_date.value;
    var gender = document.New.register_gender.value;
    var country = document.New.register_country.value;

    if (grecaptcha.getResponse() == "")
    {
        alert("Please Verify Captcha");
        return false;
    }

  

    var num = Math.ceil((Math.random() * 10));
    var otp = num == 1 ? num * 5555 : num * 555;
    alert("Generated OTP "+otp);

    var v = prompt("Enter OTP");
    if (v == otp)
    {
        
        try
        {
            if (localStorage.getItem('obj2') != null)
            {
                
                str = localStorage.getItem('obj2')+"|";
              
               
            }
            var data1 = {username,password,phone,email,date,gender,country };
            window.str = str+JSON.stringify(data1);
           localStorage.setItem('obj2', window.str);
            alert("Account Create Successful");
            open("loginPage.html");
        }
        catch (e)
        {
            alert("Error: " + e.description);
        }
        
    }
    else
    {
        alert("Enter Correct OTP");
        v = prompt("Enter OTP");
    }
   }

   function Call1()
   {

    var username = document.Forget.register_name.value;
    var phone = document.Forget.phone.value;
    var email = document.Forget.register_email.value;
    var confemail = document.Forget.con_register_email.value;
    var password = "";

    window.str = localStorage.getItem('obj2');
    var data=str.split("|");
    
    var l =0;
    for (var i = 0; i < data.length; i++)
    {
        try
        {
            var call = JSON.parse(data[i]);
            if (username == call["username"] && phone == call["phone"] && email == call["email"])
            { l = 1; password = call["password"]; break;}
            else
                l=0;
            
        }
        catch (e)
        {
            alert("Error: " + e.description);
        }
       
    }

   

    if (grecaptcha.getResponse() == "")
    {
        alert("Please Verify Captcha");
        return false;
    }

    var num = Math.ceil((Math.random() * 10));
    var otp = num == 1 ? num * 5555 : num * 555;
    alert("Generated OTP " + otp );

    var v = prompt("Enter OTP");
    if (v == otp)
    {
         if(l==1)
            alert("Your Password is " + password);
        else
             alert("Enter Correct Detail If U have Account");
         
    }
    else
    {
        alert("Enter Correct OTP");
        v = prompt("Enter OTP");
    }
   }

   function validateform()
   {
    if (grecaptcha.getResponse() == "")
    {
        alert("Please Verify Captcha");
        return false;
    }

    var username = document.Login.username.value;
    var password = document.Login.pass.value;

    window.str = localStorage.getItem('obj2');
    var data = str.split("|");

    var l = 0;
    for (var i = 0; i < data.length; i++) {
        try {
            var call = JSON.parse(data[i]);
            if (username == call["username"] && password == call["password"]) {
                alert("Login Successfull");
                open("HomePage.html");
            }
            else
                l = 0;

        }
        catch (e) {
            alert("Error: " + e.description);
        }
         
    }
    if (l == 0)
        alert("Enter Correct UserName and Password");
   }
