import CommentCard from "@/components/TaskDetails/CommentCard";
import CreateCommentForm from "@/components/TaskDetails/CreateCommentForm";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllTaskComments } from "@/redux/comment/action";
import { getTaskById, updateTaskStatus } from "@/redux/task/action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function TaskDetails() {
  const dispatch = useDispatch();
  const { taskId } = useParams();
  const { task, comment, auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getTaskById(taskId));
    dispatch(getAllTaskComments(taskId));
  }, []);

  const updateTaskStatusHandler = (status) => {
    dispatch(updateTaskStatus({ taskId: taskId, status }));
  };
  return (
    <>
      {task.loading || task.taskDetails == null ? (
        <h1>Loading...</h1>
      ) : (
        <div className="m-5 lg:px-10">
          <div className="lg:flex gap-5 justify-between pb-4">
            <ScrollArea className="h-screen lg:w-[69%] pr-2 bg-white p-5 rounded-md mb-5">
              <div>
                <h1 className="text-2xl font-mono font-bold">
                  {task.taskDetails?.title}
                </h1>
                <div className="py-5">
                  <p className="mt-3 w-full md:max-w-lg lg:max-w-xl text-sm font-thin">
                    {task.taskDetails?.description}
                  </p>
                </div>
                <div className="mt-5">
                  <h1 className="pb-3 text-xl font-mono">Activity</h1>
                  <Tabs defaultValue="comment" className="w-[400px]">
                    <TabsList className="mb-5">
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="comment">Comments</TabsTrigger>
                      <TabsTrigger value="history">History</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">
                      all changes to task would be here
                    </TabsContent>
                    <TabsContent value="comment">
                      <CreateCommentForm taskId={taskId} user={auth.user} />
                      <div className="mt-8 space-y-6">
                        {comment.comments.reverse().map((comment) => (
                          <CommentCard key={comment.id} item={comment} />
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="history">history</TabsContent>
                  </Tabs>
                </div>
              </div>
            </ScrollArea>
            <div className="lg:w-[30%] w-full space-y-2">
              <Select onValueChange={updateTaskStatusHandler}>
                <SelectTrigger className="w-[180px] border border-primary bg-white">
                  <SelectValue placeholder={task.taskDetails.status} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="todo"
                    className="focus:bg-primary focus:text-white"
                  >
                    To Do
                  </SelectItem>
                  <SelectItem
                    value="in_progress"
                    className="focus:bg-primary focus:text-white"
                  >
                    In Progress
                  </SelectItem>
                  <SelectItem
                    value="done"
                    className="focus:bg-primary focus:text-white"
                  >
                    Done
                  </SelectItem>
                </SelectContent>
              </Select>
              <div className="border border-black rounded-lg bg-white">
                <p className="border border-b-black py-3 font-mono text-lg px-5">
                  Details
                </p>
                <div className="p-5">
                  <div className="space-y-7">
                    <div className="flex gap-10 item-center">
                      <p className="w-[7rem]">Assignee</p>
                      <p className="font-semibold">
                        {task.taskDetails?.assignee === null
                          ? "Unassigned"
                          : task.taskDetails.assignee.fullName}
                      </p>
                    </div>
                    <div className="flex gap-10 item-center">
                      <p className="w-[7rem]">Label</p>
                      <p className="font-semibold">None</p>
                    </div>
                    <div className="flex gap-10 item-center">
                      <p className="w-[7rem]">Status</p>
                      <p>
                        {task.taskDetails.status === "done" && (
                          <Badge className="bg-yellow-600">
                            {task.taskDetails.status}
                          </Badge>
                        )}
                        {task.taskDetails.status === "in_progress" && (
                          <Badge className="bg-gray-600">
                            {task.taskDetails.status}
                          </Badge>
                        )}
                        {task.taskDetails.status === "todo" && (
                          <Badge className="bg-red-700">
                            {task.taskDetails.status}
                          </Badge>
                        )}
                      </p>
                    </div>
                    <div className="flex gap-10 item-center">
                      <p className="w-[7rem]">Due Date</p>
                      <p className="font-semibold">01/01/2099</p>
                    </div>
                    <div className="flex gap-10 item-center">
                      <p className="w-[7rem]">Priority</p>
                      <p className="font-semibold">
                        {task.taskDetails.priority}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TaskDetails;
