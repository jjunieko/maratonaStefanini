(function (angular) {
    "use strict";

    // MODULO
    angular.module('listaTarefasApp', []);

   /*  angular.module('listaTarefasApp') 
        .filter('capitalize', function () {
            return function(input) { return input.charAt(0).toUpperCase() + input.substring(1);}}) */
    // CONTROLLER
    angular.module('listaTarefasApp')
        .controller('ListaTarefasController', listaTarefasController);

    listaTarefasController.$inject = ['$rootScope', /*'$filter'*/];

    function listaTarefasController() {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */
        vm.logado = false;
        vm.validar = false;
        vm.register = false;

      /*   $rootScope.listaMensagens = [ 
            {id: 1, text: 'Mensagem', tipo:'danger'},
            {id: 2, text: 'Mensagem', tipo:'success'}
        ] */

        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */
  /*    root.listaMensagens = [{ text: 'TESTE MENSAGEM', tipo: 'success'}];
     vm.teste2 = $filter('limitTo')(vm.teste, 4);
      */
     
        /*    vm.funcao = funcao;

        function funcao(params) {
            internas()
        } */

        /* ***************    FUNÇÕES INSTERNAS    ******************************** */
     /*    function internas(params) {

        } */
    }

})(angular);
