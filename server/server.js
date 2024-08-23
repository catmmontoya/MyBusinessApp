import express from "express";
import morgan from "morgan";
import session from "express-session";
import ViteExpress from "vite-express";
// import handlerFunctions from "./controller.js";
//create express instance
const app = express();

//set up middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: "forFrodo",
    saveUninitialized: false,
    resave: false,
  })
);

//Routes will be here

//Run server
ViteExpress.listen(app, 8008, () =>
  console.log("We are live at http://localhost:8008")
);
