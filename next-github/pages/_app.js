import App from 'next/app'
import Layout from '../components/layout'
import { Provider } from 'react-redux'
import store from '../store/store'
import testHoc from '../lib/with-redux'
import PageLoading from '../components/PageLoading'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
 
import 'antd/dist/antd.css'

class MyApp extends App {
  state = {
    context: 'value',
    loading: false
  }

  startLoading = () => {
    this.setState({
      loading: true
    })
  }

  stopLoading = () => {
    this.setState({
      loading: false
    })
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', this.startLoading)
    Router.events.on('routeChangeComplete', this.stopLoading)
    Router.events.on('routeChangeError', this.stopLoading)

    axios.get('/github/search/repositories?q=react')
      .then(res => {
        console.log(res)
      })
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.startLoading)
    Router.events.off('routeChangeComplete', this.stopLoading)
    Router.events.off('routeChangeError', this.stopLoading)
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
        { this.state.loading ? <PageLoading />: null }
        <Layout>
          <Link href="/">
            <a>Index</a>
          </Link>
          <Link href="/detail">
            <a>detail</a>
          </Link>
          <Component { ...pageProps } />
        </Layout>
      </Provider>
    )
  }
}

export default testHoc(MyApp)