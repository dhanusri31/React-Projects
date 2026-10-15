import React from 'react';

const Button = (props) => {
return ( <button onClick={props.onclick}>
{props.welcome} </button>
);
};

export default Button;
