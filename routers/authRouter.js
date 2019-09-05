/*
# Authentication
POST /api/auth/login
POST /api/auth/register (this acts like POST /api/users)
POST /api/auth/logout
*/

const router = require("express").Router();
const bcrypt = require("bcryptjs");
const db = require("../database/dbConfig");
const generateToken = require("generateToken");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      error: "`username` and `password` are both required!"
    });
  }
  try {
    const hash = bcrypt.hashSync(password, 10);
    const [id] = await db("/* Insert db name */").insert({
      username,
      password: hash
    });
    const [user] = await db("/* Insert db name */").where({ id });
    return res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      error: "`Please provide a username and password`"
    });
  }

  try {
    const [user] = await db("users").where({ username });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      console.log(token);
      return res.status(200).json({ message: `Welcome ${user.username}` });
    } else {
      return res.status(401).json({
        error:
          "You're killing me smalls! You need to provide matching and existing credentials"
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

router.get("/logout", (req, res, next) {
    if(req.session){
        req.session.destroy(function(err){
            if(err) {
                return next(err)
            } else {
                return res.redirect('/')
            }
        })
    }
})
module.exports = router;
