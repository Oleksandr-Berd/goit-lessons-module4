import { Container } from 'components/Container/Container.jsx';
// import { Heading } from 'components/Heading/Heading';
import * as SC from './Hero.styles.js';

export const Hero = () => {
  return (
    <section>
      <Container>
        <SC.Label>Hello, my name is Vsevolodych!</SC.Label>
        <SC.Title as="h2" level={2}>
          Hello FCK!!!
        </SC.Title>
        <SC.Description>I make websites.</SC.Description>
      </Container>
    </section>
  );
};
