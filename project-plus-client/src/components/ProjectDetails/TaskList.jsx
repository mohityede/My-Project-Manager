import { CardStackPlusIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import TaskCard from "./TaskCard";
import CreateTaskForm from "./CreateTaskForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProjectTasks } from "@/redux/task/action";
import { useParams } from "react-router-dom";

function TaskList({ status, title }) {
  const dispatch = useDispatch();
  const { task, user } = useSelector((store) => store);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProjectTasks(id));
  }, []);

  return (
    <>
      <div>
        <Dialog>
          <Card className="w-full md:w-[290px] lg:w-[300px]">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="px-2">
              <div className="space-y-2">
                {task.tasks
                  .filter((t) => t.status === status)
                  .map((curr) => (
                    <TaskCard user={user} item={curr} key={curr.id} />
                  ))}
              </div>
            </CardContent>
            <CardFooter>
              <DialogTrigger>
                <Button
                  varient="outline"
                  className="w-full border flex items-center gap-2"
                >
                  <CardStackPlusIcon /> Create Task
                </Button>
              </DialogTrigger>
            </CardFooter>
          </Card>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Task</DialogTitle>
            </DialogHeader>
            <CreateTaskForm status={status} />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default TaskList;
