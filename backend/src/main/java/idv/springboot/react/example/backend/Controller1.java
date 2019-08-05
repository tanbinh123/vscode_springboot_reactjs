package idv.springboot.react.example.backend;

import java.util.Date;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller1 {

    @RequestMapping("/api/getdatetime")
    public String getDateTime() {
        return "Now is "+(new Date());
    }
}