slangular.directive('task', function () {
    var editTemplate = ''+
    '<div class="thumbnail span6">'+
    '<img src="http://placehold.it/300x200" alt="">'+
    '<div class="caption">'+
    '<h3>{{task.title}}</h3>'+
    '<p>{{task.details}}</p>'+
    '<p><a href="#" class="btn btn-primary">Edit Task</a> <a href="#" class="btn">View Task</a></p>'+
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
                    scope.task = sizedInput;
                }
            }
        }

    }
});
