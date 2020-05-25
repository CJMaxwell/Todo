import { NextPage } from 'next';
import Link from 'next/link';


const AboutPage: NextPage = () => {
  return (
    <>
      <h1>About Us</h1>
      <div>Lorem ipsum dolor sit amet.</div>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  )
}


export default AboutPage;