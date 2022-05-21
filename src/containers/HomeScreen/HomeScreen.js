import React from "react";
import { Button } from "../../components";
import { incrementCount } from "../../redux/slice";
import { selectValue } from "../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectValue);

  const onButtonClick = () => {
    dispatch(incrementCount());
  };

  return (
    <div>
      <h1>Home Screen</h1>
      <Button onClick={onButtonClick} />
      <p>{count}</p>
    </div>
  );
};

export default HomeScreen;
