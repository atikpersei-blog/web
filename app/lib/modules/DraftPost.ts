import { Schema, Document, model, models } from 'mongoose';
import { Category } from '@/app/lib/modules/Category';

export interface IDraftPost extends Document {
  category: Schema.Types.ObjectId;
  title: string;
  content: string;
  status: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const DraftPostSchema: Schema = new Schema(
  {
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    title: { type: String },
    content: { type: String },
  },
  {
    timestamps: true,
  }
);

const DraftPost = models.Post || model<IDraftPost>('DraftPost', DraftPostSchema);
export default DraftPost;

export interface DraftPost {
  category: Category;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}