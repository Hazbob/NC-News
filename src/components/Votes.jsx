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
        style={{ background: btnColour }}
        className={"vote-button"}
        onClick={changeVotes}
        disabled={disabled}
      >
        +
      </button>
      <h1>Votes: {currentVote}</h1>
      <button
        style={{ background: btnColour }}
        data-inc={"+"}
        className={"vote-button"}
        onClick={changeVotes}
        disabled={disabled}
      >
        -
      </button>
    </span>
  );
}

export default Votes;
