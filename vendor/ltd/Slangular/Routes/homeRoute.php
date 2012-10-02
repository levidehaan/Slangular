<?php
/**
 * Description of homeRoute
 *
 * @author th3m4d0n3
 */
namespace Slangular\Routes;

class homeRoute {
    
    public function load_homeRoute() {
        $lr_temp = $this;
        
        $this->router->get('/', function () use ($lr_temp) {
            echo $lr_temp->templates->render_template("home");
        });
        
        $this->router->get('/:format', function ($format) use ($lr_temp) {
            echo $lr_temp->templates->render_template("home", $format);
        });
    }
    
}

?>
