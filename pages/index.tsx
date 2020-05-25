import { NextPage } from 'next';
import Link from 'next/link';
// import styled from 'styled-components'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `


const IndexPage: NextPage = () => {
  const name: string = 'Maxwell';

  return(
    <>
      <h1>Welcome <span className="text-teal-600">{ name }</span></h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </>
  )
};

export default IndexPage;