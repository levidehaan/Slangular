<?php

namespace Slangular\Routes;

class InitRoutes {

    public $router;
    public $templates;

    public function __construct(&$tmplt) {
        $this->templates = $tmplt;

        $this->router = new \Slim\Slim();
        $this->router->config(
                array(
                    'templates.path' => dirname(__DIR__) . '/Templates/'
        ));
        return $this;
    }

    public function loadRoutes() {

        homeRoute::load_homeRoute();
        
    }

}

?>
