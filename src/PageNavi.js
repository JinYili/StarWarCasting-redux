import React from "react";

function PageNavi(props) {
  const { currentPage, onClickButton } = props;
  console.log(currentPage);
  let pages = [];
  for (let i = 1; i < 10; i++) {
    pages[i - 1] = (
      <a
        className={
          i === currentPage ? "font-weight-bold text-warning" : "cursorPointer"
        }
        onClick={
          i === currentPage
            ? null
            : () =>
                onClickButton(
                  `https://swapi.co/api/people/?format=json&page=${i}`
                )
        }
        key={`pagenumber${i}`}
      >
        {" "}
        {i}
      </a>
    );
  }

  return <span> {pages}</span>;
}

export default PageNavi;
