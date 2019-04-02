package pl.coderlab.restclient;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class HomeController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/all")
    public String showAll() {
        return "all";
    }

    @GetMapping("/{id}")
    public String findById() {

        return "one";
    }

}
