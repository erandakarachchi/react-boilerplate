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
      <h1 className="text-6xl">Home Screen</h1>
      <div className="flex flex-col border-2 border-black mt-4">
        <Button onClick={onButtonClick} />
        <hr className="border-black"/>
        <div className="text-center">{count}</div>
      </div>
    </div>
  );
};

export default HomeScreen;
