let calculation = localStorage.getItem('calculation')||'';
 // display the calculation when page loaded   
displayCalc()
    function calc(value){
     calculation += value;
    // display the values entered 
     displayCalc();
     // stores the values in the localstorage
     localStorage.setItem('calculation',calculation);
     
    }
    function displayCalc(){
           document.querySelector('.display').innerHTML = calculation;
    }