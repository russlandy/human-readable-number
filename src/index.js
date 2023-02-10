module.exports = function toReadable (number) {
    let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let decimal = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = '';
    let numberArray = number.toString().split('');
    let twoNumbers = Number(numberArray.slice(1).join(''));
  
    if (number <= 19) {
      result = units[number];
    } else if (number < 100) {
      result = `${decimal[Number(numberArray[0]) - 2]} ${units[Number(numberArray[1])]}`.replace(' zero','');
    } else if (number >= 100 && number % 100 === 0) {
      result = `${units[Number(numberArray[0])]} hundred`;
    } else if (number >= 100 && twoNumbers <= 19) {
      result = `${units[Number(numberArray[0])]} hundred ${units[twoNumbers]}`;
    } else {
      result = `${units[Number(numberArray[0])]} hundred ${decimal[Number(numberArray[1]) - 2]} ${units[Number(numberArray[2])]}`.replace(' zero','');
    };
    return result;
}
