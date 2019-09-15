import React from "react";

function Buttons(props) {
  const { getPerviousUrl, getNextUrl, listLength, pageHandler } = props;

  const onClickButton = url => {
    //console.log(url);pageHandler
    pageHandler(url);
  };

  const buttonsPrev =
    getPerviousUrl !== null ? (
      <button
        className="btn-primary px-md-5 mr-5 btn-lg "
        onClick={() => onClickButton(getPerviousUrl)}
      >
        previous
      </button>
    ) : (
      ""
    );

  const buttonsNext =
    getNextUrl !== null ? (
      <button
        className="btn-primary px-md-5 mr-5 btn-lg "
        onClick={() => onClickButton(getNextUrl)}
      >
        {listLength === 0 ? "Load" : "Next"}{" "}
      </button>
    ) : (
      ""
    );

  return (
    <div>
      {buttonsPrev} {buttonsNext}{" "}
    </div>
  );
}

export default Buttons;
