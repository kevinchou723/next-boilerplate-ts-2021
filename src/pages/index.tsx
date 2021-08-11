import styled from 'styled-components';

import { Head } from '../components/head';

const Container = styled.div``;

export default function Home() {
  return (
    <>
      <Head
        title="HOME"
        description="Home page of boilerplate"
        image="cat.jpg"
        url="google.com"
        siteName="mysite.com"
      />
      <Container>This is container</Container>
    </>
  );
}
