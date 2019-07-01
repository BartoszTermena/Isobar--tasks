const axios = require("axios");

const url =
  "https://baconipsum.com/api?type=all-meat&paras=3&start-with-lorem=1&format=json";
const url2 =
  "https://baconipsum.com/api/?type=meat-and-filter&paras=5&format=json";

const getUser = async (url, url2) => {
  try {
    axios.all([axios.get(url), axios.get(url2)]).then(
      axios.spread((res1, res2) => {
        console.log(res1.data[0].concat(res2.data[0]));
      })
    );
  } catch (error) {
    console.error(error);
  }
};

getUser(url, url2);
