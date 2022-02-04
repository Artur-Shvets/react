import React from 'react';
import './Counter.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from './counterSlice';

function Counter() {
	const count = useSelector(state => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div className='counter'>
			<h3>{count}</h3>
			<div>
				<button onClick={() => dispatch(increment())} className='btn btn_blue'>
					+
				</button>
				<button onClick={() => dispatch(reset())} className='btn btn_yellow'>
					reset
				</button>
				<button onClick={() => dispatch(decrement())} className='btn btn_red'>
					-
				</button>
			</div>
		</div>
	);
}

export default Counter;
