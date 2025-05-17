package com.example.googgleai.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/proyecto")
public class WebController {
    @GetMapping("/inicio")
    public String inicio(){
        return "redirect:/webPh/index.html";
    }
}
