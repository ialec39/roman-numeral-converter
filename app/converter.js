'use strict';

var repository = [{
  numeral: 'M',
  number: 1000
}, {
  numeral: 'CM',
  number: 900
}, {
  numeral: 'D',
  number: 500
}, {
  numeral: 'CD',
  number: 400
}, {
  numeral: 'C',
  number: 100
}, {
  numeral: 'XC',
  number: 90
}, {
  numeral: 'L',
  number: 50
}, {
  numeral: 'XL',
  number: 40
}, {
  numeral: 'X',
  number: 10
}, {
  numeral: 'IX',
  number: 9
},{
  numeral: 'V',
  number: 5
}, {
  numeral: 'IV',
  number: 4
},{
  numeral: 'I',
  number: 1
}];

var convertNumeral = numeral => {
  var numeral = numeral.toUpperCase(),
    length = numeral.length,
    number = 0;
    var count = 0;
  while (length > 0) {
    count++;
    repository.map((data) => {
      if (numeral.substr(0, data.numeral.length) == data.numeral) {
        number += data.number;
        numeral = numeral.substr(data.numeral.length, length);
        length = length - data.numeral.length;
      }
    });
    if(count == 12) {
      return undefined;
      break;
    }
  };
  return number;
};

var convertNumber = number => {
  var numeral = '';
  repository.map((data) => {
    while (number >= data.number) {
      numeral += data.numeral;
      number -= data.number;
    }
  });
  return numeral;
};

function numeralConverter(formData) {
  event.preventDefault();
  var numeral = convertNumeral(formData.numeral.value);
  if(numeral == undefined) {
      document.getElementsByClassName('error')[0].style.display = 'block';
      document.getElementsByClassName('error')[0].innerHTML = '<h4>Please input a valid Roman Numeral</h4>';
  } else {
    document.getElementsByClassName('error')[0].style.display = 'none';
    document.getElementsByClassName('success')[0].style.display = 'block';
    document.getElementsByClassName('success')[0].innerHTML = '<h3>Number: ' + numeral + '</h3>';
  }
}

function numberConverter(formData) {
  event.preventDefault();
  document.getElementsByClassName('error')[0].style.display = 'none';
  document.getElementsByClassName('success')[0].style.display = 'block';
  document.getElementsByClassName('success')[0].innerHTML = '<h3>Numeral: ' + convertNumber(formData.number.value) + '</h3>';
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {convertNumeral, convertNumber};
};
