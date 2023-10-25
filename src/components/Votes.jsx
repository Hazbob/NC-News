import { useState } from "react";
import {handleVotesChange} from "../api.jsx";

function Votes({ votes, articleId }) {
    const [currentVote, setCurrentVote] = useState(votes);
    const [disabled, setDisabled] = useState(false);

    const changeVotes = (e) => {
        handleVotesChange(currentVote, setCurrentVote, setDisabled, articleId, e.target.innerText);
    };

    return (
        <span>
            <button onClick={changeVotes} disabled={disabled}>-</button>
            Votes: {currentVote}
            <button onClick={changeVotes} disabled={disabled}>+</button>
        </span>
    );
}

export default Votes;
