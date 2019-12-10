package com.talkyoung.simpro.serviceImpl;

import com.talkyoung.simpojo.dao.UserMapper;
import com.talkyoung.simpojo.entity.User;
import com.talkyoung.simpojo.entity.UserExample;
import com.talkyoung.simpro.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class LoginServiceImpl implements LoginService {
    @Autowired
    UserMapper userMapper;

    @Override
    public User findUserByName(String username) {
        UserExample userExample = new UserExample();
        UserExample.Criteria criteria = userExample.createCriteria();
        criteria.andUsernameEqualTo(username);
        List<User> users = userMapper.selectByExample(userExample);
        if(users.size() == 0){
            return null;
        }
        return users.get(0);
    }
}
