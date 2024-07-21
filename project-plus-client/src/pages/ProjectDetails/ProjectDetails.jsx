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

const users=["MY","TC","SB","AY","KP","JP"]
const projectStatus="In Progress"

function ProjectDetails() {
  const handleProjectInvitation = ()=>{
    console.log("inviteed")
  }
  return (
    <>
    <div className="m-5 lg:px-10">
      <div className="lg:flex gap-5 justify-between pb-4">
        <ScrollArea className="h-screen lg:w-[69%] pr-2">
          <div className="pb-10 w-full">
            <h1 className="pb-5 font-bold text-2xl font-mono">Project Name</h1>
            <div className="space-y-5 pb-10">
              <p className="w-full md:max-w-lg lg:max-w-xl text-sm font-thin">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellendus laudantium dolores tenetur doloribus ea beatae cumque porro! Assumenda mollitia earum necessitatibus perferendis modi repudiandae. Aliquam, nulla? Voluptas, odio. Ducimus.
              </p>
              <div className="flex">
                <span className="w-36">Created by:</span>
                <span className="font-semibold">Mohit Yede</span>
              </div>
              <div className="flex">
                <span className="w-36">Category:</span>
                <span className="font-semibold">Fullstack</span>
              </div>
              <div className="flex">
                <span className="w-36">Members:</span>
                <div className="flex flex-wrap items-center gap-2">
                  {
                    users.slice(0,4).map((member)=>
                      <Avatar key={member} className="cursor-pointer ">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    )
                  }
                  <Dialog>
                    <DialogTrigger>
                      <DialogClose>
                      <Avatar className="cursor-pointer ">
                            <AvatarImage src="" alt="@shadcn" />
                            <AvatarFallback>{users.length-2}+</AvatarFallback>
                          </Avatar>                   
                      </DialogClose>
                    </DialogTrigger>
                    <DialogOverlay>
                      <DialogContent>
                        <DialogTitle>Project members:</DialogTitle>
                        <MembersTable users={users}/>
                        <DialogDescription>All the project users are listed here</DialogDescription>
                      </DialogContent>
                    </DialogOverlay>
                    
                  </Dialog>
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
                      <InviteUserForm/>
                      <DialogDescription>Please fill valid email address to invite user</DialogDescription>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <div className="flex">
                <span className="w-36">Status:</span>
                {
                  projectStatus==="Planning" && (<Badge className="bg-green-600">{projectStatus}</Badge>)
                }
                {
                  projectStatus==="In Progress" && (<Badge className="bg-yellow-600">{projectStatus}</Badge>)
                }
                {
                  projectStatus==="Completed" && (<Badge className="bg-gray-600">{projectStatus}</Badge>)
                } 
                {
                  projectStatus==="Aborted" && (<Badge className="bg-red-700">{projectStatus}</Badge>)
                }                
              </div>
            </div>
          </div>
          <section>
            <span className="py-5 border-b text-xl font-mono">Task</span>
            <div className="lg:flex md:flex gap-3 justify-between py-5">
              <TaskList status="pending" title="Todo List"/>
              <TaskList status="in_progress" title="In Progress"/>
              <TaskList status="completed" title="Done"/>              
            </div>
          </section>
        </ScrollArea>
        <div className="lg:w-[30%] rounded-md sticky right-5 top-10">
          <ChatBox/>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProjectDetails