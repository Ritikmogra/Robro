const express = require("express");
const { adminroutes } = require("./Routes/Adminroutes");
require("./connection/Dbconnection")
 const app = express();


 app.use(express.json())
//  app.use('./',adminroutes)


 app.listen(8000,()=>{
    console.log("server is running at 8000")
 })