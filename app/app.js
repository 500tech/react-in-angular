'use strict';

import React, { Component } from 'react';

angular.module('app', [])
  .directive('pic', () => {
    return {
      template: `<h2>AngularJS is here!</h2>`
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
