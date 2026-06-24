package com.example.TTD_And_Logging_Framework;

public class MyServ {

    private final ExApi api;

    public MyServ(ExApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}