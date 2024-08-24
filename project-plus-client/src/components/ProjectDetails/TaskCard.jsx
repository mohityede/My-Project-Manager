import { DotsHorizontalIcon, PersonIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTask, updateTaskStatus } from "@/redux/task/action";

function TaskCard({ item, user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteTask(item.id));
  };
  return (
    <>
      <Card className="rounded-md py-1 hover:border-primary pb-2">
        <CardHeader className="py-0 pb-1">
          <div className="flex justify-between items-center">
            <CardTitle
              className="cursor-pointer"
              onClick={() => navigate("/project/3/task/" + item.id)}
            >
              {item.title}
            </CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  className="rounded-full text-primary bg-white hover:border hover:border-primary hover:bg-white "
                  size="sm"
                >
                  <DotsHorizontalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() =>
                    dispatch(
                      updateTaskStatus({ taskId: item.id, status: "todo" })
                    )
                  }
                  className="focus:bg-primary focus:text-white"
                >
                  To Do
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    dispatch(
                      updateTaskStatus({
                        taskId: item.id,
                        status: "in_progress",
                      })
                    )
                  }
                  className="focus:bg-primary focus:text-white"
                >
                  In Progress
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    dispatch(
                      updateTaskStatus({ taskId: item.id, status: "done" })
                    )
                  }
                  className="focus:bg-primary focus:text-white"
                >
                  Done
                </DropdownMenuItem>
                {/* <DropdownMenuItem 
                onClick={()=> dispatch(updateTaskStatus({taskId:item.id , status:"todo"}))}
                className="focus:bg-primary focus:text-white"
                >Edit</DropdownMenuItem> */}
                <DropdownMenuItem
                  onClick={() => handleDelete()}
                  className="focus:bg-primary focus:text-white"
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="py-0">
          <div className="flex items-center justify-between">
            <span>{item.priority}</span>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button size="icon">
                  <Avatar>
                    <AvatarFallback className="w-10 border border-primary text-black hover:bg-background">
                      <PersonIcon />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <UserList user={user} item={item} />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default TaskCard;
