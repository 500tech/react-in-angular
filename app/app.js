'use strict';

import React, { Component } from 'react';

angular.module('app', [])

  .service('PicsService', function ($interval) {
    this.data = { counter: 0 };

    $interval(
      () => { this.data.counter += 1 },
      Math.random() * 200 + 50
    );
  })

  .factory('Pic', ($rootScope, PicsService) => {
    return class Pic extends Component {
      render() {
        return (<h2>ReactJS is here! { this.props.counter }</h2>);
      }
    }
  })

  .directive('reactRender', ($injector) => {
    return {
      template: '<div></div>',
      link: (scope, element, attrs) => {
        const inside = element[0];
        const Component = $injector.get(attrs.reactRender);
        const render = (counter) => React.render(<Component counter={ counter } />, inside);

        scope.$watch(attrs.counter, render);
      }
    }
  })

  .directive('pic', (PicsService) => {
    return {
      controller($scope) {
        $scope.data = PicsService.data;
      },

      template: `
        <div>
          <h2>AngularJS is here! {{ data.counter }}</h2>
          <div class="inside" react-render="Pic" counter="data.counter">Inside</div>
        </div>
      `
    };
  });

const app1 = document.getElementById('app1');
const app2 = document.getElementById('app2');
const app3 = document.getElementById('app3');

angular.bootstrap(app1, ['app']);
angular.bootstrap(app2, ['app']);


