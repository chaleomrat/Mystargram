const express = require("express");
const hbs = require("express-handlebars");
const router = require("./routes/index");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;
//template engine setting
app.engine("hbs", hbs({ extname: "hbs" }));
app.set("view engine", "hbs");

//router
app.use("/", router);
//dmidleware
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
