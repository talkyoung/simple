package com.talkyoung.simpro.service;

import com.talkyoung.simpojo.entity.User;

import javax.xml.ws.ServiceMode;

public interface LoginService {
    User findUserByName(String username);
}
