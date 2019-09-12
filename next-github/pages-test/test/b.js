import 
  React, 
  { 
    useState, 
    useReducer, 
    useEffect, 
    useLayoutEffect,
    useContext, 
    useRef,
    memo,
    useMemo,
    useCallback
  } from 'react'

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
  const [ count, dispatchCount ] = useReducer(countReducer, 0)
  const [ name, setName ] = useState('jock')

  const config = useMemo(
    () => ({
      text:  `count is ${count}`,
      color: count > 3 ? 'red' : 'blue',
    }
  ), [count])

  const handleButtonClick = useCallback(
    () =>  dispatchCount({ type: 'add' }), 
    []
  )

  //这里我们也可以用useMemo来记忆方法,实际上useCallback就是useMemo的简化
  // const handleButtonClick = useMemo(
  //   () => () => dispatchCount({ type: 'add' }),
  //   []
  // )
  const handleAlertClick = function () {
    setTimeout(() => {
      alert(count)
    }, 2000)
  }

  return (
    <div>
      <input value={ name } onChange={(e) => setName(e.target.value)} />
      <Child
        config={config}
        onButtonClick={handleButtonClick}
      />
      <button  onClick ={ handleAlertClick }>AlertCount</button>
    </div>
  )
}

const Child = memo(function Child({ onButtonClick, config }) {
   console.log('child render')
   return (
     <button onClick={ onButtonClick } style={{color: config.color}}>
       {config.text}
     </button>
   )
}) 

export default MyCountFunc