const express = require('express');
const users = require("./MOCK_DATA.json");
const fs = require('fs');
const {connectMongoDb}= require('./connection');
const userRouter= require("./routes/user");

const app = express();

const PORT = 8000;

connectMongoDb("mongodb://127.0.0.1:27017/app-1").then(()=>console.log("mongodb conneted"))

// mongoose.connect("mongodb://127.0.0.1:27017/app-1", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => {
//     console.log("MongoDB connected successfully");
// })
// .catch((err) => console.log('MongoDB connection error:', err));





app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

app.use("/api/users",userRouter);

app.listen(PORT, () => console.log("Server is running on port", PORT));
