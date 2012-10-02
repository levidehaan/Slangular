
    <!--End Content-->
    <script type="text/javascript" src="/front/js/lib/jquery-1.8.0.min.js"></script>
    <script type="text/javascript" src="/front/js/lib/bootstrap/bootstrap/js/bootstrap.js"></script>
    <script type="text/javascript" src="/front/js/lib/angular.js/build/angular.js"></script>
    <script type="text/javascript" src="/front/js/main.js"></script>
<?php
$di = new RecursiveDirectoryIterator($_SERVER['DOCUMENT_ROOT'] . '/front/js/templates');
foreach (new RecursiveIteratorIterator($di) as $filename => $file) {
    
    if ($file->getFilename() !== "." && $file->getFilename() !== "..") {
        echo '    <script type="text/javascript" src="/front/js/templates/' . $file->getFilename() . '"></script>';
    }
}
?>

    </body>
</html>