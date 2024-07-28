import { Schema, Document, model, models } from 'mongoose';

export interface Category extends Document {
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const CategorySchema: Schema = new Schema({
  name: { type: String, required: true },
},
{
  timestamps: true,
});

export default models.Category || model<Category>('Categories', CategorySchema);
