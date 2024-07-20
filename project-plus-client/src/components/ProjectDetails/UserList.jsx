import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback } from "../ui/avatar";

function UserList() {
  let assingnTo = "Vishal";
  return (
    <>
      <div className="space-y-2">
        <div className="border rounded-md">
          <span className="py-2 px-3">{assingnTo || "Unassigned"}</span>
        </div>
        {[1, 2, 3, 4].map((user) => (
          <div
            className="py-2 group hover:border-2 hover:border-primary cursor-pointer 
                flex items-center space-x-4 rounded-md border px-4"
          >
            <Avatar className="border border-primary rounded-lg p-1">
              <AvatarFallback>MY</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm leading-none">Mohit Yede</p>
              <p className="text-sm text-muted-foreground">@enamoured</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserList;
