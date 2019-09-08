

import Document,  { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

function withLog(Comp) {
  return (props) => {
    console.log(props)
    return <Comp {...props} />
  } 
}

class MyDocument extends Document {

  static async getInitialProps(ctx) { // 若要使用它需要先继承Document里面封装的getInitialProps
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => (props) => sheet.collectStyles(<App {...props} />) // _app里面返回的MyApp
        // enhanceComponent: Component => withLog(Component)  // 每个页面对应的js文件
      })
      const props = await Document.getInitialProps(ctx)
      return {
        ...props,
        styles: <>{ props.styles }{ sheet.getStyleElement() }</>
      }
    } finally {
      sheet.seal
    }
    
  }

  render() {
    return <Html>
      <Head>
        {/* <title>MyApp</title>  不建议 */}
        {/* <style>{`.test { color: red }`}</style> */}
      </Head>
      <body className="test">
        <Main />
        <NextScript />
      </body>
    </Html>
  }
}

export default MyDocument