import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment , decrement} from './redux/actions';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Redux Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>➕ Increment</button>
      <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
    </div>
  );
}

export default App;
