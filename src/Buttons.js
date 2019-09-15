import React from "react";
import PageNavi from "./PageNavi";

function Buttons(props) {
  const { getPerviousUrl, getNextUrl, listLength, pageHandler } = props;
  const currentPage = getCurrentPage(getNextUrl, getPerviousUrl);
  const onClickButton = url => {
    //console.log(url);pageHandler
    pageHandler(url);
  };

  function getCurrentPage(next, previous) {
    if (previous === null) return 1;
    if (next === null) return 9;
    const num = previous.slice(-1);
    return parseInt(num) + 1;
  }

  const buttonsPrev =
    getPerviousUrl !== null ? (
      <button
        className="btn-primary px-md-5 btn-lg float-left"
        onClick={() => onClickButton(getPerviousUrl)}
      >
        previous
      </button>
    ) : (
      ""
    );

  const navi = (
    <PageNavi
      currentPage={currentPage}
      onClickButton={onClickButton}
    ></PageNavi>
  );

  let classString = "btn-primary px-md-5 btn-lg";
  classString += listLength === 0 ? "" : " float-right ";
  const buttonsNext =
    getNextUrl !== null ? (
      <button className={classString} onClick={() => onClickButton(getNextUrl)}>
        {listLength === 0 ? "Load" : "Next"}{" "}
      </button>
    ) : (
      ""
    );

  return (
    <div>
      {buttonsPrev} {listLength === 0 ? "" : navi} {buttonsNext}{" "}
    </div>
  );
}

export default Buttons;
