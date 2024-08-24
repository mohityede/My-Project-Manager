import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons"
import { useNavigate } from "react-router-dom"

function UpgradeFail() {
    const navigate=useNavigate()
  return (
    <>
    <div className="flex justify-center">
        <Card className="mt-20 space-y-5 p-5 flex flex-col items-center">
            <div className="flex item-center gap-4">
                <CrossCircledIcon className="h-9 w-9 text-red-500"/>
                <p className="font-bold text-xl font-mono">Payment Failed</p>
            </div>
            <Button onClick={()=> navigate("/")} >Go To Home</Button>
        </Card>
    </div>
    </>
  )
}

export default UpgradeFail