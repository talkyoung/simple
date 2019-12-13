package com.talkyoung.simpojo.combinationEntity;

import com.talkyoung.simpojo.entity.UserPermission;

import java.util.List;

/**
 * 由于菜单拥有子菜单，所以创建该组合类用于保存父菜单下的子菜单
 */
public class UserPermissionCombination extends UserPermission {
    private List<UserPermissionCombination> childern;

    public List<UserPermissionCombination> getChildern() {
        return childern;
    }

    public void setChildern(List<UserPermissionCombination> childern) {
        this.childern = childern;
    }
}
