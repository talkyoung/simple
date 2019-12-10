package com.talkyoung.simpro.controller;

import com.talkyoung.simpro.common.resultEntity.Result;
import com.talkyoung.simpro.common.resultEntity.ResultFactory;
import com.talkyoung.simpro.entity.User;
import com.talkyoung.simpro.service.LoginService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class LoginController {

    @Autowired
    LoginService loginService;

    @RequestMapping(value = "/login",method = RequestMethod.POST)
    public Result login(@RequestParam String username, @RequestParam String password){
        User user = loginService.findUserByName(username);
        boolean notEmpty = StringUtils.isNotEmpty(user.getPassword());
        if(notEmpty && user.getPassword().equals(password)){
            return ResultFactory.buildSuccessResult(null);
        }
        return ResultFactory.buildFailResult("登录失败");
    }

    @RequestMapping(value = "/hello",method = RequestMethod.GET)
    public String hello(){
        System.out.println("hello");
        return "hello";
    }
}
