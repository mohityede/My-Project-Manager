import CommentCard from "@/components/TaskDetails/CommentCard";
import CreateCommentForm from "@/components/TaskDetails/CreateCommentForm";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "react-router-dom";

const projectStatus="In Progress"
function TaskDetails() {
  const { projectId, taskId } = useParams();
	const updateTaskStatus=(status)=>{
		console.log("updated")
	}
  return (
    <>
      {/* <div className="px-20 py-2">
				<div className="flex justify-between p-10 rounded-lg">
					<ScrollArea className="h-[80vh] w-[60%]"> */}
      <div className="m-5 lg:px-10">
        <div className="lg:flex gap-5 justify-between pb-4">
          <ScrollArea className="h-screen lg:w-[69%] pr-2 mb-5">
            <div>
              <h1 className="text-2xl font-mono font-bold">Task Title</h1>
              <div className="py-5">
                <p className="mt-3 w-full md:max-w-lg lg:max-w-xl text-sm font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  minima ut sit, est consectetur unde voluptatum iste incidunt
                  possimus. Laboriosam optio ex quaerat quasi maiores quo
                  blanditiis aliquam in molestiae.
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
                    <CreateCommentForm taskId={taskId} />
                    <div className="mt-8 space-y-6">
                      {[1, 2, 3].map((comment) => (
                        <CommentCard key={comment} />
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="history">history</TabsContent>
                </Tabs>
              </div>
            </div>
          </ScrollArea>
          <div className="lg:w-[30%] w-full space-y-2">
						<Select onValueChange={updateTaskStatus}>
						<SelectTrigger className="w-[180px] border border-primary">
        <SelectValue placeholder="To Do" />
      </SelectTrigger>
						<SelectContent>    
          <SelectItem value="todo" className="focus:bg-primary focus:text-white">To Do</SelectItem>
          <SelectItem value="in_progress" className="focus:bg-primary focus:text-white">In Progress</SelectItem>
          <SelectItem value="completed" className="focus:bg-primary focus:text-white">Done</SelectItem>
      </SelectContent>
						</Select>
						<div className="border border-black rounded-lg">
							<p className="border border-b-black py-3 font-mono text-lg px-5">Details</p>
								<div className="p-5">
									<div className="space-y-7">
										<div className="flex gap-10 item-center">
											<p className="w-[7rem]">Assignee</p>
											<p className="font-semibold">Mohit Yede</p>
										</div>
										<div className="flex gap-10 item-center">
											<p className="w-[7rem]">Label</p>
											<p className="font-semibold">None</p>
										</div>
										<div className="flex gap-10 item-center">
											<p className="w-[7rem]">Status</p>
											<p>
											{
                  projectStatus==="In Progress" && (<Badge className="bg-yellow-600">{projectStatus}</Badge>)
                }
                {
                  projectStatus==="Completed" && (<Badge className="bg-gray-600">{projectStatus}</Badge>)
                } 
                {
                  projectStatus==="Aborted" && (<Badge className="bg-red-700">{projectStatus}</Badge>)
                }   
											</p>
										</div>
										<div className="flex gap-10 item-center">
											<p className="w-[7rem]">Release</p>
											<p className="font-semibold">01/01/2022</p>
										</div>
										<div className="flex gap-10 item-center">
											<p className="w-[7rem]">Reporter</p>
											<p className="font-semibold">Sachin</p>
										</div>
									</div>
								</div>
							</div>
					</div>
        </div>
      </div>
    </>
  );
}

export default TaskDetails;
