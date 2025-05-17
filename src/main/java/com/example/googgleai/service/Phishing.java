package com.example.googgleai.service;


import com.example.googgleai.domain.Verifica;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class Phishing {
    public Map<String, Object> compruebaURL(String texto, String banco){
        Verifica v =new Verifica();
        return v.url(texto.trim(),banco);
    }
}
