import React from 'react';
import { useSelector } from 'react-redux';

function Greetings() {
    const data = useSelector(state => state.id);
    const id= useSelector(state => state.id);
    return (<div>{`greeting ${id} :`+ data}this is me</div>)
}

export default Greetings