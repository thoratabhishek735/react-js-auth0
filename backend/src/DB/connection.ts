import mongoose, { ConnectOptions } from "mongoose";

export default class Connection {
  connectDB() {
    mongoose
      .connect(process.env.DB_URL!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex:true,
      
      } as ConnectOptions)
      .then(() => console.log("Database connected", process.env.PORT))
      .catch((e) =>
        console.log("Something went wrong while connecting DB ", e)
      );
  }
}
