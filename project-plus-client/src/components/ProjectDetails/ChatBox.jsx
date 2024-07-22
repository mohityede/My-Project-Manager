import { useState } from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { ThickArrowRightIcon } from "@radix-ui/react-icons";

function ChatBox() {
  const [message, setMessage] = useState("");

  const handleMessageChange=(e)=>{
    console.log(message);
    setMessage(e.target.value)
  }
  const handleSendMessage=()=>{
    console.log("sending massage:",message)
  }

  return (
    <>
      <div className="sticky mt-5 lg:mt:0 lg:border lg:border-l-gray-400">
        <div className="border rounded-lg">
          <h1 className="border-b p-5 font-mono text-xl"> Chat Box</h1>
          <ScrollArea className="h-[32rem] w-full p-2 flex gap-3 flex-col">
            {[1, 2, 3, 4].map((chat) =>
              chat !== 2 ? (
                <div key={chat} className="flex gap-2 mb-2 justify-start">
                  <Avatar>
                    <AvatarFallback>MY</AvatarFallback>
                  </Avatar>
                  <div className="py-2 font-thin px-5 bg-white border rounded-ss-2xl rounde rounded-e-xl">
                    <p>Mohit</p>
                    <p className="font-bold">How are you Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati praesentium a iusto corporis! Perspiciatis exercitationem laudantium necessitatibus ad similique doloribus unde voluptas hic quidem magnam sunt, molestias eum nesciunt delectus.</p>
                  </div>
                </div>
              ) : (
                <div key={chat} className="flex gap-2 mb-2 justify-end">
                  <div className="py-2 px-5 bg-primary text-white font-thin border rounded-se-lg 
                  rounded rounded-s-xl">
                    <p>Mohit</p>
                    <p className="text-white font-bold">
                      How are you Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Quos pariatur aperiam placeat inventore
                      veritatis exercitationem dolore aspernatur, officiis
                      consectetur dolorem porro ab officia, cum quas sint
                      deleniti accusantium expedita quam!
                    </p>
                  </div>
                  <Avatar>
                    <AvatarFallback>MY</AvatarFallback>
                  </Avatar>
                </div>
              )
            )}
          </ScrollArea>
          <div className="relative p-0 ml-2">
            <Input
              value={message}
              onChange={(e)=>handleMessageChange(e)}
              placeholder="Type massage..."
              className="py-7 outline-none focus:outline-none focus:ring-0 rounded-none bg-white rounded-lg"
            />
            <Button
              onClick={handleSendMessage}
              varient="outline"
              size="icon"
              className="absolute right-2 top-3 rounded-full"
            >
              <ThickArrowRightIcon/>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatBox;
