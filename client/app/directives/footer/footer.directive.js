'use strict';

angular.module('carsApp').directive("footerDir", function () {

    return {
        // A: como atributo
        // C: como clase
        // M: como comentario
        // E: como etiqueta
        restrict: 'EA',
        templateUrl: 'app/directives/footer/footer.template.html',
        scope: {

        },
        link: function (scope, element) {}
    };

});
