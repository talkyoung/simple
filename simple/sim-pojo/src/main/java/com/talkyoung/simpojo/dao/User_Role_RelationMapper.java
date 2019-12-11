package com.talkyoung.simpojo.dao;

import com.talkyoung.simpojo.entity.User_Role_Relation;
import com.talkyoung.simpojo.entity.User_Role_RelationExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface User_Role_RelationMapper {
    int countByExample(User_Role_RelationExample example);

    int deleteByExample(User_Role_RelationExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(User_Role_Relation record);

    int insertSelective(User_Role_Relation record);

    List<User_Role_Relation> selectByExample(User_Role_RelationExample example);

    User_Role_Relation selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") User_Role_Relation record, @Param("example") User_Role_RelationExample example);

    int updateByExample(@Param("record") User_Role_Relation record, @Param("example") User_Role_RelationExample example);

    int updateByPrimaryKeySelective(User_Role_Relation record);

    int updateByPrimaryKey(User_Role_Relation record);
}