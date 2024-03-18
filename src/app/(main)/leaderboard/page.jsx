import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getUsers } from "@/lib/data";
import { connectToDb } from "@/lib/util";
import Link from "next/link";

const page = async () => {
  const users = await getUsers();
  users.sort((a, b) => b.points - a.points);
  //console.log("users :", users);
  return (
    <div>
      <div className="bg-[#e1f396] h-full overflow-hidden flex justify-center items-center text-4xl font-bold text-[#015055] ">
        Leaderboard
      </div>
      <div className="flex justify-center items-center w-screen">
        <div className="border-4 rounded-xl h-[500px] overflow-y-scroll border-[#015055] min-h-[400px] w-5/6 my-10 sm:max-w-[800px] sm:min-w-[700px] p-2 sm:p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] sm:w-[200px] text-lg sm:text-xl">
                  Rank
                </TableHead>

                <TableHead className="text-lg sm:text-xl">Username</TableHead>
                <TableHead className="text-right text-lg sm:text-xl">
                  Points
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user, index) => {
                //console.log("user :", user);
                return (
                  <TableRow key={user._id}>
                    <TableCell className="font-medium sm:text-lg">
                      {index + 1}
                    </TableCell>
                    <TableCell className="sm:text-md font-medium">
                      <Link href={`/user/${user._id}`}>{user.name}</Link>
                    </TableCell>

                    <TableCell className="text-right font-medium sm:text-lg">
                      {user.points}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default page;
