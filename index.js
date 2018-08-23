
var katzDeli = [];
var takeANumber = function(katzDeli, newCustomer) {

 if (katzDeli.length > 0);
     katzDeli.push(newCustomer);
     return ('Welcome, ' + newCustomer + '. You are number ' + katzDeli.length + ' in line.')
  }


  function currentLine(arr) {
    var empty = [];
    if (arr.length < 1) {
      return 'The line is currently empty.';
    } else {
      for (var i = 0; i < arr.length; i++) {
        empty.push(arr.indexOf(arr[i]) + 1, '. ', arr[i]);
      }
      return 'The line is currently: ' + empty.join('');
    }
  }
  currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"

  function nowServing(arr) {
    var firstPerson = [];
    if (arr.length < 1) {
      return 'There is nobody waiting to be served!';
    } else {
      firstPerson.push(arr[0]);
      arr.shift();
      return 'Currently serving ' + firstPerson[0] + '.';
    }
  }
