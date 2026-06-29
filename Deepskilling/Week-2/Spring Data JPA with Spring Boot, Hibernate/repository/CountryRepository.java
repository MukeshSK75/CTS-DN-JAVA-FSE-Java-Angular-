package com.cts.ormlearn.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.cts.ormlearn.model.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {

}