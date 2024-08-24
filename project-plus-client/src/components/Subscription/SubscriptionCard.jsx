import { CheckIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { payPrice } from "@/redux/subscription/action";

function SubscriptionCard({ data }) {
  const dispatch = useDispatch();
  const handleUpgradePlan = (planType, cost) => {
    dispatch(payPrice(planType, cost));
  };

  return (
    <div
      className="rounded-xl bg-primary text-white shadow-slate-800 shadow-2xl
        card p-5 space-y-5 w-[18rem]"
    >
      <span className="font-culpa">{data.planName}</span>
      <p>
        <span className="font-extrabold">{data.price}</span>/
        <span>{data.planType}</span>
      </p>
      {data.planType === "Annual Paid Plan" && (
        <span className="text-green-400 font-bold">25% Off</span>
      )}
      <Button
        disabled={data.price == 0 || data.buttonName === "Current Plan"}
        onClick={() =>
          handleUpgradePlan(data.planType.split(" ")[0], data.price)
        }
        className="w-full bg-white text-primary hover:text-white hover:border-white hover:border"
      >
        {data.buttonName}
      </Button>
      <div>
        {data.planData.map((plan) => (
          <div className="flex items-center gap-2">
            <CheckIcon />
            {plan}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubscriptionCard;
