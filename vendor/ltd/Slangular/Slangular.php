<?php

namespace Slangular;
use Slangular\Templates\LoadTemplates as LoadTemplates;
use Slangular\Routes\InitRoutes as InitRoutes;
use Slangular\Model\LoadModels as lm;

class Slangular {
    public $routerInstance;
    public $tempateInstance;
    public $modelInstance;

    public function __construct(){
        $this->routerInstance = new InitRoutes(new LoadTemplates());
        
        $this->routerInstance->loadRoutes();
        
        $this->routerInstance->router->run();
    }
    
   
}

?>
