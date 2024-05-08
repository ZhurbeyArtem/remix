const data = [
  [10, 6, 6],
  [14, 22, 2],
  [30, 18, 4],
];
const findMinAndMultiple = (array) => {
  const flattenArr = array.flat();
  const min = flattenArr.reduce(
    (min, current) => Math.min(min, current),
    flattenArr[0]
  );
  const result = data.map((arr) => arr.map((el) => el * min));
  return result;
};

console.log(findMinAndMultiple(data));
