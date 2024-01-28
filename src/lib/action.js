"use server";

import { getServerSession } from "next-auth";
import { User } from "./model";

export const updateActivity = async ({ tid, qid }) => {
  //console.log("tid :", tid);
  //console.log("qid :", qid);
  const session = await getServerSession();
  const email = session.user.email;
  const name = session.user.name;
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
};
