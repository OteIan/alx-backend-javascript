export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const element of array) {
    result.push(appendString + element);
  }

  return result;
}
