function validateForm() 
{
  var x = document.forms["customerinfo"]["firstname"].value;
  if (x == "") {
    alert("First name must be filled out");
    return false;
	}
	
  var y = document.forms["customerinfo"]["lasttname"].value;
  if (y == "") {
    alert("First name must be filled out");
    return false;
	}
  
  var z = document.forms["customerinfo"]["email"].value;
  if (z == "") {
    alert("First name must be filled out");
    return false;
	}
}