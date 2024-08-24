import { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { ThickArrowRightIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { getChat, sendChatMessage } from "@/redux/chat/action";
import { getFallback } from "@/utils/utils";
import { useParams } from "react-router-dom";

function ChatBox({ user }) {
  const dispatch = useDispatch();
  const { id: projectId } = useParams();
  const { chat } = useSelector((store) => store);
  const [message, setMessage] = useState("");

  useEffect(() => {
    dispatch(getChat(projectId));
  }, [chat.messages]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };
  const handleSendMessage = () => {
    if (message.length > 1) {
      dispatch(sendChatMessage({ content: message, chatId: chat.chat.id }));
      setMessage("");
    }
  };

  return (
    <>
      <div className="sticky mt-5 lg:mt:0 lg:border lg:border-l-gray-400">
        <div className="border rounded-lg">
          <h1 className="border-b p-5 font-mono text-xl"> Chat Box</h1>
          <ScrollArea className="h-[32rem] w-full p-2 flex gap-3 flex-col">
            {chat.chat?.messages.map((msg) =>
              msg.sender?.id !== user?.id ? (
                <div key={msg.id} className="flex gap-2 mb-2 justify-start">
                  <Avatar>
                    <AvatarFallback>
                      {getFallback(msg.sender.fullName)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="py-2 font-thin px-5 bg-white border rounded-ss-2xl rounde rounded-e-xl">
                    <p>{msg.sender.fullName}</p>
                    <p className="font-bold">{msg.content}</p>
                  </div>
                </div>
              ) : (
                <div key={msg.id} className="flex gap-2 mb-2 justify-end">
                  <div
                    className="py-2 px-5 bg-primary text-white font-thin border rounded-se-lg 
                  rounded rounded-s-xl"
                  >
                    <p>{msg.sender.fullName}</p>
                    <p className="text-white font-bold">{msg.content}</p>
                  </div>
                  <Avatar>
                    <AvatarFallback>
                      {getFallback(msg.sender.fullName)}
                    </AvatarFallback>
                  </Avatar>
                </div>
              )
            )}
          </ScrollArea>
          <div className="relative p-0 ml-2">
            <Input
              value={message}
              onChange={(e) => handleMessageChange(e)}
              placeholder="Type massage..."
              onKeyDown={handleKeyDown}
              className="py-7 outline-none focus:outline-none focus:ring-0 bg-white rounded-lg"
            />
            <Button
              onClick={handleSendMessage}
              varient="outline"
              size="icon"
              className="absolute right-2 top-3 rounded-full"
            >
              <ThickArrowRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatBox;
