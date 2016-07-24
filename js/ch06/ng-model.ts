import { Component, Input, OnInit } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic'

@Component({
  selector: 'ng-app',
  template: `
    
  `
  // <div name="MyForm" role="form">
  //   <!-- <input ng-model="input" numeric ng-keypress="foobar()"> -->
  //   <div class="alert alert-success" ng-hide="MyForm.$dirty"><b>Want to Join a Dream Company?</a></div>
  //   <div class="alert alert-info" ng-hide="MyForm.$pristine"><b>Focus on your strengths to attract more recruiters!</a></div>

  //   <div class="form-group" ng-class="{'has-error': MyForm.email.$invalid}">
  //     <label class="control-label" for="email">Email address</label>
  //     <input type="email" name="email" class="form-control" placeholder="Enter email" ng-model="email" is-unique>
  //   </div>
  //   <div class="form-group">
  //     <label class="control-label">Willing to Relocate?</label>
  //     <input type="checkbox" name="relocate" ng-model="relocate" will-relocate> {{MyForm.relocate.$viewValue}}
  //   </div>

  //   <button type="submit" class="btn btn-primary" ng-click="email = '';relocate = false;MyForm.$setPristine();">Apply</button>
  // </div>
})
export class MyApp {

}

bootstrap(MyApp);
// var App = angular.module('ngModelApp', []);

// // EXPERIMENTAL!
// // 
// // App.run(function($rootScope) {
// //   $rootScope.foobar = function() {
// //     console.log($rootScope.MyForm);
// //   }
// // });
// // App.directive('numeric', function() {
// //   return {
// //     restrict: 'A',
// //     require: 'ngModel',
// //     link: function(scope, element, attrs, ngModelCtrl) {
// //       ngModelCtrl.$parsers.push(function(viewValue) {
// //         var modelValue = viewValue && viewValue.replace(/[a-zA-Z]/ig, '');

// //         if (modelValue !== viewValue) {
// //           ngModelCtrl.$setViewValue(modelValue);
// //           ngModelCtrl.$render();
// //         }

// //         return modelValue;
// //       });
// //     }
// //   };
// // });

// App.directive('isUnique', function() {
//   return {
//     restrict: 'A',
//     require: 'ngModel',
//     link: function(scope, element, attrs, ngModelCtrl) {console.log(ngModelCtrl);
//       ngModelCtrl.$setValidity('uniqueEmail', true);

//       ngModelCtrl.$parsers.push(function(viewValue) {
//         ngModelCtrl.$setValidity('uniqueEmail', !(viewValue === 'foo@bar.com'));

//         return viewValue;
//       });

//       ngModelCtrl.$formatters.push(function(modelValue) {
//         ngModelCtrl.$setValidity('uniqueEmail', true);

//         return modelValue;
//       });
//     }
//   };
// });

// App.directive('willRelocate', function() {
//   return {
//     restrict: 'A',
//     require: 'ngModel',
//     priority: 1,
//     link: function(scope, element, attrs, ngModelCtrl) {
//       ngModelCtrl.$render = function() {
//         ngModelCtrl.$modelValue = ngModelCtrl.$modelValue || false;
//         ngModelCtrl.$viewValue  = ngModelCtrl.$modelValue ? 'Yippi..!' : 'Nope, not ready!';
//       };

//       ngModelCtrl.$formatters.push(function(modelValue) {
//         var viewValue = (modelValue || ( !angular.isDefined(modelValue) && element.prop('checked') )) ? 'Yippi..!' : 'Nope, not ready!';
//         ngModelCtrl.$modelValue = viewValue === 'Yippi..!';

//         element.prop('checked', ngModelCtrl.$modelValue);
        
//         return viewValue;
//       });

//       ngModelCtrl.$parsers.push(function(viewValue) {
//         var modelValue = viewValue;
//         ngModelCtrl.$viewValue = modelValue ? 'Yippi..!' : 'Nope, not ready!';

//         return modelValue;
//       });
//     }
//   };
// });