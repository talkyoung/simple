package com.talkyoung.simpro;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.talkyoung.simpro.dao")
public class SimProApplication {

    public static void main(String[] args) {
        SpringApplication.run(SimProApplication.class, args);
    }

}
