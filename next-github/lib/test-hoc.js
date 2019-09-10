export default Comp => {
  function TestHocComp({ Component, pageProps, ... rest }) {
    // const name = name + '123'

    console.log('Component',Component)
    console.log('PageProps',pageProps)
    if(pageProps) {
      pageProps.test = '123'
    }

    return <Comp Component={Component}  pageProps={pageProps} {...rest} />
  }
  TestHocComp.getInitialProps = Comp.getInitialProps

  return TestHocComp
}





