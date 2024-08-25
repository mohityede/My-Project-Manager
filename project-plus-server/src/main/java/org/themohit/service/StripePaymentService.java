package org.themohit.service;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class StripePaymentService {

    @Value("${stripe.api.key}")
    private String apiKey;

    @Value("${frontend.app.url}")
    private String clientUrl;

    public String createPaymentLink(long amount,String userEmail,String planType) throws StripeException {
        Stripe.apiKey=apiKey;

        SessionCreateParams sessionParams= SessionCreateParams.builder()
                .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl(clientUrl+"/upgrade/success/"+planType)
                .setCancelUrl(clientUrl+"/upgrade/fail")
                .setCustomerEmail(userEmail)
                .addLineItem(
                        SessionCreateParams.LineItem.builder()
                                .setQuantity(1L)
                                .setPriceData(
                                        SessionCreateParams.LineItem.PriceData.builder()
                                                .setCurrency("inr")
                                                .setUnitAmount(amount*100)
                                                .setProductData(
                                                        SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                                                .setName("Pro+ Subscription")
                                                                .build()
                                                ).build()
                                ).build()
                ).build();

        Session checkoutSession=Session.create(sessionParams);
        return checkoutSession.getUrl();
    }
}
