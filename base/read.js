const fs = require("fs");
fs.readFile("./test.txt", "utf8", (err, data) => {
  console.log({ data, err });
  if (!err) {
    const newData = data + "Writing";
    fs.writeFile("./test.txt", newData, (error) => {
      if (!error) {
        console.log("done");
      }
    });
  }
});
