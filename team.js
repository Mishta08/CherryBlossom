function calculateAmount(){
   var Price = document.getElementById("inputTicket").value;
    var total = Price * 500;
    document.getElementById("totalPrice").innerHTML = total;
}
function calculateAmount1(){
  var Price = document.getElementById("inputTicket").value;
   var total = Price * 1000;
   document.getElementById("totalPrice").innerHTML = total;
}
function team(){
    alert("Our Team includes -- \n\n Wanbantei Khyllep \n\n Wanmynsiem Suting \n\n Swarmishtha Mondal");
}

function ticket(){
      var x = document.forms["myform"]["Uname"].value;
      if (x == " "){
        alert("Error! Form Must Be Filled Correctly");
      }
        else {
            alert("Ticket Booked Successfully");
      }
}
