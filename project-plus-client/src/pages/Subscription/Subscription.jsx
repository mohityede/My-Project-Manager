import SubscriptionCard from "@/components/Subscription/SubscriptionCard";
import { getUserSubscription } from "@/redux/subscription/action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const freePlan = [
  "Add Only 2 Projects",
  "Basic Task Management",
  "Team Collaboration",
  "Basic Reporting",
  "Email Notification",
  "Basic Access Controll",
];

const ProPlus = [
  "Add 25 Projects",
  "Access live chat",
  "Add 100 team members",
  "Advance Reporting",
  "Advance Security",
  "Support",
  "Access Controll",
];

const ProPlusPlus = [
  "Add Unlimited Project",
  "Add Unlimited team Members",
  "Priority Support",
  "Integration Support",
  "Customization Optoins",
  "All benefits of Monthly plan",
];

function Subscription() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {subscription}=useSelector(store => store)
  
  useEffect(()=>{
    dispatch(getUserSubscription())
  },[])

  useEffect(()=>{
    if(subscription.paymentUrl){
      // navigate(subscription.paymentUrl,{replace:true})
      console.log("useffect: subscription :",subscription)
      window.location.href=subscription.paymentUrl
      
    }
  },[subscription.paymentUrl])

  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold py-5 pb-16 text-center">Pricing</h1>
      {
        subscription.loading ? <h1>Loading...</h1> :
        <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
          <SubscriptionCard data={{
            planData:freePlan,
            planName:"FREE",
            planType:"FREE",
            price:0,
            buttonName:(subscription.userSubscription?.planType?.toUpperCase() === "FREE")?"Current Plan":"Get Plan"
            }}/>
            <SubscriptionCard data={{
            planData:ProPlus,
            planName:"PRO+",
            planType:"Monthly Paid Plan",
            price:999,
            buttonName:(subscription.userSubscription?.planType?.toUpperCase() === "MONTHLY")?"Current Plan":"Get Plan"
            }}/>
            <SubscriptionCard data={{
            planData:ProPlusPlus,
            planName:"PRO++",
            planType:"Annual Paid Plan",
            price:23999,
            buttonName:(subscription.userSubscription?.planType?.toUpperCase() === "ANNUAL")?"Current Plan":"Get Plan"
            }}/>
        </div>
      }
    </div>
  );
}

export default Subscription;
