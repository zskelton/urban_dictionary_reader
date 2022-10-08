const axious = require("axios");

const enforceMax = (response) => {
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
};

async function getDefinition() {
  try {
    const response = await axious.get("https://api.urbandictionary.com/v0/random");
    const num = enforceMax(response);

    const word = response.data.list[num].word;
    const definition = response.data.list[num].definition;
    const site = response.data.list[num].permalink;
    console.log(`${word}: ${definition}\n${site}`);
  } catch (error) {
    console.error(error);
  }
}

getDefinition();
