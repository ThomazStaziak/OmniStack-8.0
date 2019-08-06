require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const server = require("http").Server(app);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${
    process.env.DB_PASS
  }@cluster0-busfx.mongodb.net/${
    process.env.DB_NAME
  }?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true
  }
);

app.use(express.json());
app.use(cors());
app.use(require("./routes"));

server.listen(process.env.PORT);
