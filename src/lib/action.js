"use server";

import { getServerSession } from "next-auth";
import { User } from "./model";
import { connectToDb } from "./util";

export const updateActivity = async ({ tid, qid }) => {
  //console.log("tid :", tid);
  //console.log("qid :", qid);
  try {
    await connectToDb();
    const session = await getServerSession();
    const email = session.user.email;
    const name = session.user.name;
    await connectToDb();
    const user = await User.find({ email });
    //console.log("user :", user);
    if (user.length === 0) {
      const newUser = new User({
        name,
        email,
        activity: {},
      });
      await newUser.save();
    }

    const { _id } = await User.findOne({ email });

    const updatedUser = {
      $set: {
        [`activity.${tid}.${qid}`]: true,
      },
    };

    await User.findByIdAndUpdate(_id, updatedUser, { new: true });
  } catch (error) {
    console.log("error updating activity :", error);
  }
};

export const updateUser = async ({ name, description, image }) => {
  try {
    const session = await getServerSession();
    const email = session.user.email;
    //const name = session.user.name;
    await connectToDb();
    const { _id } = await User.findOne({ email });

    const updatedUser = {
      name,
      description,
      image,
    };

    await User.findByIdAndUpdate(_id, updatedUser, { new: true });
  } catch (error) {
    console.log("error updaing user");
  }
};

export const createUser = async (session) => {
  try {
    //console.log(session);
    await connectToDb();
    const newUser = new User({
      name: session.user.name,
      email: session.user.email,
      points: 0,
      activity: {},
    });
    await newUser.save();
    //console.log("newUSer :", newUser);
  } catch (error) {
    console.log("error creating user :", error);
  }
};

export const toggleLikes = async ({ params }) => {
  try {
    await connectToDb();
    const session = await getServerSession();
    const email = session.user.email;
    const user = await User.findOne({ email });
    const likedTopics = user.liked;
    const topic = decodeURIComponent(params.tid);

    const topicIdx = likedTopics.indexOf(topic);
    if (topicIdx === -1) {
      likedTopics.push(topic);
      await user.save();
      return `${topic} added to liked topics.`;
    } else {
      likedTopics.splice(topicIdx, 1);
      await user.save();
      return `${topic} removed from liked topics.`;
    }
    //console.log(likedTopics);
    //console.log(user);
  } catch (error) {
    console.log("Error Toggling Likes :", error);
  }
};
