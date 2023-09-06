import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import user_route from "./routes/user_routes"
import galllery_route from './routes/gallery_route'
import card_route from './routes/card_router'


dotenv.config();
const { PORT } = process.env;
const app = express(); 
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Succesfully connected to the database");
  })
  .catch((err) => {
    console.log("something went wrong", err); 
    process.exit();
  });
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}...`);
});

app.get("/", (req, res) => {
  return res.status(200).json({
    status: "success",
    author: req.user,
    message: "Welcome to my API",
  });
});
app.use("/api/v1/", user_route);
app.use('/api/v1/',galllery_route)  /////midlle way missing
app.use('api/v1',card_route)
app.use("*", (req, res) => {
  return res.status(404).json({
    status: "failed",
    message: "Invalid URL",
  });
});
export default app;
