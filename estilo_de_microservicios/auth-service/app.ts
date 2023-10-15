import express from "express";
import authRoutes from "./routes/authRoutes";

const app = express();
const port = 3000;

app.use("/auth", authRoutes);

app.listen(port, () => {
    console.log(`Auth Service is running on port ${port}`);
});