package pl.coderlab.restclient;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class RestclientApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(RestclientApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(RestclientApplication.class, args);
    }

}

//extends SpringBootServletInitializer - added
//override method added
