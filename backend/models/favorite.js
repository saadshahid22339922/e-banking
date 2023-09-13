import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
  person: {
    type: mongoose.Schema.Types.Mixed,
  },
});

export default mongoose.model("Favorite", favoriteSchema);
