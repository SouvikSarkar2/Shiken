import { Semester, Topic } from "./model";
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
    console.log("id :", id);
    const question = topics.questions.reduce((question) => {
      console.log(question._id.toString());
    });
    console.log(question);
  } catch (error) {
    console.log("Error getting Questions Data : ", error);
  }
};
