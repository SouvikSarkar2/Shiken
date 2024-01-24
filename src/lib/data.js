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
    const question = topics.questions.filter((question) => {
      try {
        console.log("id :", id);
        console.log("question :", question);
        return question._id.toString() === id;
      } catch (error) {
        console.error("Error processing question:", question, error);
        return false;
      }
    });
    console.log(question);
    return question;
  } catch (error) {
    console.log("Error getting Questions Data : ", error);
  }
};
