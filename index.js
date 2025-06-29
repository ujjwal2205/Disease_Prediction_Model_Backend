import express from "express";
import cors from "cors";
import Adminrouter from "./Routes/predictRoutes.js";
const app=express();
const port=4000;
app.use(express.json())
app.use(cors())
app.use("/api",Adminrouter);
app.get("/", (req, res) => {
  res.send("🟢 API is live");
});
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})