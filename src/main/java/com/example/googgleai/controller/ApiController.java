package com.example.googgleai.controller;

import com.example.googgleai.service.ApisService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.Map;


@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ApiController {
    private static final Logger log = LoggerFactory.getLogger(ApiController.class);

    @Autowired
    private ApisService serviceApi;

    @PostMapping("/analiza")
    public ResponseEntity<Map<String,Object>> gemini(@RequestBody String url){
        return ResponseEntity.ok(serviceApi.analizaURL(url));
    }
    @PostMapping("/consulta")
    public ResponseEntity<Map<String,Object>> checkUrl(@RequestBody String url) {
       return ResponseEntity.ok(serviceApi.safeBrowsing(url));
    }
}
