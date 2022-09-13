import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { myAction } from '../redux/reducer';

function Greetings() {
    const data = useSelector(state => state.content);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(myAction());
    }, []);
    return (
        <div>{
            console.log(data)
        }
            <h1>Hello, {data}!</h1>

        </div>
    );
}

export default Greetings