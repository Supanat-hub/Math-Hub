var input = document.getElementById("get-input");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    //use function
    go();
  }
});

function go() {
    var number = document.getElementById("get-input").value;
    var x = isNaN(number)

    if (number == "") {
        document.getElementById("output-121").innerHTML = 'กรุณาใส่ข้อมูลในช่อง';
        return
    }

    if (x == true) {
        document.getElementById("output-121").innerHTML = 'กรุณากรอกจำนวนเต็มเท่านั้น';
        return
    }
    
    var output = Math.sqrt(number);
        document.getElementById("output-121").innerHTML = output;

}