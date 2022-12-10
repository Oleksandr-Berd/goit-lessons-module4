import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Posts } from './Posts/Posts';
import './App.css';
import { Parination } from './Pagination/Pagination';
import { Container } from './Container/Container';

export const App = () => {
  return (
    <div className="App">
      <div className="content">
        <Loader />
        <Header />
        <Hero />
        <Container>
          <Parination />
        </Container>
        <Posts />
      </div>
      <Footer />
    </div>
  );
};

const Loader = ({ progress = 0.5 }) => {
  return (
    <div style={{ width: progress * 100 + '%' }} className="progress">
      Progress: {progress}
    </div>
  );
};
