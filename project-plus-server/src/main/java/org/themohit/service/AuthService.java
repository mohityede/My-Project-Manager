package org.themohit.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.themohit.model.User;
import org.themohit.repository.UserRepo;
import org.themohit.request.LoginReq;
import org.themohit.response.AuthResponse;
import org.themohit.utils.JwtUtils;

@Service
public class AuthService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private CustomUserDetails customUserDetails;

    public ResponseEntity<AuthResponse> createNewUser(User user) throws Exception{
        User dbUser= userRepo.findByEmail(user.getEmail());
        if(dbUser!=null) throw new InternalAuthenticationServiceException("User Already Exist with email");

        User newUser=new User();
        newUser.setEmail(user.getEmail());
        newUser.setFullName(user.getFullName());
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));
        User savedUser=userRepo.save(newUser);

        Authentication authentication=new UsernamePasswordAuthenticationToken(user.getEmail(),user.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt= JwtUtils.generateToken(authentication);

        AuthResponse res=new AuthResponse("Signup successfully!",jwt);

        return new ResponseEntity<>(res,HttpStatus.CREATED);
    }

    public ResponseEntity<AuthResponse> loginUser(LoginReq loginReq) {
        String username=loginReq.getEmail();
        String password=loginReq.getPassword();

        Authentication authentication= authenticate(username,password);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = JwtUtils.generateToken(authentication);

        AuthResponse res=new AuthResponse("Login success!",jwt);

        return new ResponseEntity<>(res,HttpStatus.OK);
    }

    private Authentication authenticate(String username, String password) {
        UserDetails userDetails=customUserDetails.loadUserByUsername(username);
        if(userDetails==null) throw new UsernameNotFoundException("Invalid Username");

        if(!passwordEncoder.matches(password,userDetails.getPassword()))
            throw new BadCredentialsException("Wrong Password");

        return new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
    }

}
