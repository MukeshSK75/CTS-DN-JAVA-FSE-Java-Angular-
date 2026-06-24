package com.example.TTD_And_Logging_Framework;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    private static final Logger logger =
            LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {

        logger.error("Unable to connect to the database");

        logger.warn("Application is running with limited resources");
    }
}