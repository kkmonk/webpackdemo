import _ from 'lodash';
import './style.css';
import Icon from './icon.png'

import printMe from './print.js'

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  //btn
  btn = innerHTML = 'click me and check the console';
  btn.onclick = printMe;
  //add btn
  element.appendChild(btn);

  //add the image
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
