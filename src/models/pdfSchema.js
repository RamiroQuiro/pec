import { Schema, model, models } from "mongoose";


const fileSchema = new Schema({
  file: { type:data, contentType: String },
});

const File = models.File ||model("File", fileSchema);
