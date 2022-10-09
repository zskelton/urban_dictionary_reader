const axios = require("axios");
const colors = require("colors");

async function testSite() {
  try {
    return await axios.get("https://www.urbandictionary.com/");
  } catch (error) {
    console.log("Network Error.".red.bold);
    return false;
  }
}

function enforceMax(response) {
  let current = 0;
  const max = 100;

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
    const site = response.data.list[num].permalink;
    console.log(`${word.inverse.green}: ${definition.bold.green}\n${site.bold.blue}`);
  } catch (error) {
    console.error(colors.red(error));
  }
}

async function main() {
  const _site = await testSite();
  if (_site) {
    getDefinition();
  }
}

main();
