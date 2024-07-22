import { DotsHorizontalIcon, PersonIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSubTrigger, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import UserList from "./UserList"
import { useNavigate } from "react-router-dom"

function TaskCard() {
  const navigate= useNavigate()
    return (
      <>
      <Card className="rounded-md py-1 hover:border-primary pb-2">
        <CardHeader className="py-0 pb-1">
          <div className="flex justify-between items-center">
            <CardTitle className="cursor-pointer" onClick={()=>navigate("/project/3/task/4")}>
                Setup Project
            </CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button className="rounded-full text-primary bg-white hover:border hover:border-primary hover:bg-white " size="sm">
                  <DotsHorizontalIcon/>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="focus:bg-primary focus:text-white">In Progress</DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-primary focus:text-white">Done</DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-primary focus:text-white">Edit</DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-primary focus:text-white">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="py-0">
          <div className="flex items-center justify-between">
            <span>review:{1}</span>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button 
                size="icon">         
                <Avatar>
                  <AvatarFallback className="w-10 border border-primary text-black hover:bg-background">

                    <PersonIcon/>                 
                  </AvatarFallback>
                  </Avatar>         
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <UserList/>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>
      </>
    )
  }
  
  export default TaskCard
  