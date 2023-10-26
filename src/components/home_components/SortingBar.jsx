function SortingBar({ setSort }) {
  function sendSort(e) {
    setSort(e.target.innerText.toUpperCase());
  }

  return (
    <ul onClick={sendSort}>
      <li>
        <button>Votes</button>
      </li>
      <li>
        <button>Comments</button>
      </li>
      <li>
        <button>Date</button>
      </li>
      <li>
        <button>ASC</button>
      </li>
      <li>
        <button>DESC</button>
      </li>
    </ul>
  );
}

export default SortingBar;
