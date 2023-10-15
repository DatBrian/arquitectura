import express from "express";
import bookRoutes from "./routes/bookRoutes";

const app = express();
const port = 3000;

app.use("/books", bookRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});