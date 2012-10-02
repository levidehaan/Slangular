<?php

function home_render($data){
    echo $data->header_cache;
    
    //using heredoc for this, but really you can put it into a variable, or include another file, however you want to generate your templates.
echo <<<HTML
        <headerNav> { "title" : "$data->title"} </headernav>
        <pageHeader> { "text" : "Slangular", "subtext" : "a framework built on SlimPHP and Angular.js" } </pageHeader>
HTML;
    
    for($i=0;$i<10;$i++){
        echo '<task> { "title" : "funkity funky funk", "details" : "cheese cheesy chez choose chives choy"} </task>';
    }
    echo $data->footer_cache;
}