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
        <button>Post Date</button>
      </li>
    </ul>
  );
}

export default SortingBar;
