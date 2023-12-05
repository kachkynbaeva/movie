import React from 'react';

const Pagination = ({onClick}) => {
    const newArr=new Array(10).fill(0)

    return (
        <div>
            <button>Prev</button>
            {
                newArr.map((item,index) =>
               <button
               onClick={() => onClick (index +1)}
                key={index}
               >
                   {index +1}
               </button>
                )
            }
            <button>Next</button>
        </div>
    );
};

export default Pagination;