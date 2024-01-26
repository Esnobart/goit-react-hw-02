export const Feedback = ({ feedback, totalCount, positivePercent }) => {
    if (totalCount !== 0) {
        return (
        <div>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total: {totalCount}</p>
            <p>Positive: {positivePercent}%</p>
        </div>
    )}
}