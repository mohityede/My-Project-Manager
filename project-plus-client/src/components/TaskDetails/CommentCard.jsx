import { TrashIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";

function CommentCard() {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex item-center gap-4">
          <Avatar>
            <AvatarFallback>MY</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="font-thin">Mohit Yede</p>
            <p>How to setup project?</p>
          </div>
        </div>
        <Button varient="outline" size="sm" className="rounded-full">
          <TrashIcon />
        </Button>
      </div>
    </>
  );
}

export default CommentCard;
