// MobileCounter.js
import React, { useState, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import './mobile-counter.css';

const MobileCounter = () => {
  const [interactions, setInteractions] = useState(0);
  const [transactions, setTransactions] = useState(0);
  const [rating, setRating] = useState(0);
  const [projects, setProjects] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const targetInteractions = 10;
  const targetTransactions = 10;
  const targetRating = 4.5;
  const targetProjects = 500;

  const onVisibilityChange = (isVisible) => {
    setIsCounting(isVisible);
    if (isVisible) {
      setIsAnimated(true);
    }
  };

  useEffect(() => {
    if (isCounting) {
      const interactionInterval = setInterval(() => {
        if (interactions < targetInteractions) {
          setInteractions(interactions + 1);
        }
      }, 100);

      const transactionInterval = setInterval(() => {
        if (transactions < targetTransactions) {
          setTransactions(transactions + 1);
        }
      }, 100);

      const ratingInterval = setInterval(() => {
        if (rating < targetRating) {
          setRating(rating + 0.1);
        }
      }, 100);

      const projectsInterval = setInterval(() => {
        if (projects < targetProjects) {
          setProjects(projects + 10);
        }
      }, 100);

      return () => {
        clearInterval(interactionInterval);
        clearInterval(transactionInterval);
        clearInterval(ratingInterval);
        clearInterval(projectsInterval);
      };
    }
  }, [interactions, transactions, rating, projects, targetInteractions, targetTransactions, targetRating, targetProjects, isCounting]);

  return (
    <VisibilitySensor onChange={onVisibilityChange}>
      <div className="mobile-counter-container">
        <div className="mobile-counter-item">
          <div className={`mobile-counter-number ${isAnimated ? 'animated-counter-number' : ''}`}>
            {interactions >= targetInteractions ? targetInteractions : interactions}+
          </div>
          <div className="mobile-counter-text">Brands</div>
        </div>

        <div className="mobile-counter-item">
          <div className={`mobile-counter-number ${isAnimated ? 'animated-counter-number' : ''}`}>
            {transactions >= targetTransactions ? targetTransactions : transactions}+
          </div>
          <div className="mobile-counter-text">Tools</div>
        </div>

        <div className="mobile-counter-item">
          <div className={`mobile-counter-number ${isAnimated ? 'animated-counter-number' : ''}`}>
            {rating >= targetRating ? targetRating.toFixed(1) : rating.toFixed(1)}/5
          </div>
          <div className="mobile-counter-text">Ratings</div>
        </div>

        <div className="mobile-counter-item">
          <div className={`mobile-counter-number ${isAnimated ? 'animated-counter-number' : ''}`}>
            {projects >= targetProjects ? targetProjects : projects}+
          </div>
          <div className="mobile-counter-text">Projects</div>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default MobileCounter;
