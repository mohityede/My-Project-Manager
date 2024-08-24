import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback } from "../ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { assignTaskToUser } from "@/redux/task/action";
import { getFallback } from "@/utils/utils";

function UserList({item}) {
  const {project}=useSelector(store => store)
  const dispatch=useDispatch();
  console.log("userlist prject",project)
  console.log("userlist item",item)

  const handleAssigment= (userId)=>{
    dispatch(assignTaskToUser({taskId:item.id,userId}))
  }


  return (
    <>
      <div className="space-y-2">
        <div className="border rounded-md">
          <span className="py-2 px-3">{ item.assignee?.fullName || "Unassigned"}</span>
        </div>
        {project.projectDetails.members.map(user => 
          <div
            key={user.id}
            onClick={()=> handleAssigment(user.id)}
            className="py-2 group hover:border-2 hover:border-primary cursor-pointer 
                flex items-center space-x-4 rounded-md border px-4"
          >
            <Avatar className="border border-primary rounded-lg p-1">
              <AvatarFallback>{getFallback(user.fullName)}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm leading-none">{user.fullName}</p>
              <p className="text-sm text-muted-foreground">@{user.email.split("@")[0]}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default UserList;
