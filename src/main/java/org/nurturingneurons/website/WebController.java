package org.nurturingneurons.website;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebController {

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/about-us")
    public String aboutUs() {
        return "about-us";
    }

    @GetMapping("/events")
    public String events() {
        return "events";
    }

    @GetMapping("/events/neuroart")
    public String neuroart() {
        return "neuroart";
    }

    @GetMapping("/events/silent-auction")
    public String silentAuction() {
        return "silent-auction";
    }

    @GetMapping("/events/webinars")
    public String webinars() {
        return "webinars";
    }

    @GetMapping("/neuromuscular-conditions/cmt")
    public String cmt() {
        return "cmt";
    }

    @GetMapping("/neuromuscular-conditions/dmd")
    public String dmd() {
        return "dmd";
    }

    @GetMapping("/neuromuscular-conditions/fa")
    public String fa() {
        return "fa";
    }

    @GetMapping("/contact-us")
    public String contactUs() {
        return "contact-us";
    }
}
