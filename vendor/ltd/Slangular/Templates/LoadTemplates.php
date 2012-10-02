<?php

namespace Slangular\Templates;

class LoadTemplates extends TemplateInterface{
    
    
    public function __construct(){
        parent::__construct();
    }
    
    public function render_template($name, $format = "default"){
        $this->format = $format;
        $this->title = "Slangular"; //this will be grabbed from the db
        require_once $name . '.php';
        call_user_func($name."_render", $this);
    }
    
    //add more custom template renderers here
  
    
}