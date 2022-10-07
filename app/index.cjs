console.log("hello world");

const axious = require("axios");

async function getDefinition() {
  const response = await axious.get(
    "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
  );
  console.log(response.data[0].meanings[0].definitions[0].definition);
}

getDefinition();
