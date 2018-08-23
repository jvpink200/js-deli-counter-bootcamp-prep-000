
var katzDeli = [];
var takeANumber = function(katzDeli, newCustomer) {

 if (katzDeli.length > 0);
     katzDeli.push(newCustomer);
     return ('Welcome, ' + newCustomer + '. You are number ' + katzDeli.length + ' in line.')
  }

  function currentLine(deliLine){
    var deliStr = '';
    if(deliLine.length === 0){
      console.log("The line is currently empty.");
    } else {
      for(var i=0;i<deliLine.length;i++){
        deliStr=deliStr+(deliLine.indexOf(deliLine[i])+1)+': '+deliLine[i]+', ';
      }
      console.log("The line is currently: " + deliStr.slice(0,deliStr.length-2));
    }
  }
