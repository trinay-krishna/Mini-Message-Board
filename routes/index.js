var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.post("/new", (req, res) => {
  const user = req.body.user;
  const text = req.body.text;
  messages.push({ user, text, added: new Date() });
  console.log(messages);
  res.redirect("/");
});

module.exports = router;
