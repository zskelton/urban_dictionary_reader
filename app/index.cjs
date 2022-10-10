const {testSite, getDefinition} = require("./functions.cjs");

async function main() {
  const _site = await testSite();
  if (_site) {
    getDefinition();
  }
}

main();
