function validation(){
  let x = document.forms["login"]["uname"].value;
  let y = document.forms["login"]["mobil"].value;
  var z = document.getElementById("pwd").value;
  var u = document.getElementById("repwd").value;
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if((x == null || x =="")&&(y == null || y =="")&&(z == null || z =="")&&(u == null || u =="")){
    alert("All Fields are Mandatory!!!");
    return false;
  }

  if (x == "") {
    alert("Userame must be filled out!!!");
    return false;
  }

  if (y == "") {
    alert("Enter Valid Mobile No.!!!");
    return false;
  }

  if (z == "") {
    alert("Enter Valid Password!!!");
    return false;
  }

  if (u == "") {
    alert("Re-Enter Valid Password!!!");
    return false;
  }

  if (y.match(phoneno)) {
    return true;
  }else{
    alert("Enter Valid Mobile No.!!!");
    return false;
  }


  if ((z.length >= 8)) {
    if (z.match(lowerCaseLetters)) {
      if (z.match(upperCaseLetters)) {
        if (z.match(numbers)) {
          if (z == u) {
            return true;
          }else{ alert("Re-Enter Password does not match."); return false;}
        }else{ alert("Password must contain a number."); return false; }
      }else{ alert("Password must contain a Capital letter."); return false;}
    }else{ alert("Password must contain a letter in lowercase."); return false;}
  }else{ alert("Password must contain minimum 8 characters."); return false;}

}


      
function valid(){
  if (validation()) {
    alert("Log In Sucessfull...");
    return window.location = "LogInSucessfull.html";
  }
  else{
    alert("Enter Valid details!!!");
    return false;
  }

}
