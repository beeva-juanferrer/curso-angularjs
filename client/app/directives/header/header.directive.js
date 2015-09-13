'use strict';

angular.module('carsApp').directive("headerDir", function () {

    return {
        // A: como atributo
        // C: como clase
        // M: como comentario
        // E: como etiqueta
        restrict: 'EA',
        templateUrl: 'app/directives/header/header.template.html',
        scope: {
          title:'@'

        },
        link: function (scope, element) {}
    };

});
