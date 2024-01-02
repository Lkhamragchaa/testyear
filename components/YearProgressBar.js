// components/YearProgressBar.js
import { useEffect, useState } from 'react';

const YearProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const startOfYear = new Date(`${currentYear}-01-01`).getTime();
    const endOfYear = new Date(`${currentYear + 1}-01-01`).getTime();
    const currentTime = new Date().getTime();
    
    const yearProgress = ((currentTime - startOfYear) / (endOfYear - startOfYear)) * 100;
    setProgress(yearProgress);
  }, []);

  return (
    <div className="progress-bar">
      <div className="year-text">{new Date().getFullYear()}</div>
      <div className="progress-text">{progress.toFixed(2)}%</div>
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default YearProgressBar;
