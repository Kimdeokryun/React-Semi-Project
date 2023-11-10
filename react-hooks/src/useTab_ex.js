import React, { useState } from "react";
import ReactDom from "react-dom";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
];

function useTabs(initialTab, allTabs) {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  
  if (!allTabs || !Array.isArray(allTabs)) {
    // allTabs가 없거나 Array가 아니라면
    return;
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
}

function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
