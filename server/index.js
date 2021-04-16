//importing
import express from "express";
import cors from "cors";
import { GetData } from "./routes/dbdata.js";

//app config
const app = express();

//middlewares
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//DB configs

//api routes
app.get("/districts", GetData); //demo for data from oracle -> date from dual table

//listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
