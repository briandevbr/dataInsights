const fs = require("fs");
const data = fs.readFileSync("data/pib.csv", "utf-8");
const separetedData = data.split("\r\n").slice(4);

const parseLinesData = (line) => {
  let insideQuotes = false;
  let currentField = "";
  const fields = [];

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      insideQuotes = !insideQuotes;
      continue;
    }

    if (char === "," && !insideQuotes) {
      fields.push(currentField);
      currentField = "";
      continue;
    }

    currentField += char;
  }

  fields.push(currentField);
  return fields;
};

const cleanData = separetedData.map(parseLinesData);

console.log(cleanData);
