import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { upgradeSubscription } from "@/redux/subscription/action";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function UpgradeSuccess() {
  const navigate = useNavigate();
  const { planType } = useParams();
  const dispatch = useDispatch();

  const handleClaim = () => {
    dispatch(upgradeSubscription(planType));
    navigate("/");
  };
  return (
    <>
      <div className="flex justify-center">
        <Card className="mt-20 space-y-5 p-5 flex flex-col items-center">
          <div className="flex item-center gap-4">
            <CheckCircledIcon className="h-9 w-9 text-green-500" />
            <p className="font-bold text-xl font-mono">
              Plan Upgraded Successfully
            </p>
          </div>
          <span className="text-gray-500">Do not refresh page</span>
          <Button onClick={() => handleClaim()}>Claim Subscription</Button>
        </Card>
      </div>
    </>
  );
}

export default UpgradeSuccess;
