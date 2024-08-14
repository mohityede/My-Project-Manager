package org.themohit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.themohit.model.User;
import org.themohit.request.LoginRequest;
import org.themohit.response.AuthResponse;
import org.themohit.service.AuthService;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> registerUser(@RequestBody User user) throws Exception{
        AuthResponse authRes=authService.createNewUser(user);
        return new ResponseEntity<>(authRes, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> loginUser(@RequestBody LoginRequest loginRequest){
        AuthResponse authRes= authService.loginUser(loginRequest);
        return new ResponseEntity<>(authRes,HttpStatus.OK);
    }
}
