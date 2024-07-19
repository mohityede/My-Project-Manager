import { Card } from "@/components/ui/card";
import { BadgeIcon, DividerVerticalIcon, DotFilledIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quis, dolorum doloribus omnis reprehenderit ipsam earum non pariatur molestiae similique! Quae inventore similique in obcaecati, ipsa dolores impedit ab pariatur!"
const projectTags=["Java","Spring Boot","React","Javascript","MySQL","AWS","HTML"]

function ProjectCard() {
  const navigate=useNavigate()
  return (
    <>
      <Card className="p-5 w-full lg:max-w-3xl">
        <div className="space-y-5">
          <div className="space-y-2">
            <div className="flex justify-between">
              <div className="flex items-center gap-5">
                <h1 onClick={()=>navigate("/project/3")} className="cursor-pointer font-bold text-lg font-mono">
                  Project Name
                </h1>
                <DividerVerticalIcon />
                <p className="text-sm font-thin">Fullstack</p>
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button varient="destructive" size="custom">
                      <DotsHorizontalIcon/>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem className="focus:bg-primary focus:text-white">
                      Update
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-primary focus:text-white">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <p className="text-gray-500 text-sm font-thin">
              {description.substring(0,100)}...
            </p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            {
              projectTags.slice(0,6).map((tag)=>
              <Badge key={tag} className="font-normal">{tag}</Badge>)
            }
          </div>
        </div>
      </Card>
    </>
  );
}

export default ProjectCard;
