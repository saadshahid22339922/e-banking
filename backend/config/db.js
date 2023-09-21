import Keys from "./config";
import mongoose from "mongoose";

console.log("\nDATABASE_URL ", Keys.mongodb, "\n");
mongoose.connect(Keys.mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default mongoose.connection;
