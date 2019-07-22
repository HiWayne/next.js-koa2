import Link from 'next/link';

const Index = () => (
  <div>
    <h1>Hello World</h1>
    <ul>
      <li>
        <Link href="/about/">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/content/">
          <a>Content</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Index;
