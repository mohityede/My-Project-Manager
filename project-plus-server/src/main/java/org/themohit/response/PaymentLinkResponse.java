package org.themohit.response;

import lombok.Data;

@Data
public class PaymentLinkResponse {
    private String link;
    private String userEmail;
}
