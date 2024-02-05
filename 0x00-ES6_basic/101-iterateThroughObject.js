export default function iterateThroughObject(reportWithIterator) {
  let ret_str = '';

  for (const val of reportWithIterator) {
    ret_str = ret_str.concat(val);
    ret_str = ret_str.concat(' | ');
  }

  if (ret_str.length > 0) {
    ret_str = ret_str.slice(0, -3);
  }

  return ret_str;
}
