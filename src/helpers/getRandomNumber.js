/**
 *
 * @param {number} min lower limit
 * @param {number} max upper limit
 * @returns A random number between the limits
 */
export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
