const axios = require("axios");
const colors = require("colors");

async function testSite() {
  const response = await axios.get("https://www.urbandictionary.com/").catch(() => {
    console.log("Network Error.".red.bold);
    return false;
  });
  return response;
}

function enforceMax(response, max = 100) {
  let current = 0;

  try {
    while (response.data.list[current].definition.length > max) {
      current += 1;
    }
  } catch (_) {
    current = 0;
  }

  return current;
}

async function getDefinition() {
  try {
    const response = await axios.get("https://api.urbandictionary.com/v0/random");
    const num = enforceMax(response);

    const word = response.data.list[num].word;
    const definition = response.data.list[num].definition;
    console.log(`${word.inverse.green}: ${definition.bold.green}`);
  } catch (error) {
    console.error(colors.red(error));
  }
}

module.exports = {testSite, enforceMax, getDefinition};