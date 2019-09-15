import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getCastingList, getNextUrl, getPerviousUrl } from "./action";
import Buttons from "./Buttons";

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

  return (
    <div className="App">
      <div>
        <h1 className="headerStyle">STAR WAR CASTING by Redux</h1>
        {list !== undefined ? (
          <ul className="listStyleType list-group list-group-flush">
            {list.map(({ name, height, mass, birth_year }) => (
              <li
                className="border border-success rounded list-group-item"
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
        <Buttons
          pageHandler={getList}
          getNextUrl={nextUrl}
          getPerviousUrl={previousUrl}
          listLength={list.length}
        ></Buttons>
      </div>
    </div>
  );
}
export default App;
