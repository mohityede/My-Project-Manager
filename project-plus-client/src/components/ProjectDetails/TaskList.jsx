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

function TaskList({ status, title }) {
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
                {
                  [1,2,3,4,5,6,7].map((card)=>
                    <TaskCard key={card} />
                  )
                }
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
            <CreateTaskForm />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default TaskList;
