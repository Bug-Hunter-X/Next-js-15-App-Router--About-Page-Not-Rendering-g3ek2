```javascript
// app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// app/about/page.js
export default function About(){
    return(
        <h1>About page</h1>
    );
}
```