import Link from "next/link";

const Box = ({ index, name, id }) => {
  return (
    <Link href={`/topic/${name}/${id}`}>
      <div className="sm:h-[70px] h-[50px] w-[50px] sm:w-[70px] bg-[#e1f396] rounded-lg sm:rounded-3xl flex justify-center items-center sm:text-3xl  text-lg font-bold text-[#015055] m-1">
        {index}
      </div>
    </Link>
  );
};

export default Box;
