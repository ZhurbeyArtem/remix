const bulkRun = async (arr) => {
  const results = [];
  const promises = arr.map(async ([func, ...args]) => {
    const result = await func(...args);
    results.push(result);
  });
  await Promise.all(promises);
  return results;
};