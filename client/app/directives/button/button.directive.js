'use strict';

angular.module('carsApp').directive("buttonDir", function () {

    return {
        // A: como atributo
        // C: como clase
        // M: como comentario
        // E: como etiqueta
        restrict: 'EA',
        templateUrl: 'app/directives/button/button.template.html',
        scope: {
          exec: '&'
        },
        link: function (scope, element) {}
    };

});
