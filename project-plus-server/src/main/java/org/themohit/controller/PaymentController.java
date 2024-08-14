package org.themohit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.themohit.config.ConfigConstants;
import org.themohit.model.User;
import org.themohit.response.PaymentLinkResponse;
import org.themohit.service.StripePaymentService;
import org.themohit.service.UserService;

@RestController
@RequestMapping("/api/v1/payment")
public class PaymentController {
    @Autowired
    private UserService userService;

    @Autowired
    private StripePaymentService paymentService;

    @GetMapping("/pay")
    public ResponseEntity<PaymentLinkResponse> createPaymentLink(
            @RequestParam long amount,
            @RequestHeader(ConfigConstants.JWT_HEADER) String jwt
    ) throws Exception {
        User user = userService.getUserProfileByJwt(jwt);
        String paymentLink= paymentService.createPaymentLink(amount,user.getEmail());
        PaymentLinkResponse res=new PaymentLinkResponse();
        res.setLink(paymentLink);
        res.setUserEmail(user.getEmail());
        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }
}
