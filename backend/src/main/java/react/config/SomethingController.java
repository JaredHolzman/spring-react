package react.config;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.LinkedList;
import java.util.List;

/**
 * Created by jared on 10/7/16.
 */

@Controller
@RequestMapping("/api")
public class SomethingController {
    @RequestMapping(method = RequestMethod.GET, value = "yolo")
    HttpEntity<List<Integer>> thingy(){
        List<Integer> lst = new LinkedList<>();
        lst.add(99);
        lst.add(100);
        lst.add(101);
        return new ResponseEntity<>(lst, HttpStatus.OK);
    }
}
