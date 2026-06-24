package com.example.TTD_And_Logging_Framework;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class AssertionTest {

    @Test
    void testAssertions() {

    	int firstNumber = 2;
    	int secondNumber = 3;
    	int sum = firstNumber + secondNumber;

    	assertEquals(5, sum);

        assertTrue(5 > 3);

        assertFalse(5 < 3);

        assertNull(null);

        assertNotNull(new Object());
    }
}