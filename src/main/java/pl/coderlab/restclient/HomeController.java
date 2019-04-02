package pl.coderlab.restclient;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


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

    @PostMapping("/")
    public String findById(@RequestParam("bookId") Long id, Model model) {

        model.addAttribute("selectedId", id);
        return "one";
    }

}
