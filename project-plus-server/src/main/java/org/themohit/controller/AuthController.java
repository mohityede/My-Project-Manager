package org.themohit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.themohit.model.User;
import org.themohit.request.LoginReq;
import org.themohit.response.AuthResponse;
import org.themohit.service.AuthService;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> registerUser(@RequestBody User user) throws Exception{
        return authService.createNewUser(user);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> loginUser(@RequestBody LoginReq loginReq){
        return authService.loginUser(loginReq);
    }
}
