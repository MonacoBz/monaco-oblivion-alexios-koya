package com.example.googgleai.controller;

import com.example.googgleai.service.Phishing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/bdc")
@CrossOrigin("*")
public class MapController {
    @Autowired
    private Phishing pService;
    @PostMapping("/busca/{opcion}")
    public ResponseEntity<Map<String,Object>> resultado(@RequestBody String url, @PathVariable String opcion){
        return ResponseEntity.ok(pService.compruebaURL(url,opcion));
    }
}
