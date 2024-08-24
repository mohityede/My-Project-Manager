import { Button } from "@/components/ui/button"
import { acceptProjectInvitation } from "@/redux/project/action";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";

function AcceptInvite() {
    const dispatch=useDispatch();
    const urlParams= new URLSearchParams(window.location.search)
    const token=urlParams.get("token")
    const navigate=useNavigate();

    const handleAcceptInvite = ()=>{
        console.log("token:",token)
        dispatch(acceptProjectInvitation({inviteToken:token,navigate}))
    }

  return (
    <>
    <div className="flex flex-col justify-center items-center h-[85vh]">
        <h1 className="py-5 font-bold text-xl font-mono" >You are invited to Join project</h1>
        <Button onClick={() => handleAcceptInvite()} >Accept Invite</Button>
    </div>
    </>
  )
}

export default AcceptInvite