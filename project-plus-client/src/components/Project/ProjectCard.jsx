import { Card } from "@/components/ui/card";
import { BadgeIcon, DividerVerticalIcon, DotFilledIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject } from "@/redux/project/action";

function ProjectCard({projectData}) {
  const {auth}=useSelector(store=>store)
  const dispatch=useDispatch();
  const navigate=useNavigate()
  console.log("project card:",projectData)

  const handleDelete = ()=>{
    dispatch(deleteProject(projectData.id))
  }

  return (
    <>
      <Card className="p-5 w-full lg:max-w-3xl">
        <div className="space-y-5">
          <div className="space-y-2">
            <div className="flex justify-between">
              <div className="flex items-center gap-5">
                <h1 onClick={()=>navigate("/project/"+projectData.id)} className="cursor-pointer font-bold text-lg font-mono">
                  {projectData.name}
                </h1>
                <DividerVerticalIcon />
                <p className="text-sm font-thin">{projectData.category}</p>
              </div>
              {
                projectData.owner?.id === auth.user?.id &&
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button varient="destructive" size="custom">
                      <DotsHorizontalIcon/>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {/* <DropdownMenuItem className="focus:bg-primary focus:text-white">
                      Update
                    </DropdownMenuItem> */}
                    <DropdownMenuItem onClick={()=> handleDelete()} className="focus:bg-primary focus:text-white">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              }
            </div>
            <p className="text-gray-500 text-sm font-thin">
              {projectData.description.substring(0,100)}...
            </p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            {
              projectData.tags.slice(0,6).map((tag)=>
              <Badge key={tag} className="font-normal">{tag}</Badge>)
            }
          </div>
        </div>
      </Card>
    </>
  );
}

export default ProjectCard;
