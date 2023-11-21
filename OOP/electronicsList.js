const Electronics = require('./Electronics');

let dvdPlayer = new Electronics(
  "6 mounts",
  "25W",
  "525",
  "bbk810dv",
  "wow HiFi wow",
  "6",
  "BBK",
  4,
  [{}],
  ["12"]
);
let dvdKaraoke = new Electronics(
  "12 mounts",
  "250W",
  "527",
  "Samsung DK250m",
  "sound HiFi wow",
  "17",
  "Samsung",
  7,
  [{}],
  ["12"]
);
let lg3dSound = new Electronics(
  "12 mounts",
  "650W",
  "529",
  "LG ST650-3D",
  "sound HiFi 3D",
  "19",
  "LG",
  3,
  [{}],
  ["12"]
);

const electronics = [
  dvdPlayer,
  dvdKaraoke,
  lg3dSound
];


module.exports = electronics;