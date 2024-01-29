export const Feedback = ({ feedback, totalCount, positivePercent }) => {
    return (
        <div>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total: {totalCount}</p>
            <p>Positive: {positivePercent}%</p>
        </div>
    )
}