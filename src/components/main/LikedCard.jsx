import Link from "next/link";

const LikedCard = ({ topic }) => {
  //console.log("topic :", topic);
  return (
    <Link href={`/topic/${topic}`}>
      <div className="bg-[#015055] flex justify-center items-center h-[50px] text-xl text-white rounded-xl sm:my-4 sm:w-[470px] ">
        {topic}
      </div>
    </Link>
  );
};

export default LikedCard;
