<?php

require "vendor/autoload.php";

define('APP_PATH', realpath('.'));

$_paths = array(
    APP_PATH,
    get_include_path()
);

set_include_path(implode(PATH_SEPARATOR, $_paths));

$slang = new Slangular\Slangular();