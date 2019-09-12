import 
  React, 
  { 
    useState, 
    useReducer, 
    useEffect, 
    useLayoutEffect,
    useContext, 
    useRef
  } from 'react'

import MyContext from '../../lib/my-context'

class MyCount extends React.Component {
  constructor() {
    super()
    this.ref = React.createRef()
  }
  state = {
    count: 0
  }
  componentDidMount() {
    this.refs.current
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }
  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }
  render () {
    return <span ref={this.ref}>{ this.state.count }</span>
  }
}

function countReducer(state, action) {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'minus':
      return state - 1
    default:
      return state
  }
}

function MyCountFunc() {
  // const [ count, setCount ] = useState(0) // [a, b]

  const [ count, dispatchCount ] = useReducer(countReducer, 0)
  const [ name, setName ] = useState('jock')
  const context = useContext(MyContext)
  const inputRef = useRef()
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // setCount用法
  //     // setCount(1)
  //     // setCount((c) => c + 1 )
  //     // setCount(c => c + 1)
  //     dispatchCount({ type: 'add' })
  //   }, 1000)
  //   return () => clearInterval(interval)
  // }, [])

  // 会在更新dom节点树且被挂载到页面上之后执行
  useEffect(() => {
    console.log(inputRef)
    return () => console.log('effect deteched') // 先执行
  }, [count])  // 只有数组中的状态发生变化时才会先卸载return的值，在重新执行上面的部分， 若传入这个数组，则每次发生状态的变更都会执行卸载然后执行上面的内容

  // 会在更新dom节点树而没有被挂载到页面上之前执行
  useLayoutEffect(() => {
    console.log('layout effect invoked') // 后执行
    return () => console.log('layout effect deteched') // 先执行
  }, [count])

  return (
    <div>
      <input ref={ inputRef } value={ name } onChange={(e) => setName(e.target.value)} />
      <button onClick={() => dispatchCount({type: 'add'})}>{ count }</button>
      <p >{ context }</p>
    </div>
  )
}

export default MyCountFunc