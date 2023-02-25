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
  $('[id=bookService]').click(function(){

    $('#exampleModalCenter').modal('show');
    return true;
  });

  $( "#datepicker1" ).datepicker();
        $( "#datepicker2" ).datepicker();
        $( "#datepicker3" ).datepicker();
        $( "#datepicker4" ).datepicker();
});

  /*$('#submit1').click(function(){
    if($('#date1').val()==''){
        alert('Please enter a date for your service.');
        return false;
      }
    if($('#time1').val() == ''){
        alert('Please enter a time for your service');
        return false;
    }

    $('#exampleModalCenter').modal('show');
    return true;
  });

  $('#submit2').click(function(){
    if($('#date2').val()==''){
        alert('Please enter a date for your service.');
        return false;
      }
    if($('#time2').val() == ''){
        alert('Please enter a time for your service');
        return false;
    }

    $('#exampleModalCenter').modal('show');
    return true;
  });

  $('#submit3').click(function(){
    if($('#date3').val()==''){
        alert('Please enter a date for your service.');
        return false;
      }
    if($('#time3').val() == ''){
        alert('Please enter a time for your service');
        return false;
    }

    $('#exampleModalCenter').modal('show');
    return true;
  });

  $('#submit4').click(function(){
    if($('#date4').val()==''){
        alert('Please enter a date for your service.');
        return false;
      }
    if($('#time4').val() == ''){
        alert('Please enter a time for your service');
        return false;
    }

    $('#exampleModalCenter').modal('show');
    return true;
  });*/