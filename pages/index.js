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
      <li>Content</li>
    </ul>
  </div>
);

export default Index;
