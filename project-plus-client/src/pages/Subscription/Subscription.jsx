import SubscriptionCard from "@/components/Subscription/SubscriptionCard";
import { freePlan, ProPlus, ProPlusPlus } from "@/config/data";
import { getUserSubscription } from "@/redux/subscription/action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Subscription() {
  const dispatch = useDispatch();
  const { subscription } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUserSubscription());
  }, []);

  useEffect(() => {
    if (subscription.paymentUrl) {
      window.location.href = subscription.paymentUrl;
    }
  }, [subscription.paymentUrl]);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold py-5 pb-16 text-center">Pricing</h1>
      {subscription.loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
          <SubscriptionCard
            data={{
              planData: freePlan,
              planName: "FREE",
              planType: "FREE",
              price: 0,
              buttonName:
                subscription.userSubscription?.planType?.toUpperCase() ===
                "FREE"
                  ? "Current Plan"
                  : "Get Plan",
            }}
          />
          <SubscriptionCard
            data={{
              planData: ProPlus,
              planName: "PRO+",
              planType: "Monthly Paid Plan",
              price: 999,
              buttonName:
                subscription.userSubscription?.planType?.toUpperCase() ===
                "MONTHLY"
                  ? "Current Plan"
                  : "Get Plan",
            }}
          />
          <SubscriptionCard
            data={{
              planData: ProPlusPlus,
              planName: "PRO++",
              planType: "Annual Paid Plan",
              price: 23999,
              buttonName:
                subscription.userSubscription?.planType?.toUpperCase() ===
                "ANNUAL"
                  ? "Current Plan"
                  : "Get Plan",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Subscription;
