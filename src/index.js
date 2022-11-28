/*
 * @Description: 
 * @Author: zhoulx
 * @Date: 2022-11-25 14:25:03
 * @LastEditors: zhoulx
 * @LastEditTime: 2022-11-28 13:51:51
 */
import { join } from 'lodash';
import './style.css';
function component () {
  const element = document.createElement('div');
  
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());