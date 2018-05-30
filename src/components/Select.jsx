import React from 'react';
import data from './metadata.json';

export const Select = ({ value, onChange }) =>
    <select name='option' value={value}
            onChange={onChange}>
      {
        data.types.map(item =>
            <option value={item.value}>
              {item.name}
            </option>,
        )
      }
    </select>;