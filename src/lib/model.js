import mongoose, { Schema } from "mongoose";

const subjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

const semesterSchema = new Schema({
  semester: {
    type: Number,
    required: true,
  },
  subjects: [subjectSchema],
});

// const questionSchema = new Schema({
//   title: {
//     type: String,
//   },
//   options: [
//     {
//       id: Number,
//       option: String,
//     },
//     {
//       id: Number,
//       option: String,
//     },
//     {
//       id: Number,
//       option: String,
//     },
//     {
//       id: Number,
//       option: String,
//     },
//   ],
//   correctOption: Number,
//   description: String,
//   id: Number,
// });

const topicSchema = new Schema({
  name: {
    type: String,
  },
  questions: { type: Object },
});

const userSchema = new Schema({
  name: String,
  email: String,
  activity: Object,
});

export const Topic =
  mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export const Semester =
  mongoose.models.Semester || mongoose.model("Semester", semesterSchema);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
