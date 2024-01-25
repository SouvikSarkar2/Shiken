import MainButton from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center text-white bg-[#015055] h-full w-full">
      <div className=" h-dvh flex flex-col md:flex-row justify-evenly items-center w-[1366px] max-w-[1366px]">
        <div className="max-w-[768px] flex flex-col justify-evenly md:justify-around h-full max-h-[200px] md:max-h-[568px]">
          <div className="text-4xl md:text-5xl max-w-[400px] p-4  h-full">
            <p className="p-4 h-full">
              <span className="">Navigate the </span>
              <span className="text-[#e1f396]">knowledge Realm </span>{" "}
              <span> with </span>
              <span className="text-[#e1f396]">SHIKEN</span>
            </p>
          </div>
          <div className="hidden md:flex">
            <p className="text-slate-200 pb-[100px]">
              Embark on a quiz journey with this sleek, user-friendly app.
              Diverse topics, challenges, and achievements await as you test and
              expand your knowledge. Compete, learn, and have fun
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between ml-[50px] md:ml-0 ">
          <div>
            <div className="flex justify-center items-center border-4 md:border-[7px] border-s-[#e1f396] border-b-[#e1f396] h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
              <div className="flex justify-center items-center border-4 md:border-[7px] border-s-[#e1f396] border-b-[#e1f396] h-[250px] w-[250px] md:h-[350px] md:w-[350px]">
                <div className="flex justify-center items-center border-4 md:border-[7px] border-s-[#e1f396] border-b-[#e1f396] h-[200px] w-[200px] md:h-[300px] md:w-[300px]">
                  <div className="flex justify-center items-center border-4 md:border-[7px] border-s-[#e1f396] border-b-[#e1f396] h-[150px] w-[150px] md:h-[250px] md:w-[250px]">
                    <div className="flex justify-center items-center border-4 md:border-[7px] border-s-[#e1f396] border-b-[#e1f396] h-[100px] w-[100px] md:h-[200px] md:w-[200px]">
                      <div className="flex justify-center items-center border-4 md:border-[7px] border-s-[#e1f396] border-b-[#e1f396] h-[50px] w-[50px] md:h-[150px] md:w-[150px]">
                        <div className="hidden md:flex justify-center items-center border-4 md:border-[7px] border-s-[#e1f396] border-b-[#e1f396] h-[50px] w-[50px] md:h-[100px] md:w-[100px]">
                          <div className="hidden md:flex justify-center items-center border-4 md:border-[7px] border-s-[#e1f396] border-b-[#e1f396] h-[50px] w-[50px] md:h-[50px] md:w-[50px]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-7 flex justify-end pb-[-10px] mr-10 md:mr-0">
            <Link href="/home">
              <MainButton type={"continue"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
