import { getRandomNumber } from "./getRandomNumber";

/**
 *
 * @param {Array} data an array of objects containing the countries data
 * @returns {Array} An array with some information of the countries
 */
const filterCountries = (data) => {
  return data.map((elem) => ({
    id: elem.area,
    name: elem.name.common,
    capital: elem.capital,
    flag: elem.flags.svg,
  }));
};

/**
 *
 * @param {Array} countriesData array of countries with the id(area), name, capital and flag image
 * @returns An array with 4 random countries and the filtered data
 */
const getFourCountries = (countriesData) => {
  return countriesData.sort(() => Math.random() - Math.random()).slice(0, 4);
};

/**
 *
 * @returns 4 filtered random countries with their capitals and flag image.
 */
export const getCountries = async () => {
  try {
    const request = await fetch("https://restcountries.com/v3.1/lang/eng");
    const data = await request.json();
    const filteredData = filterCountries(data);
    const countriesData = getFourCountries(filteredData);
    return countriesData;
  } catch (error) {
    console.error(error);
  }
};

/**
 *
 * @param {array} countries array with 4 random countries
 * @returns {object} An object with a random country data
 */
export const getRandomCountry = (countries) => {
  const randomCountry = getRandomNumber(0, 3);
  return countries[randomCountry];
};
