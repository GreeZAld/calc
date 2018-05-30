import React from 'react';

export const InputField = ({ onChange, name, onKeyUp }) =>
    <input type='number' onChange={onChange} name={name}
           onKeyUp={onKeyUp}>
    </input>;