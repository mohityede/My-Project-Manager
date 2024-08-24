import ChatBox from "@/components/ProjectDetails/ChatBox"
import InviteUserForm from "@/components/ProjectDetails/InviteUserForm"
import TaskList from "@/components/ProjectDetails/TaskList"
import MembersTable from "@/components/ProjectDetails/MembersList"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PlusIcon } from "@radix-ui/react-icons"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProjectById } from "@/redux/project/action"
import { useParams } from "react-router-dom"
import { getChat } from "@/redux/chat/action"
import { getFallback } from "@/utils/utils"

const users=["MY","TC","SB","AY","KP","JP"]
const projectStatus="In Progress"

function ProjectDetails() {
  const dispatch=useDispatch();
  const {project,auth}=useSelector(store => store)
  const {id}=useParams();
  const handleProjectInvitation = ()=>{
    console.log("inviteed")
  }

  useEffect(()=>{
    dispatch(getChat(id))
    dispatch(getProjectById(id))
  },[id])

  return (
    <>
    {
      (project.loading || project.projectDetails===null) ? <h1>Loading...</h1>:
    <div className="m-5 lg:px-10">
      <div className="lg:flex gap-5 justify-between pb-4">
        <ScrollArea className="h-screen lg:w-[69%] pr-2">
          <div className="pb-10 w-full">
            <h1 className="pb-5 font-bold text-2xl font-mono">{project.projectDetails.name}</h1>
            <div className="space-y-5 pb-10">
              <p className="w-full md:max-w-lg lg:max-w-xl text-sm font-thin">
                {project.projectDetails.description}
              </p>
              <div className="flex">
                <span className="w-36">Created by:</span>
                <span className="font-semibold">{project.projectDetails.owner.fullName.toUpperCase()}</span>
              </div>
              <div className="flex">
                <span className="w-36">Category:</span>
                <span className="font-semibold">{project.projectDetails.category.toUpperCase()}</span>
              </div>
              <div className="flex">
                <span className="w-36">Members:</span>
                <div className="flex flex-wrap items-center gap-2">
                  {
                    project.projectDetails.members.slice(0,4).map((member)=>
                      <Avatar key={member.id} className="cursor-pointer ">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>{getFallback(member.fullName)}</AvatarFallback>
                      </Avatar>
                    )
                  }
                  {
                    project.projectDetails.members.length > 4 &&
                  <Dialog>
                    <DialogTrigger>
                      <DialogClose>
                      <Avatar className="cursor-pointer ">
                            <AvatarImage src="" alt="@shadcn" />
                            <AvatarFallback>{project.projectDetails.members.length-4}+</AvatarFallback>
                          </Avatar>                   
                      </DialogClose>
                    </DialogTrigger>
                    {/* <DialogOverlay>
                      <DialogContent>
                        <DialogTitle>Project members:</DialogTitle>
                        <MembersTable users={users}/>
                        <DialogDescription>All the project users are listed here</DialogDescription>
                      </DialogContent>
                    </DialogOverlay>                     */}
                  </Dialog>
                  }
                </div>
                <div>
                  <Dialog>
                    <DialogTrigger>
                      <DialogClose>
                        <Button size="sm" varient="outline" onClick={handleProjectInvitation} className="ml-2">
                          <span>Invite</span>
                          <PlusIcon className="w-3 h-3"/>
                        </Button>
                      </DialogClose>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogTitle>Invite User</DialogTitle>
                      <InviteUserForm projectId={project.projectDetails.id}/>
                      <DialogDescription>Please fill valid email address to invite user</DialogDescription>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              {/* <div className="flex">
                <span className="w-36">Status:</span>                
                {
                  projectStatus==="In Progress" && (<Badge className="bg-yellow-600">{projectStatus}</Badge>)
                }
                {
                  projectStatus==="Completed" && (<Badge className="bg-gray-600">{projectStatus}</Badge>)
                } 
                {
                  projectStatus==="Aborted" && (<Badge className="bg-red-700">{projectStatus}</Badge>)
                }                
              </div> */}
            </div>
          </div>
          <section>
            <span className="py-5 border-b text-xl font-mono">Task</span>
            <div className="lg:flex md:flex gap-3 justify-between py-5">
              <TaskList status="todo" title="Todo List"/>
              <TaskList status="in_progress" title="In Progress"/>
              <TaskList status="done" title="Done"/>              
            </div>
          </section>
        </ScrollArea>
        <div className="lg:w-[30%] rounded-md sticky right-5 top-10">
          <ChatBox projectId={project.projectDetails.id} user={auth.user}/>
        </div>
      </div>
    </div>
    }
    </>
  )
}

export default ProjectDetails