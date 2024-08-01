package org.themohit.config;

import java.util.Arrays;
import java.util.List;

public class ConfigConstants {
    public static final String JWT_SECRET = "sdjfdojiojlkjdofijlijldjfoejoij";
    public static final String JWT_HEADER="Authorization";
    public static final List<String> CORS_ALLOW_ORIGINS= Arrays.asList(
            "http://localhost:5173/",
            "http://localhost:3000/"
    );
}
