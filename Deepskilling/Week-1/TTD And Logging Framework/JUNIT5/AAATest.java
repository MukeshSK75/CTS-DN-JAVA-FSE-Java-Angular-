package com.example.TTD_And_Logging_Framework;

import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

public class AAATest {

    private int number;

    @BeforeEach
    void setUp() {
        number = 10;
        System.out.println("Setup executed");
    }

    @AfterEach
    void tearDown() {
        System.out.println("Teardown executed");
    }

    @Test
    void testAddition() {

        int baseMarks = 50;

        int updatedMarks = baseMarks + 10;

        assertEquals(60, updatedMarks);
    }
}