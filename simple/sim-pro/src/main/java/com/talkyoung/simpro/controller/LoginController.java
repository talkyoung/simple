package com.talkyoung.simpro.controller;

import com.talkyoung.simcommon.CommonResult;
import com.talkyoung.simpojo.entity.User;
import com.talkyoung.simpro.exception.UserNotFoundException;
import com.talkyoung.simpro.service.LoginService;
import com.talkyoung.simpro.util.JwtTokenUtil;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class LoginController {

    @Autowired
    LoginService loginService;

    @Value("${jwt.tokenHead}")
    private String tokenHead;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @RequestMapping(value = "/login",method = RequestMethod.POST)
    public CommonResult login(@RequestParam String username, @RequestParam String password){
        UserDetails userDetails = loginService.login(username, password);
        if (userDetails == null) {
            throw new UserNotFoundException();
        }
        String token = jwtTokenUtil.generateToken(userDetails);
        Map<String, String> tokenMap = new HashMap<>();
        tokenMap.put("token", token);
        tokenMap.put("tokenHead", tokenHead);
//        tokenMap.put("userId",userDetails.getUmsMember().getId().toString());

        return CommonResult.success(tokenMap);
    }

//    @RequestMapping(value = "/login",method = RequestMethod.POST)
//    public Result login(@RequestParam String username, @RequestParam String password){
//        User user = loginService.findUserByName(username);
//        boolean notEmpty = StringUtils.isNotEmpty(user.getPassword());
//        if(notEmpty && user.getPassword().equals(password)){
//            return ResultFactory.buildSuccessResult(null);
//        }
//        return ResultFactory.buildFailResult("登录失败");
//    }

    @RequestMapping(value = "/hello",method = RequestMethod.GET)
    public String hello(){
        System.out.println("hello");
        return "hello";
    }
}
