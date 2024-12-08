import express from "express";
import { AppData } from "../Dataitems/AppData.js";
import { DBConnService } from "./DBConnService.js";

class ServerService {
  App = new AppData();
  DBConn = new DBConnService();

  AppListen() {
    this.App = new express();

    this.AppRoute();

    // app.use((err, req, res, next) => {
    //   console.error(err.stack); // Log the error stack trace
    //   res.status(500).json(new ApiResponse(500, null, "Something went wrong!")); // Send structured API response
    // });
    this.DBConn.createDBConnection();
    
    this.App.listen(3000, () => {
      console.log("Application Listens at Port 3000");
    });
  };

  AppRoute() {
    this.App.get("/test", (req, res)=> {
        res.send("Hello World!");
    })
  };

}

export { ServerService };
