import App from 'next/app'
import Layout from '../components/layout'
import MyContext from '../lib/my-context'
import { Button } from 'antd'

import 'antd/dist/antd.css'

class MyApp extends App {
  state = {
    context: 'value'
  }
  static async getInitialProps ({ Component, ctx }) {
    let pageProps
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {
      pageProps
    }
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <MyContext.Provider value={ this.state.context } >
          <Component { ...pageProps } />
          <Button onClick={() => this.setState({context: this.state.context + '111'})}>update context</Button>
        </MyContext.Provider>
      </Layout>
    )
  }
}

export default MyApp