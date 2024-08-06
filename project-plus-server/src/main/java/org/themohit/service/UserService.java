package org.themohit.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.themohit.exception.UserServiceException;
import org.themohit.model.User;
import org.themohit.repository.UserRepo;
import org.themohit.utils.JwtUtils;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public User getUserProfileByJwt(String jwt) throws Exception{
        String email= JwtUtils.getEmailFromToken(jwt);
        return getUserByEmail(email);
    }

    User getUserByEmail(String email) throws Exception{
        Optional<User> optionalUser=userRepo.findByEmail(email);
        if(optionalUser.isEmpty()) throw new UserServiceException("User not found!");
        return optionalUser.get();
    }

    public User getUserById(long userId){
        Optional<User> optionalUser=userRepo.findById(userId);
        if(optionalUser.isEmpty()) throw new UserServiceException("User not found!");
        return optionalUser.get();
    }

    public User updateUserProjectSize(User user,int number){
        user.setProjectSize(number);
        return userRepo.save(user);
    }
}
