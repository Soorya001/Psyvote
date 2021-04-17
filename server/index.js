//importing
import express from "express";
import cors from "cors";
import { GetData } from "./routes/getdata.js";
import { AddData } from "./routes/adddata.js";
import { DeleteData } from "./routes/deletedata.js";
import { FindData } from "./routes/finddata.js";

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
app.get("/getdata", GetData); //demo for data from oracle -> date from dual table
app.get("/add", AddData);
app.get("/delete", DeleteData);
app.get("/find", FindData);

//listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
