module.exports = function getZerosCount(number) {
  function div(val, by){
    return (val - val % by) / by;
  }
  let s = 0; 
  while(number > 5) {
    s = s + div(number, 5); 
    number = div(number,5);
 }
 return s;
}
