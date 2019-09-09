
import { Button } from 'antd'
import Link from 'next/link'

export default ({ children }) => (
  <div>
    <header>
      <Link href='/test/bbb?id=1' as="/test/bbb/1">
        <Button>index1</Button>
      </Link>
      <Link href='/test/ccc?id=2' as="/test/ccc/2">
        <Button>index2</Button>
      </Link>
      <Link href='/test/b' as="/test/b">
        <Button>index2</Button>
      </Link>
    </header>
    { children }
  </div>
)