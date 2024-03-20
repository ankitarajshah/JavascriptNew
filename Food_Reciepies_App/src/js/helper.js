import { TIMEOUT_SEC } from "./config.js";
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

//   export const getJSON = async function (url) {
//     try {
//       const res = await fetch(url);
//       // console.log(res);
//       const data = await res.json();
//       // console.log(data);
//       if (!res.ok) throw new Error(`${data.message} (${res.status}`);
//       console.log(res, data, "responseData");
//       return data;
//     } catch (err) {
//       throw err;
//     }
//   };

export const getJSON = async function (url) {
  try {
    const fetchPromise = fetch(url);
    const res = await Promise.race([fetchPromise, timeout(TIMEOUT_SEC)]);
    // console.log(res);
    const data = await res.json();
    // console.log(data);
    if (!res.ok) throw new Error(`${data.message} (${res.status}`);
    console.log(res, data, "responseData");
    return data;
  } catch (err) {
    throw err;
  }
};
