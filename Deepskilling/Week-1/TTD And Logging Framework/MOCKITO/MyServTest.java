package com.example.TTD_And_Logging_Framework;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class MyServTest {

    @Test
    void testMockingAndStubbing() {

        ExApi mockApi = Mockito.mock(ExApi.class);

        when(mockApi.getData())
                .thenReturn("Mock Data");

        MyServ service = new MyServ(mockApi);

        String result = service.fetchData();

        assertEquals("Mock Data", result);
    }

    @Test
    void testVerifyInteraction() {

        ExApi mockApi = Mockito.mock(ExApi.class);

        MyServ service = new MyServ(mockApi);

        service.fetchData();

        verify(mockApi).getData();
    }
}