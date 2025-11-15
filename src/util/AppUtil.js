export default class AppUtil {
  static range = (start, end) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  // method to make number as 2 digit string
  static to2DigitString = (num) => {
    return num.toString().padStart(2, "0");
  };
}
