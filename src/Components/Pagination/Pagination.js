import React, {useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {Pagination as MuiPagination} from "@mui/material";
import {theme} from "../../theme/theme";



const Pagination = ({onClick}) => {
    const newArr=new Array(10).fill(0)
    const [pageParam] = useSearchParams('page')
    const [active,setActive] = useState(+pageParam.get('page') || 1)
    console.log(active)

    const handleChange = (e) => {
        setActive(Number(e))
        onClick(Number(e))
    }



    return (

        <div>
            <MuiPagination
               onChange={(e) => handleChange(+e.target.textContent)}
               color="primary"
               sx={{
                   display:'inline-block',
                   '& .MuiPinationItem-root': {
                       backgroundColor: theme.palette.secondary.main,
                   }
               }}
                count={10}  shape="rounded" />
        </div>
    );
};

export default Pagination;