package com.talkyoung.simpro.serviceImpl;

import com.talkyoung.simpojo.mapper.StudentMapper;
import com.talkyoung.simpojo.entity.Student;
import com.talkyoung.simpro.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    StudentMapper studentMapper;

    @Override
    public List<Student> getAll() {
        return studentMapper.selectByExample(null);
    }
}
