import { Description } from '../Description/Description';
import { useState, useEffect } from 'react';
import { Feedback } from '../Feedback/Feedback';
import { Options } from '../Options/Options';

function App() {
  const feedbackData = JSON.parse(localStorage.getItem('feedback')) || { good: 0, neutral: 0, bad: 0 };
  const [feedback, setFeedback] = useState(feedbackData);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const feedbackClick = (option) => {
    setFeedback({ ...feedback, [option]: feedback[option] + 1 });
  };

  const resetClick = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalCount = feedback.good + feedback.neutral + feedback.bad;
  const positivePercent = Math.round(((feedback.good + feedback.neutral) / totalCount) * 100);

  return (
    <div>
      <Description />
      <Options feedbackClick={feedbackClick} resetClick={resetClick} />
      <Feedback feedback={feedback} totalCount={totalCount} positivePercent={positivePercent }/>
    </div>
  );
}

export default App;
