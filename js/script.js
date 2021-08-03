var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

function validate(){
  var genders = document.getElementsByName("gender");
  if( document.form.year.value == "" || document.form.year.value.length !=4 || document.form.year.value >2100 || document.form.year.value <=1900) {
     alert( "Please provide a valid year of birth! eg 2019" );
     return false;
  }
  else if( document.form.month.value == "" || document.form.month.value.length != 2 || document.form.month.value > 12  || document.form.month.value <= 0){
     alert( "Please provide your month of birth! between 1 and 12" );
     return false;
  }
  else if( document.form.date.value == "" || document.form.month.value.length != 2|| document.form.date.value > 31 || document.form.date.value <= 0) {
     alert( "Please provide a valid date that you were born in!" );
     return false;
  }
  else if(genders[0].checked==false && genders[1].checked==false ) {
      alert("You must select male or female");
      return false;
  }   
  else{
    return true ;
  }
}