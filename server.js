const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");
const { urlencoded } = require("express");

/// Connect Database
connectDB();

app.use(express.json());
app.use(urlencoded({extended: true}));

app.get("/",(req,res) => {
    res.send("API is running");
})

/// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/auth", require("./routes/api/auth"));

app.listen(PORT,() => console.log(`Server is running on port ${PORT}`))
