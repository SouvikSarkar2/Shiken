import { Semester, Topic, User } from "./model";
import { connectToDb } from "./util";

export const getSemesters = async ({ semester }) => {
  try {
    await connectToDb();
    const semesters = await Semester.findOne({ semester });
    return semesters;
  } catch (error) {
    console.log("Error getting Semesters Data");
  }
};

export const getAllSemesters = async () => {
  try {
    await connectToDb();
    const semesters = await Semester.find();
    return semesters;
  } catch (error) {
    console.log("Error getting all Semesters Data");
  }
};

export const getTopics = async ({ name }) => {
  try {
    await connectToDb();
    const topics = await Topic.findOne({ name });
    return topics;
  } catch (error) {
    console.log("Error getting Topics Data");
  }
};

export const getQuestions = async ({ name, id }) => {
  try {
    await connectToDb();
    const topics = await Topic.findOne({
      name,
    });
    const question = topics.questions.filter((question) => {
      try {
        //console.log("id :", id);
        //console.log("question :", question);
        return question._id.toString() === id;
      } catch (error) {
        console.log("Error processing question:", question, error);
        return false;
      }
    });
    //console.log(question);
    return question;
  } catch (error) {
    console.log("Error getting Questions Data : ", error);
  }
};

export const getUsers = async () => {
  try {
    await connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log("Error getting users :", error);
  }
};
