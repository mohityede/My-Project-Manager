package org.themohit.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.themohit.repository.UserRepo;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomUserDetails implements UserDetailsService {
    @Autowired
    private UserRepo userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // our created User
        org.themohit.model.User myUser= userRepository.findByEmail(username).get();
        if(myUser==null)
            throw new UsernameNotFoundException("User not found with email "+username);
        List<GrantedAuthority> authorities=new ArrayList<>();
        // spring security User
        return new User(myUser.getEmail(),myUser.getPassword(),authorities);
    }
}
