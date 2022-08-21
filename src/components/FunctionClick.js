import React from 'react';

const FunctionClick = () => {
    // function inside the function --> to call this function click on the button 
    function clickHandler(){
        console.log("click the functionButton")
    }

    return (
        <div>
            <button onClick={clickHandler}>functionClick</button>
            
             /* when page is refresh then this funciton is automaticaly called and print the statment */
            <button onClick={clickHandler()}>functionClick</button> 
        </div>
    );
};

export default FunctionClick;