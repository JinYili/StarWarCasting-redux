import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getCastingList, getNextUrl, getPerviousUrl } from "./action";

function App() {
  const list = useSelector(state => state.list);
  const nextUrl = useSelector(state => state.nextUrl);
  const previousUrl = useSelector(state => state.previousUrl);

  const dispatch = useDispatch();
  //getList(nextUrl);
  function getList(url) {
    const request = fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    request
      .then(response => response.json())
      .then(data => {
        const { next, previous, results } = data;

        getNextUrl.payload = next;
        dispatch(getNextUrl);

        getPerviousUrl.payload = previous;
        dispatch(getPerviousUrl);

        getCastingList.payload = results;
        dispatch(getCastingList);
      });
    return;
  }
  const headerStyle = {
    margin: "40px",
    border: "5px solid pink",
    color: "green"
  };
  const listStyleType = {
    listStyleType: "none",
    margin: "10",
    width: "97%"
  };

  return (
    <div className="App">
      <div>
        <h1 style={headerStyle}>STAR WAR CASTING by Redux</h1>
        {list !== undefined ? (
          <ul style={listStyleType}>
            {list.map(({ name, height, mass, birth_year }) => (
              <li
                className="border border-success rounded"
                key={name + birth_year}
              >
                <p>
                  {`${name} is ${height}cm ${mass}KG birth at ${birth_year} year `}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
        {previousUrl !== null ? (
          <button
            className="btn-primary px-md-5 mr-3 btn-lg "
            onClick={() => getList(previousUrl)}
          >
            previous
          </button>
        ) : (
          ""
        )}
        {nextUrl !== null ? (
          <button
            className="btn-primary px-md-5 btn-lg "
            onClick={() => getList(nextUrl)}
          >
            {" "}
            {list.length === 0 ? "Load" : "Next"}{" "}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default App;
