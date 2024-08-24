import { TrashIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { deleteTaskComment } from "@/redux/comment/action";
import { getFallback } from "@/utils/utils";

function CommentCard({item}) {
  const dispatch=useDispatch();
  const handlerDeleteComment = ()=>{
    dispatch(deleteTaskComment(item.id))
  }
  
  return (
    <>
      <div className="flex justify-between">
        <div className="flex item-center gap-4">
          <Avatar>
            <AvatarFallback>{getFallback(item.user.fullName)}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="font-thin">{item.user.fullName}</p>
            <p>{item.content}</p>
          </div>
        </div>
        <Button onClick={() => handlerDeleteComment()} varient="outline" size="sm" className="rounded-full">
          <TrashIcon />
        </Button>
      </div>
    </>
  );
}

export default CommentCard;
