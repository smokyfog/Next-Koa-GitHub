import App from 'next/app'
import Layout from '../components/layout'
import { Provider } from 'react-redux'
import store from '../store/store'
import testHoc from '../lib/with-redux'
 
import 'antd/dist/antd.css'

class MyApp extends App {
  state = {
    context: 'value'
  }
  static async getInitialProps (ctx) {
    const { Component } = ctx 
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {
      pageProps
    }
  }
  render() {
    const { Component, pageProps,reduxStore } = this.props
    return (
      <Provider store={ reduxStore }>
        <Layout>
          <Component { ...pageProps } />
        </Layout>
      </Provider>
    )
  }
}

export default testHoc(MyApp)