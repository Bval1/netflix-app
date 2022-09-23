const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("DB Connection Successful"))
    .catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

const port = 8800;
app.listen(port, () => {
    console.log(`Backend server is running on ${port}`);
});