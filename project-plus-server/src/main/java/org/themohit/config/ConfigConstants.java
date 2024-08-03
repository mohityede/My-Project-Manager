package org.themohit.config;

import io.jsonwebtoken.security.Keys;

import javax.crypto.SecretKey;
import java.util.Arrays;
import java.util.List;

public class ConfigConstants {
    private static final String SECRET_STRING="sdjfdojiojlkjdofijlijldjfoejoij48579yihk98vhlijvuvouo4";
    public static final SecretKey JWT_SECRET_KEY = Keys.hmacShaKeyFor(SECRET_STRING.getBytes());
    public static final String JWT_HEADER="Authorization";
    public static final int JWT_EXPIRATION_MS=86400000;

    public static final List<String> CORS_ALLOW_ORIGINS= Arrays.asList(
            "http://localhost:5173/",
            "http://localhost:3000/"
    );
}
