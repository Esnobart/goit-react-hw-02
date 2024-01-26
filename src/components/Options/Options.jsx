export const Options = ({ feedbackClick, resetClick, totalCount }) => {
    return (
        <div>
            <button type="button" onClick={() => feedbackClick("good")}>Good</button>
            <button type="button" onClick={() => feedbackClick("neutral")}>Neutral</button>
            <button type="button" onClick={() => feedbackClick("bad")}>Bad</button>
            {totalCount > 0 && (<button type="button" onClick={resetClick}>Reset</button>)}
      </div>
    )
}