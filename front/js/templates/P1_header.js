slangular.directive('headernav', function () {
    var editTemplate = ''+
    '<div class="navbar">'+
    '<div class="navbar-inner">' +
    '<a class="brand" href="#">{{headerNav.title}}</a>' +
    '<ul class="nav">'+
    '<li class="active"><a href="#">Home</a></li>'+
    '<li><a href="#">Link</a></li>'+
    '<li><a href="#">Link</a></li>'+
    '</ul>'+
    '</div>'+
    '</div>';

    return {
        //element scope
        restrict:'E',
        //scope allows multiple instances of the same module
        scope:{},
        //template element passes through here before it is actually rendered as a template
        compile:function (tElement, tAttr, transclude) {

            //grab the json from the element
            var input = $.parseJSON(tElement.text());

            //check the window.screen.width and remove either mobile or desktop from object to pass to the template scope object
            var sizedInput = parseDevice(input);

            //replace the element with the editTemplate template
            tElement.html(editTemplate);

            return {
                //pre render pass the scope to the template
                pre:function (scope, element, attrs) {
                    $(window).on('resize', function () {

                        //sizedInput = parseDevice($.parseJSON(tElement.text()));
                        });
                    scope.headerNav = sizedInput;
                }
            }
        }

    }
});
