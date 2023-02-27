var unavailableDates_dave = ["06/29/2020","07/07/2020","07/10/2020"];
var unavailableDates_jack = ["02/22/2023","02/07/2023","02/10/2023"];
const setDateFormat = "mm/dd/yy";

function disableDates(date, person) {
  if (person == 'dave') {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates_dave.indexOf(string) == -1 ]
  } else if (person == 'jack') {
    console.log("jack")
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates_jack.indexOf(string) == -1 ];
  }
}

document.getElementById("toastbtn").onclick = function() {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function(toastEl) {
    // Creates an array of toasts (it only initializes them)
      return new bootstrap.Toast(toastEl) // No need for options; use the default options
    });
   toastList.forEach(toast => toast.show()); // This show them

    console.log(toastList); // Testing to see if it works
  };

  $(document).ready(function($) {
    $ ('[id=bookService]').click(function(){
      $('#exampleModalCenter').modal('show');
      return true;
    });

    $("#exampleInputPhone").on("change", function(){
      if (!validatePhone("exampleInputPhone")){
          alert("Format of phone number should be xxx-xxx-xxxx");
          $("#exampleInputPhone").addClass("error");
      }
      else {
          $("#exampleInputPhone").removeClass("error");
      }
    });

    $("#card-number").on("change", function(){
      if (!validateCreditCard("card-number")){
          alert("Format of credit card number should be xxxx-xxxx-xxxx-xxxx");
          $("#card-number").addClass("error");
      }
      else {
          $("#card-number").removeClass("error");
      }
    });

    $("input[type=radio][name=expert]").on("change", function(){
      $('#noExpertSelectedMessage').hide();
      $('#dateTime').removeClass("hidden");
      var person = this.value;
      $("#datepicker1").datepicker("destroy");
      $( "#datepicker1" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: function(date) {
              return disableDates(date, person);
            }
        }   
      );
    });


  });

  function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    var filter = /^\d{3}[-]\d{3}[-]\d{4}$/;
    if (filter.test(a)) { return true; }
    return false;
  }

  function validateCreditCard(creditCard) {
    var a = document.getElementById(creditCard).value;
    var filter = /^\d{4}[-]\d{4}[-]\d{4}[-]\d{4}$/;
    console.log(a)
    if (filter.test(a)) { return true; }
    return false;
  }

 