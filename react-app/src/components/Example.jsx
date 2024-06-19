import React from 'react';



const user = {name: "John", age: 24, animal: true};

const Example = () => {
    return (
        <div style={{paddingLeft: "2rem", paddingTop: "1rem"}}>
            <h1 style={{color: "royalblue", fontSize: "2rem"}}>Name: { user.name }</h1>
            <h1>Age: { user.age }</h1>
            <div className="day"><b>Day:</b> {(new Date()).getDate()}</div>
            <div className="month"><b>Month:</b> {(new Date()).getMonth()}</div>
            <div className="year"><b>Year:</b> {(new Date()).getFullYear()}</div>
            <hr />
            {user.age >= 18 ? 'Adult' : 'Child'}
            <br />
            {user.animal && 'OK'}
        </div>
    );
}

export default Example;
