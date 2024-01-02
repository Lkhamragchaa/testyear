// pages/index.js
import YearProgressBar from '../components/YearProgressBar';

const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', fontFamily:'monospace', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Welcome to My Year Progress Bar App</h1>
      <YearProgressBar />
    </div>
  );
};

export default HomePage;
