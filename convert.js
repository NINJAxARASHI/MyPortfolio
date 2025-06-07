const sharp = require("sharp");
const fs = require("fs");

sharp("src/assets/images/arashi_logo.png")
  .resize(32, 32)
  .toFile("public/icons/favicon.ico")
  .then(() => {
    console.log("Conversion réussie");
  })
  .catch((err) => {
    console.error("Erreur lors de la conversion:", err);
  });
