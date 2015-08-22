'use strict';

import React, { Component } from 'react';

angular.module('app', [])
  .directive('pic', () => {
    return {
      template: `
        <div>
          <h2>AngularJS is here!</h2>
          <div class="inside">Inside</div>
        </div>
      `
    };
  });

class Pic extends Component {
  render() {
    return (<h2>ReactJS is here!</h2>);
  }
}

const app1 = document.getElementById('app1');
const app2 = document.getElementById('app2');
const app3 = document.getElementById('app3');

angular.bootstrap(app1, ['app']);
angular.bootstrap(app2, ['app']);

const inside = document.getElementsByClassName('inside')[0];
React.render(<Pic />, inside);
