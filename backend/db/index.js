const jsonServer = require("json-server");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const auth = require("basic-auth");
const dbFilePath = path.join(__dirname, "db.json");

const jsonDBserverStructure = {
  users: [
    {
      id: 1,
      userName: "admin",
      firstName: "Admin",
      lastName: "User",
    },
  ],
  conversations: [],
  messages: [],
};

try {
  if (!fs.existsSync(dbFilePath)) {
    const jsonDBserverStructureString = JSON.stringify(
      jsonDBserverStructure,
      null,
      4
    );

    fs.writeFile(dbFilePath, jsonDBserverStructureString, "utf8", (err) => {
      if (err) {
        console.log(
          "An error occured while writing JSON Object to JSON DB File."
        );
        return console.log(err);
      }

      console.log("JSON DB file has been saved.");
    });
  } else {
    console.log("JSON DB file exists");
  }
} catch (err) {
  console.log(err);
  throw err;
}

const server = jsonServer.create();
const router = jsonServer.router(dbFilePath);
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
