module.exports = function reverse (n) {
  let abs = Math.abs(n);
  let str = abs.toString();
  let num3 = parseInt(str.charAt(0));
  let num2 = parseInt(str.charAt(1));
  let num1 = parseInt(str.charAt(2));
  return num1 * 100 + num2 * 10 + num3;
}
