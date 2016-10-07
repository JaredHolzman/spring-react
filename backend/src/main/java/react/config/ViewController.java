package react.config;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by jared on 10/7/16.
 */

@Controller
public class ViewController {
    @RequestMapping(method = RequestMethod.GET, value = "/web/**")
    String view(){
        return "index";
    }
}
