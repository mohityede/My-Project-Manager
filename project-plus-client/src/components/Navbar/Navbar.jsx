import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import CreateProjectForm from "../Project/CreateProjectForm";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { DoubleArrowUpIcon, ExitIcon, PersonIcon, PlusIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import store from "@/redux/store";
import { logout } from "@/redux/auth/action";

function Navbar() {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const {auth}=useSelector(state => state)
  return (
    <>
      <div className="border-b py-4 px-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span onClick={()=>navigate("/")} className="cursor-pointer font-culpa font-extrabold text-3xl italic">Pro+</span>
          <Dialog>
            <DialogTrigger>
              <Button varient="destructive">New Project</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Create New Project</DialogTitle>
              <DialogDescription>Fill all required details.</DialogDescription>
              <CreateProjectForm />
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex gap-3 items-center">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button>
                        <PersonIcon/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={()=> navigate("/upgrade")} className="justify-around focus:bg-primary focus:text-white">
                        Upgrade+ <DoubleArrowUpIcon/>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={()=> dispatch(logout())} className="justify-around focus:bg-primary focus:text-white">
                        Logout <ExitIcon/>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <p className="font-mono">{auth.user.fullName.slice(0,10).split(" ")[0]}</p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
