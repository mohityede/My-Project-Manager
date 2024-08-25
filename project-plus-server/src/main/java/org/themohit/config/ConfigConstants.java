package org.themohit.config;

import java.util.Arrays;
import java.util.List;

public class ConfigConstants {
    public static final String SECRET_STRING="sdjfdojiojlkjdofijlijldjfoejoij48579yihk98vhlijvuvouo4";
    public static final String JWT_HEADER="Authorization";
    public static final int JWT_EXPIRATION_MS=1000*60*60*24*30;

    public static final List<String> CORS_ALLOW_ORIGINS= Arrays.asList(
            "http://localhost:5173/",
            "http://localhost:3000/"
    );
}
