<?php
/**
 *
 * @author th3m4d0n3
 */
namespace Slangular\Templates;

abstract class TemplateInterface {
    
    public $header_cache;
    public $footer_cache;
    public $title;
    public $format;
    
    public function __construct(){
        $this->header_cache = $this->render_header();
        $this->footer_cache = $this->render_footer();
    }
    
    public function render_header(){
        ob_start();
        require_once "header.php";
        return ob_get_clean();
    }
    
    public function render_footer(){
        ob_start();
        require_once "footer.php";
        return ob_get_clean();
    }
}

?>
