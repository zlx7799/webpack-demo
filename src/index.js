/*
 * @Description: 
 * @Author: zhoulx
 * @Date: 2022-11-25 14:25:03
 * @LastEditors: zhoulx
 * @LastEditTime: 2022-11-25 15:18:09
 */
import { join } from 'lodash';
function component () {
  const element = document.createElement('div');
  
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());