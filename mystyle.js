
function calculator(operationType) {
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    var sum = "";

    if (operationType == 'A') {
        sum = parseInt(x) + parseInt(y);
    } else if (operationType == 'S') {
        sum = parseInt(x) - parseInt(y);
    }  else if (operationType == 'M') {
        sum = parseInt(x) * parseInt(y);
    }  else if (operationType == 'D') {
        sum = parseInt(x) / parseInt(y);
    } else if (operationType == 'C') {
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
    } else if(operationType == 'B') {
        sum = Boolean(x > y);
         }
    document.getElementById("result").value = sum;
}


function prompt_calculator(operationType) {
    x =parseInt(prompt("Enter the first number"));
    y = parseInt (prompt('Enter the second Number'));
    var sum = "";
    if (operationType == 'AP') {
        sum = parseInt(x) + parseInt(y);
    } else if (operationType == 'SP') {
        sum = parseInt(x) - parseInt(y);
    }  else if (operationType == 'MP') {
        sum = parseInt(x) * parseInt(y);
    }  else if (operationType == 'DP') {
        sum = parseInt(x) / parseInt(y);
    } else if(operationType == 'BP') {
        sum = Boolean(x > y);
    }
    document.getElementById("result").value = sum;
    
}

// Array task


  function show_console() {
    var arrayval = document.getElementById("arraycars").getAttribute("array-car").split(",");
    console.log (arrayval);
    arrayval.push(document.getElementById("addarraycars").value);
    console.log (arrayval);
    fetch1 = document.getElementById('fetch1');
    for(var i=0; i <arrayval.length; i++){
    console.log (arrayval[i].trim());
    var newRow = fetch1.insertRow();
    var cell = newRow.insertCell();
    cell.innerHTML = arrayval[i];
    }
   
    
  }
    
  
  var array =    [["BMW","BLUE","2019"],
  ["AUDI","WHITE","2018"],
  ["SUZUKI","WHITE","2018"],
  ["TOYOTA","BLUE","2021"],
  ["MINI-COOPER","GREEN","2021"]];
  console.log(array.length);
  
  fetch = document.getElementById('fetch');
for(var i=0; i <array.length; i++){
var newRow = fetch.insertRow();
for(var j=0; j<array[i].length; j++){
  var cell = newRow.insertCell(j);
  cell.innerHTML = array[i][j];
}
}
