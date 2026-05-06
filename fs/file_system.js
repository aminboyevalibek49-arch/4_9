const fs = require("fs");
const path = require("path");

const read_file = (filename) => {
  const filePath = path.join(__dirname, "../data", filename);
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

const write_file = (filename, data) => {
  const filePath = path.join(__dirname, "../data", filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

module.exports = { read_file, write_file };
