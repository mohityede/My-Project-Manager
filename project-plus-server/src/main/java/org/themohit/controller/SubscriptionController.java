package org.themohit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.themohit.config.ConfigConstants;
import org.themohit.enums.Plan;
import org.themohit.model.Subscription;
import org.themohit.model.User;
import org.themohit.service.SubscriptionService;
import org.themohit.service.UserService;

@RestController
@RequestMapping("/api/v1/subscription")
public class SubscriptionController {
    @Autowired
    private SubscriptionService subscriptionService;

    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public ResponseEntity<Subscription> getUserSubscription(
            @RequestHeader(ConfigConstants.JWT_HEADER) String jwt
    )throws Exception{
        User user= userService.getUserProfileByJwt(jwt);
        Subscription subscription=subscriptionService.getUserSubscription(user.getId());
        return new ResponseEntity<>(subscription, HttpStatus.OK);
    }

    @PatchMapping("/upgrade")
    public ResponseEntity<Subscription> upgradeSubscription(
            @RequestParam String planType,
            @RequestHeader(ConfigConstants.JWT_HEADER) String jwt
    )throws Exception{
        User user= userService.getUserProfileByJwt(jwt);

        Subscription subscription=subscriptionService.upgradeSubscription(user.getId(),planType);
        return new ResponseEntity<>(subscription, HttpStatus.OK);
    }
}
