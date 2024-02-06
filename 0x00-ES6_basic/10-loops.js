export default function appendToEachArrayValue(array, appendString) {
  retArray = [];
  for (const value of array) {
    const idx = array.indexOf(value);
    retArray[idx] = appendString + value;
  }

  return retArray;
}
