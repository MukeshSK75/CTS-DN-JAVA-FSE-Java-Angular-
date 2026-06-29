package com.cts.ormlearn;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import com.cts.ormlearn.model.Country;
import com.cts.ormlearn.service.CountryService;

@SpringBootApplication
public class OrmLearnApplication {
    private static final Logger LOGGER =
            LoggerFactory.getLogger(OrmLearnApplication.class);
    private static CountryService countryService;
    public static void main(String[] args) {
        ApplicationContext context =
                SpringApplication.run(OrmLearnApplication.class, args);
        LOGGER.info("Application Started");
        countryService = context.getBean(CountryService.class);
        displayCountries();
    }
private static void displayCountries() {
        LOGGER.info("Fetching countries from database");
        List<Country> countryList = countryService.getAllCountries();
        LOGGER.info("Countries : {}", countryList);
        LOGGER.info("Process Completed");
    }
}