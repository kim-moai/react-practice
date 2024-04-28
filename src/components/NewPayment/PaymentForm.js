import React, { useState } from "react";

import "./PaymentForm.css";

const PaymentForm = () => {
  const [objectState, setObjectState] = useState({
    // 초기값
    name: "",
    price: 0,
    today: new Date(),
  });

  // prevState, name : name 값만 바꾸고 나머지는 그대로
  const inputTextHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };
  const inputPriceHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };
  const inputTodayHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      today: event.target.value,
    }));
  };

  const buttonSubmitHandler = (event) => {
    // event.preventDefault(); : 기본적으로 설정 된 새로고침 기능을 막아주는 역할
    event.preventDefault();
    // 1. 입력한 값을 보여주고
    console.log(objectState);
    // 2. 다시 초기화를 하겠다
    setObjectState({
      name: "",
      price: 0,
      today: new Date(),
    });
  };
  return (
    // submit 이벤트가 발생했을 때 이를 감지하는 이벤트리스너
    <form onSubmit={buttonSubmitHandler}>
      <div className="new-payment__controls">
        <div className="new-payment__control">
          <label>이름</label>
          <input
            type="text"
            onChange={inputTextHandler}
            value={objectState.name}
          />
        </div>
        <div className="new-payment__control">
          <label>금액</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={inputPriceHandler}
            value={objectState.price}
          />
        </div>
        <div className="new-payment__control">
          <label>날짜</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={inputTodayHandler}
            value={objectState.today}
          />
        </div>
      </div>
      <div className="new-payment__actions">
        <button type="submit">결제 추가</button>
      </div>
    </form>
  );
};

export default PaymentForm;
