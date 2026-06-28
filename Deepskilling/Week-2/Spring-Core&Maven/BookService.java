package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepo;
    public void setBookRepository(BookRepository bookRepo) {
        this.bookRepo = bookRepo;
    }
    public void displayBookInformation() {
        String book = bookRepo.getBookInformation();
        System.out.println(book);
    }
}