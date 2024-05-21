import { useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [lastInputWasOperator, setLastInputWasOperator] = useState(false);

  const inputHandler = (value: string) => {
    let newValue = value;

    if (inputValue === "0" && !"+-*/%".includes(value)) {
      setInputValue(value);
    } else if (lastInputWasOperator && "+-*/%".includes(value)) {
      newValue = value;
      setInputValue(inputValue.slice(0, -1) + newValue);
    } else {
      setInputValue(inputValue + newValue);
    }

    const isOperator = "+-*/%".includes(newValue);

    setLastInputWasOperator(isOperator);
  };

  const clearInput = () => {
    setInputValue("");
    setLastInputWasOperator(false);
  };

  const deleteCharacter = () => {
    setInputValue(inputValue.slice(0, -1));
    setLastInputWasOperator(false);
  };

  const calculateResult = () => {
    try {
      const result = eval(inputValue);
      const formattedResult = result.toLocaleString("en-US", {
        useGrouping: false,
      });
      setInputValue(formattedResult);
      setLastInputWasOperator(false);
    } catch (error) {
      setInputValue("Error");
      setLastInputWasOperator(false);
    }
  };

  const buttons = [
    { label: "C", onClick: clearInput, className: "clear" },
    { label: "D", onClick: deleteCharacter, className: "delete" },
    { label: "%", onClick: () => inputHandler("%") },
    { label: "/", onClick: () => inputHandler("/"), className: "operator" },
    { label: "7", onClick: () => inputHandler("7") },
    { label: "8", onClick: () => inputHandler("8") },
    { label: "9", onClick: () => inputHandler("9") },
    { label: "*", onClick: () => inputHandler("*"), className: "operator" },
    { label: "4", onClick: () => inputHandler("4") },
    { label: "5", onClick: () => inputHandler("5") },
    { label: "6", onClick: () => inputHandler("6") },
    { label: "-", onClick: () => inputHandler("-"), className: "operator" },
    { label: "1", onClick: () => inputHandler("1") },
    { label: "2", onClick: () => inputHandler("2") },
    { label: "3", onClick: () => inputHandler("3") },
    { label: "+", onClick: () => inputHandler("+"), className: "operator" },
    { label: "0", onClick: () => inputHandler("0") },
    { label: ",", onClick: () => inputHandler(".") },
    { label: "=", onClick: calculateResult, className: "equal" },
  ];

  return (
    <>
      <h1>Calculator App</h1>
      <div className="container">
        <input value={inputValue} readOnly className="container__input-box" />
        <div className="container__button-items">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              className={`container__button ${
                button.className ? `container__button--${button.className}` : ""
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
      <p className="container__signature">
        Created by{" "}
        <span>
          <a
            className="container__signature__link"
            target="_blank"
            href="https://github.com/KramaDev"
          >
            Mario Kramarić
          </a>
        </span>{" "}
        © 2024
      </p>
    </>
  );
};

export default Calculator;
