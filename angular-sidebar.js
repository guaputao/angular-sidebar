angular.module('angular-sidebar', [])
  .directive('sidebar', [function () {
    return {
      restrict: 'C',
      controller: ['$scope', function ($scope) {
        var hide_class = 'sidebar-hide';
        var center_size = 8;

        function toogle (_sidebar) {
          if (_sidebar.length) {
            var old_center_size = center_size;
            center_size += (_sidebar.hasClass(hide_class) ? -2 : 2);
            _sidebar.toggleClass(hide_class);
            $scope.center_sidebar.addClass('col-xs-'+center_size);
            $scope.center_sidebar.removeClass('col-xs-'+old_center_size);
          }
        }

        $scope.toggle_left_sidebar = function () {
          toogle($scope.left_sidebar);
        };

        $scope.toggle_right_sidebar = function () {
          toogle($scope.right_sidebar);
        };
      }],
      link: function (scope, iElement, iAttrs) {
        iElement.addClass('row');
        scope.center_sidebar = angular.element('.sidebar-center');
        scope.left_sidebar = angular.element('.sidebar-left');
        scope.right_sidebar = angular.element('.sidebar-right');
        scope.left_sidebar.addClass('col-xs-2');
        scope.right_sidebar.addClass('col-xs-2');
        scope.center_sidebar.addClass('col-xs-8');
      }
    };
  }]);