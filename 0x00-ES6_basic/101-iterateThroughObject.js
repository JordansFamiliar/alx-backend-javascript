export default function iterateThroughObject(reportWithIterator) {
  let retStr = '';

  for (const val of reportWithIterator) {
    retStr = retStr.concat(val);
    retStr = retStr.concat(' | ');
  }

  if (retStr.length > 0) {
    retStr = retStr.slice(0, -3);
  }

  return retStr;
}
