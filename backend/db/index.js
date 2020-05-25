require("dotenv-expand")(require("dotenv").config());
const jsonServer = require("json-server");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const auth = require("basic-auth");
const dbFilePath = path.join(__dirname, process.env.JSON_DB_FILE);

const jsonDBserverStructure = {
  users: [
    {
      id: 1,
      userName: process.env.ADMIN_DB_USER_NAME,
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

    fs.writeFileSync(dbFilePath, jsonDBserverStructureString, "utf8", (err) => {
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
  const r = await axios.get(`${process.env.SERVER_HOSTNAME}/verify_user`, {
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
server.listen(process.env.DB_PORT, () => {
  console.log("JSON Server is running");
  console.log(process.env.DB_HOSTNAME);
});
