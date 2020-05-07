/* eslint-disable no-plusplus */
export default function orderByProps(obj, orderArray) {
  const result = [];
  // eslint-disable-next-line guard-for-in
  for (const key in obj) {
    const newObj = { key, value: obj[key] };
    result.push(newObj);
  }
  result.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    if (a.key < b.key) {
      return -1;
    }
  });
  for (let i = orderArray.length; i >= 0; i--) {
    for (let j = 0; j < result.length; j++) {
      if (orderArray[i] === result[j].key) {
        result.unshift(result[j]);
        result.splice(j + 1, 1);
      }
    }
  }
  return result;
}
