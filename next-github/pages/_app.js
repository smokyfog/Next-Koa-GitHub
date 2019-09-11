import App from 'next/app'
import Layout from '../components/layout'
import MyContext from '../lib/my-context'
// import { Button } from 'antd'
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
      <Layout>
        <Provider store={ reduxStore }>
          <MyContext.Provider value={ this.state.context } >
            <Component { ...pageProps } />
            {/* <Button onClick={() => this.setState({context: this.state.context + '111'})}>update context</Button> */}
          </MyContext.Provider>
        </Provider>
      </Layout>
    )
  }
}

export default testHoc(MyApp)