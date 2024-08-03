package org.themohit.utils;

import io.jsonwebtoken.Jwts;
import org.springframework.security.core.Authentication;
import org.themohit.config.ConfigConstants;
import org.themohit.config.JwtFilter;

import java.util.Date;

public class JwtUtils {
    public static String generateToken(Authentication auth){
        String email = Jwts.builder()
                .issuedAt(new Date())
                .expiration(new Date(new Date().getTime() + ConfigConstants.JWT_EXPIRATION_MS))
                .claim("email", auth.getName())
                .signWith(ConfigConstants.JWT_SECRET_KEY)
                .compact();

        return email;
    }

    public static String getEmailFromToken(String jwt){
        return String.valueOf(JwtFilter.getClaims(jwt).get("email"));
    }
}
