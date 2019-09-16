import { cloneElement } from 'react'	//通过cloneElemet来减少标签的嵌套和保持样式的一致

const style = {
  width: '100%',
  maxWidth: 1200,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 20,
  paddingRight: 20
}

export default ({ children, renderer=<div/> }) => {
  return cloneElement(renderer, {
    style: Object.assign({}, renderer.props.style, style),
    children
  })
  // return <Comp style={ style }>{ children }</Comp>
} 
