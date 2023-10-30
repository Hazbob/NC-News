import { useState } from "react";
import { handleVotesChange } from "../api.jsx";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

function Votes({ votes, articleId }) {
  const [currentVote, setCurrentVote] = useState(votes);
  const [disabled, setDisabled] = useState(false);
  const [btnColour, setBtnColour] = useState("red");

  const changeVotes = (e) => {
    setBtnColour("grey");
    handleVotesChange(
      currentVote,
      setCurrentVote,
      setDisabled,
      articleId,
      e.target.innerText,
    );
  };

  return (
    <span className={"votes-container"}>
      <button
        className={"vote-button"}
        onClick={changeVotes}
        disabled={disabled}
      >
        <BsFillArrowDownCircleFill
          style={{ color: `${btnColour}` }}
          size={50}
        />
      </button>
      <h1>Votes: {currentVote}</h1>
      <button
        className={"vote-button"}
        onClick={changeVotes}
        disabled={disabled}
      >
        <BsFillArrowUpCircleFill size={50} style={{ color: `${btnColour}` }} />
      </button>
    </span>
  );
}

export default Votes;
