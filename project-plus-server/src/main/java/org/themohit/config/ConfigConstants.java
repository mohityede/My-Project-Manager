package org.themohit.config;

import org.springframework.beans.factory.annotation.Value;

import java.util.Arrays;
import java.util.List;

public class ConfigConstants {

    @Value("${frontend.app.url}")
    public static String frontend;

    @Value("${backend.app.url}")
    public static String backend;

    public static final String SECRET_STRING="sdjfdojiojlkjdofijlijldjfoejoij48579yihk98vhlijvuvouo4";
    public static final String JWT_HEADER="Authorization";
    public static final long JWT_EXPIRATION_MS= 1000L *60*60*24*30;

    public static final List<String> CORS_ALLOW_ORIGINS= Arrays.asList(
            "http://localhost:5173/",
            "http://localhost:3000/",
            frontend,
            backend,
            "https://project-plus-beta.vercel.app/"
    );
}
