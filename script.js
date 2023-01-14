function validation()
{
    var fname=document.getElementById('validationCustom01').value
    var lname=document.getElementById('validationCustom02').value
    var mail=document.getElementById('validationCustommail').value
    var number=document.getElementById('validationCustomnum').value
    var pass=document.getElementById('validationCustompass').value
    var checkbox=document.getElementById('invalidCheck').value

    if (fname.length==0)
    {
        alert("Name Can't be empty")
        return false;
    }
    if (fname.length<5)
    {
        alert("First Name must be more than 5 character")
        return false;
    }
    if (fname.length>15)
    {
        alert("First Name Can't be more than 15 character")
        return false;
    }

    if (lname.length==0)
    {
        alert("Name Can't be empty")
        return false;
    }
    if (lname.length<5)
    {
        alert("Last Name must be more than 5 character")
        return false;
    }
    if (lname.length>15)
    {
        alert("Last Name Can't be more than 15 character")
        return false;
    }


   var mailpat=/[a-z0-9]{5,25}@[a-z].[a-z]/.test(mail)
    if(mailpat==false)
    {
        alert("Please Provide valid Mail")
        return false;
    }

    var numpat=/^[6-9]{1}[0-9]{9}$/.test(number)
    if(numpat==false)
    {
        alert("Please provide a valid Number")
        return false;
        
    }

    var passpat=/[a-zA-Z0-9]{5,15}/.test(pass)
    if(passpat==false)
    {
        alert("Please provide a valid Password")
        return false;
    }
}