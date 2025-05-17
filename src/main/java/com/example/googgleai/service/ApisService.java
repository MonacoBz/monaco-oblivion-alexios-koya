package com.example.googgleai.service;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ApisService {
    @Value("${spring.ai.openai.api-key}")
    private String GEMINI_API_KEY;
    private final ChatClient chatCLient;
    private String BROWSING_API="AIzaSyB0b6zh6W8wJoOFkXjPOYw92-YXq5pMGII";

    public ApisService(ChatClient.Builder chatCLient) {
        this.chatCLient = chatCLient.build();
    }
    public Map<String,Object> analizaURL(String url){
        Map<String,Object>repuesta = new HashMap<>();
        try{
            String mensaje = chatCLient
                    .prompt("¿Por qué esta mal esta url? "+url+" (Respuesta rapida y sencilla porfavor)")
                    .call()
                    .content();
            repuesta.put("Mensaje",mensaje);
            repuesta.put("Correcto",true);
            return repuesta;
        }catch (Exception e){
            repuesta.put("Mensaje","Error al conectar al gemini");
            repuesta.put("Correcto",false);
            return repuesta;
        }
    }
    public Map<String,Object> safeBrowsing(String url){
        Map<String,Object> mapa = new HashMap<>();
        String urlToCheck = url;
        String endpoint = "https://safebrowsing.googleapis.com/v4/threatMatches:find?key=" + BROWSING_API;

        RestTemplate restTemplate = new RestTemplate();

        Map<String, Object> requestBody = Map.of(
                "client", Map.of(
                        "clientId", "mi_Spring",
                        "clientVersion", "1.0"
                ),
                "threatInfo", Map.of(
                        "threatTypes", List.of("MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE", "POTENTIALLY_HARMFUL_APPLICATION"),
                        "platformTypes", List.of("ANY_PLATFORM"),
                        "threatEntryTypes", List.of("URL"),
                        "threatEntries", List.of(
                                Map.of("url", urlToCheck)
                        )
                )
        );

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);

        try {
            ResponseEntity<String> response = restTemplate.postForEntity(endpoint, entity, String.class);
            String responseBody =response.getBody().replaceAll("\n","");
            if (responseBody.equals("{}")) {
                mapa.put("Mensaje","Todo bien ;:D");
                mapa.put("Correcto",true);
                return mapa;
            } else {
                 mapa.put("Mensaje","Se encontro la url en la API de google");
                mapa.put("Correcto",false);
                return mapa;
            }
        } catch (Exception e) {
            mapa.put("Mensaje","Error al trata de establecer conexión en la API de google");
            mapa.put("Correcto",false);
            return mapa;
        }
    }
}
