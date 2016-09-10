package io.holzman.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by jared on 9/10/16.
 */

@Controller
public class WebViewController {
    @RequestMapping(method = RequestMethod.GET, value = "/web")
    public String index(){
        ModelAndView modelAndView = new ModelAndView("index");
        return "index";
    }
}
