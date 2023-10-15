import express from "express";
import resourceRoutes from "./routes/resourceRoutes";

const app = express();
const port = 4000;

app.use("/resources", resourceRoutes);

app.listen(port, () => {
    console.log(`Resource Service is running on port ${port}`);
});
