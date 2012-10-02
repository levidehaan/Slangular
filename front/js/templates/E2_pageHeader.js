slangular.directive('pageheader', function () {
    var editTemplate = ''+
    '<div class="hero-unit">'+
    '<h1> {{pageheader.text}} </h1>'+
    '<p> {{pageheader.subtext}} </p>'+
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
                    scope.pageheader = sizedInput;
                }
            }
        }

    }
});
