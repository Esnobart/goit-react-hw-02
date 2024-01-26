import css from "./Options.module.css"

export const Options = ({ feedbackClick, resetClick }) => {
    return (
        <div>
            <button type="button" onClick={() => feedbackClick("good")}>Good</button>
            <button type="button" onClick={() => feedbackClick("neutral")}>Neutral</button>
            <button type="button" onClick={() => feedbackClick("bad")}>Bad</button>
            <button type="button" onClick={resetClick}>Reset</button>
      </div>
    )
}