const jsonServer = require("json-server");
const path = require("path");
const axios = require("axios");
const auth = require("basic-auth");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(async (req, res, next) => {
  if (req.headers["authorization"] === null) res.sendStatus(400);
  const user = auth.parse(req.headers["authorization"]);
  const r = await axios.get("http://localhost:5000/verify_user", {
    auth: {
      username: user.name,
      password: user.pass,
    },
  });
  if (r.status === 200) {
    // add your authorization logic here
    next(); // continue to JSON Server router
  } else {
    res.sendStatus(401);
  }
});
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
  console.log("http://localhost:3000");
});
