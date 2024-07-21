import CommentCard from "@/components/TaskDetails/CommentCard";
import CreateCommentForm from "@/components/TaskDetails/CreateCommentForm";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "react-router-dom";

function TaskDetails() {
	const {projectId,taskId}=useParams()
  return (
    <>
      {/* <div className="px-20 py-2">
				<div className="flex justify-between p-10 rounded-lg">
					<ScrollArea className="h-[80vh] w-[60%]"> */}
					<div className="m-5 lg:px-10">
      <div className="lg:flex gap-5 justify-between pb-4">
        <ScrollArea className="h-screen lg:w-[69%] pr-2">
						<div>
							<h1 className="text-2xl font-mono font-bold">Task Title</h1>
							<div className="py-5">
								<p className="mt-3 w-full md:max-w-lg lg:max-w-xl text-sm font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa minima ut sit, est consectetur unde voluptatum iste incidunt possimus. Laboriosam optio ex quaerat quasi maiores quo blanditiis aliquam in molestiae.</p>
							</div>
							<div className="mt-5">
								<h1 className="pb-3 text-xl font-mono">Activity</h1>
								<Tabs defaultValue="comment" className="w-[400px]">
									<TabsList className="mb-5">
										<TabsTrigger value="all">
											All
										</TabsTrigger>
										<TabsTrigger value="comment">
											Comments
										</TabsTrigger>
										<TabsTrigger value="history">
											History
										</TabsTrigger>										
									</TabsList>
									<TabsContent value="all">
												all changes to task would be here
									</TabsContent>
									<TabsContent value="comment">
										<CreateCommentForm taskId={taskId} />
										<div className="mt-8 space-y-6">
											{
												[1,2,3].map((comment)=> <CommentCard key={comment} />)
											}
										</div>
									</TabsContent>
									<TabsContent value="history">
										history
									</TabsContent>
								</Tabs>
							</div>
						</div>
					</ScrollArea>
					<div className="lg:w-[30%] rounded-md sticky right-5 top-10">
         Details
        </div>
				</div>
			</div>
    </>
  );
}

export default TaskDetails;
