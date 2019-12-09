package com.talkyoung.simpro.service;

import com.talkyoung.simpro.entity.User;
import org.springframework.stereotype.Service;

import javax.xml.ws.ServiceMode;

public interface LoginService {
    User findUserByName(String username);
}
