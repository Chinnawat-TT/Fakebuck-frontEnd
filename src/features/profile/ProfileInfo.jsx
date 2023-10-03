import Avatar from "../../components/Avatar";
import AuthUserAction from "./AuthUserAction";
export default function ProfileInfo() {
  return (
    <div className=" max-w-6xl mx-auto flex gap-4 px-4 items-end">
      <div className=" -mt-8">
        <Avatar className=" h-40  outline outline-[3px] outline-white" />
      </div>
      <div className=" flex-1">
        <h2 className=" text-2xl font-bold">Jo done</h2>
        <span className=" block text-gray-500 font-semibold mb-2">
          6 Friend
        </span>
        <div className=" flex  -space-x-2">
          <Avatar className=" h-8" />
          <Avatar className=" h-8" />
          <Avatar className=" h-8" />
          <Avatar className=" h-8" />
        </div>
      </div>
      <div>
        <AuthUserAction/>
      </div>
    </div>
  );
}
