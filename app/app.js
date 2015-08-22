'use strict';

import React, { Component } from 'react';

angular.module('app', [])

  .factory('Pic', () => {
    return class Pic extends Component {
      render() {
        return (<h2>ReactJS is here!</h2>);
      }
    }
  })

  .directive('reactRender', ($injector) => {
    return {
      template: '<div></div>',
      link: (scope, element, attrs) => {
        const inside = element[0];
        const Component = $injector.get(attrs.reactRender);

        React.render(<Component />, inside);
      }
    }
  })

  .directive('pic', () => {
    return {
      template: `
        <div>
          <h2>AngularJS is here!</h2>
          <div class="inside" react-render="Pic">Inside</div>
        </div>
      `
    };
  });

const app1 = document.getElementById('app1');
const app2 = document.getElementById('app2');
const app3 = document.getElementById('app3');

angular.bootstrap(app1, ['app']);
angular.bootstrap(app2, ['app']);


