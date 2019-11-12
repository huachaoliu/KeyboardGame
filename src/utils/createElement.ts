interface IElementProps {
  id?: string
  class?: string
  style?: string
}

/**
 * create element by nodeName
 * @param nodeName 标签
 * @param props 属性
 * @param children 子节点
 * @return HTMLElement
 */
export function h(nodeName: string, props?: any, children?: any): HTMLElement {
  let dom = document.createElement(nodeName)
  
  for (let p in props) {
    dom.setAttribute(p, props[p])
  }

  const type = Object.prototype.toString.call(children).slice(8, -1)
  switch (type) {
    case 'String':
      dom.textContent = children
      break
    case 'Array':
      children.forEach((element: HTMLElement) => {
        dom.appendChild(element)
      });
      break
    default:
      if (/^html/ig.test(type)) {
        dom.appendChild(children)
      } else {
        console.warn('Invalid children')
      }
  }

  return dom
}