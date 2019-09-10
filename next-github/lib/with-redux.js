
import React from 'react'
import createSore from '../store/store'
const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

function getOrCreateStore(initialState) {
  if (isServer) {
    return createSore(initialState)
  }

  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = createSore(initialState)
  }
  return window[__NEXT_REDUX_STORE__]
}

export default Comp => {
  class WithReduxApp extends React.Component {
    constructor(props) {
      super(props)
      this.reduxStore = getOrCreateStore(props.initialReduxState)
    }
    render() {
      const { Component, pageProps, ... rest } = this.props
      if(pageProps) {
        pageProps.test = '123'
      }
      return <Comp Component={Component}  pageProps={pageProps} {...rest}  reduxStore={this.reduxStore} />
    }
  }
  WithReduxApp.getInitialProps = async () => {
    let appProps = {}
    if (typeof Comp.getInitialProps === 'function') {
      appProps = await Comp.getInitialProps(ctx)
    }
    const reduxStore = getOrCreateStore()
    return {
      ...appProps,
      initialReduxState = reduxStore.getOrCreateStore
    }
  }
  return WithReduxApp
}