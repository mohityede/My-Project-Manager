package org.themohit.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.Authentication;
import org.themohit.config.ConfigConstants;

import javax.crypto.SecretKey;
import java.util.Date;

public class JwtUtils {
    public static String generateToken(Authentication auth){
        return Jwts.builder()
                .issuedAt(new Date())
                .expiration(new Date(new Date().getTime() + ConfigConstants.JWT_EXPIRATION_MS))
                .claim("email", auth.getName())
                .signWith(getKey())
                .compact();
    }

    public static String getEmailFromToken(String jwt){
        return String.valueOf(getClaims(jwt).get("email"));
    }

    private static SecretKey getKey(){
        return Keys.hmacShaKeyFor(ConfigConstants.SECRET_STRING.getBytes());
    }

    public static Claims getClaims(String jwt) {
        SecretKey key= getKey();
        if(jwt.contains("Bearer ")){
            jwt=jwt.substring(7);
        }
        return Jwts.parser().verifyWith(key).build().parseSignedClaims(jwt).getPayload();
    }
}
