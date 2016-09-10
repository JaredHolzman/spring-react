package io.holzman.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by jared on 9/10/16.
 */
public class WebViewController {
    @RequestMapping(method = RequestMethod.GET, value = "/")
    public String index(){
        return "index";
    }
}
