export const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const getArrayCounts = arr => {
  const counts = {};

  for (let i = 0; i < arr.length; i += 1) {
    const num = arr[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return counts;
};

export const generateQuery = params => {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .map(k => `${esc(k)}=${esc(params[k])}`)
    .join("&");
};

export const isEmpty = obj =>
  Object.keys(obj).length === 0 && obj.constructor === Object;
