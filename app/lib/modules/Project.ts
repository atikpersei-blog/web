import { Schema, Document, model, models } from 'mongoose';

export interface Project extends Document {
  title: string;
  url: string;
  git?: string;
}

const ProjectSchema: Schema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  git: { type: String, required: true }
},
  {
    timestamps: true,
  });

export default models.Project || model<Project>('Project', ProjectSchema);
