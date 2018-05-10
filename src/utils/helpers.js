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

export const generateAnswers = (
  characters,
  charactersPerQuestion,
  bannedChars
) => {
  const charactersToDisplay = [];
  const visitedIndices = [];
  while (charactersToDisplay.length < charactersPerQuestion) {
    const randomItem = randomIntFromInterval(0, 99);
    const currChar = characters[randomItem];
    if (!visitedIndices.includes(randomItem)) {
      // remove duplicates: check if character has been already added
      visitedIndices.push(randomItem); // add it to visited indices if not
      if (
        !currChar.thumbnail.path.includes("image_not_available") &&
        !bannedChars.includes(currChar.name)
      ) {
        // check if character has image and not in banned characters
        charactersToDisplay.push(currChar); // only add characters with image
      }
    }
  }
  const answer =
    charactersToDisplay[randomIntFromInterval(0, charactersPerQuestion - 1)];

  return {
    charactersToDisplay,
    answer
  };
};
