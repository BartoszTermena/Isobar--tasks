const fs = require("fs");

const changeName = () => {
  fs.rename("./example.json", "sample.json", err => {
    if (err) console.log(err);
  });
};
changeName();
