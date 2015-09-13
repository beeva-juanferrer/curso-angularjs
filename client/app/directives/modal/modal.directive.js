'use strict';

angular.module('carsApp').directive("modalDir", function () {

    return {
        // A: como atributo
        // C: como clase
        // M: como comentario
        // E: como etiqueta
        restrict: 'EA',
        templateUrl: 'app/directives/modal/modal.template.html',
        scope: {
          show: '=',
          sendValue: '=',
          successValue: '=',
          errorValue: '=',
          close: '&'
        },
        link: function (scope, element) {}
    };

});
