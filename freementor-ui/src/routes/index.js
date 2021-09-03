import React from "react";
import { Switch,Route } from "react-router-dom";
import Abouts from "../views/about";
import Contacts from "../views/contact";
import Home from "../views/home";
import Signup from "../views/signup";
import Page from "../views/page";

const Index= ()=>{

    return(

        <Switch>
            <Route component={Page} path={["/page", "/"]}/>
            <Route component={Signup} path="/signup"/>  
        <Route component={Contacts} path="/contact"/> 
         <Route component={Abouts} path="/about"/>  
         <Route component={Home} path={["/home"]}/>

        </Switch>
    )
}

export default Index;