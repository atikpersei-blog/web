import { Schema, Document, model, models } from 'mongoose';
import { Category } from '@/app/lib/modules/Category';

export interface IPost extends Document {
  category: Schema.Types.ObjectId;
  title: string;
  content: string;
  status: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const PostSchema: Schema = new Schema(
  {
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    status: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Post = models.Post || model<IPost>('Post', PostSchema);
export default Post;

export interface Post {
  category: Category;
  title: string;
  content: string;
  status: number;
  createdAt: string;
  updatedAt: string;
}