import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    increment,
    decrement,
    incrementByValue,
} from "../redux-toolkit/CouterSlide";
// import { increment, decrement, incrementByValue } from "../redux/Counter";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };
    const handleDecrement = () => {
        dispatch(decrement());
    };
    const handleIncrementByValue = () => {
        dispatch(incrementByValue({ value: 10 }));
    };

    return (
        <div className="flex flex-col items-center mt-5 p-5 bg-white w-[400px] mx-auto">
            <h2 className="mb-10">Counter: {count}</h2>
            <div className="flex justify-center items-center gap-x-5">
                <button
                    className="inline-block p-2 border border-gray-200"
                    onClick={handleIncrement}
                >
                    tang len
                </button>
                <button
                    className="inline-block p-2 border border-gray-200"
                    onClick={handleDecrement}
                >
                    giam xuong
                </button>
                <button
                    className="inline-block p-2 border border-gray-200"
                    onClick={handleIncrementByValue}
                >
                    tang len 10
                </button>
            </div>
        </div>
    );
};

export default Counter;
