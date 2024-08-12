package org.themohit.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.themohit.enums.Plan;
import org.themohit.exception.SubscriptionException;
import org.themohit.model.Subscription;
import org.themohit.model.User;
import org.themohit.repository.SubscriptionRepo;

import java.time.LocalDate;

@Service
public class SubscriptionService {
    @Autowired
    private UserService userService;

    @Autowired
    private SubscriptionRepo subscriptionRepo;

    public Subscription createSubscription(User user){
        Subscription newSubscription=new Subscription();

        newSubscription.setUser(user);
        newSubscription.setSubscriptionStartDate(LocalDate.now());
        newSubscription.setSubscriptionEndDate(LocalDate.now().plusMonths(12));
        newSubscription.setValid(true);
        newSubscription.setPlanType(Plan.FREE);

        return subscriptionRepo.save(newSubscription);
    }

    public Subscription getUserSubscription(long userId){
        Subscription subscription= subscriptionRepo.findByUserId(userId);

        // only to create subscription while testing
//        if(subscription==null) subscription= createSubscription(userService.getUserById(userId));

        if(isValid(subscription)) return subscription;

        subscription.setPlanType(Plan.FREE);
        subscription.setSubscriptionStartDate(LocalDate.now());
        subscription.setSubscriptionEndDate(LocalDate.now().plusMonths(12));

        return subscriptionRepo.save(subscription);
    }

    public Subscription upgradeSubscription(long userId, String plan) throws Exception {
        Subscription subscription=subscriptionRepo.findByUserId(userId);
        if(subscription==null) throw new SubscriptionException("Invalid user Id");

        Plan planType;
        try{
            planType=Plan.valueOf(plan.toUpperCase());
        }catch (Exception ex){
            throw new SubscriptionException("Invalid Plan Type");
        }

        LocalDate planEndDate=LocalDate.now();
        if(planType.equals(Plan.ANNUAL))
            planEndDate = LocalDate.now().plusMonths(12);
        if(planType.equals(Plan.MONTHLY))
            planEndDate = LocalDate.now().plusMonths(1);

        subscription.setPlanType(planType);
        subscription.setSubscriptionStartDate(LocalDate.now());
        subscription.setSubscriptionEndDate(planEndDate);

        return subscriptionRepo.save(subscription);
    }

    private boolean isValid(Subscription subscription){
        if(subscription.getPlanType().equals(Plan.FREE)) return true;
        LocalDate endDate=subscription.getSubscriptionEndDate();
        LocalDate today=LocalDate.now();
        return today.isBefore(endDate) || today.isEqual(endDate);
    }
}
