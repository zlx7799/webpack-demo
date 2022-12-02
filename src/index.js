/*
 * @Description: 
 * @Author: zhoulx
 * @Date: 2022-11-25 14:25:03
 * @LastEditors: zhoulx
 * @LastEditTime: 2022-12-02 15:21:07
 */
import { join } from 'lodash';
import './style.css';
import Icon from './icon.png';
function component () {
  const element = document.createElement('div');
  
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // 将图像添加到我们已经存在的div中
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());