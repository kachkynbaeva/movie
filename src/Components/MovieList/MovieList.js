import React from "react";
import {IMAGE_URL} from "../../config/config";
import {Box, Grid, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';



const MovieList = ({movies}) => {
    return (
        <Grid container spacing={2}>
            {
                movies.map(movie =>
                    <Grid item
                          lg={3}
                          md={3}
                          // sm={4}
                          xs={6}


                    >
                        <Box
                            // sx={{'& img':{borrderRadius: radiusOfComponents}}
                            className={'movie-box'}>
                            <img className={'movie-img'}
                                 src={`${IMAGE_URL}${movie?.poster_path}`} alt=""/>
                            <Typography variant={'h3'}>{movie?.title}</Typography>
                            <FavoriteIcon fontSize={'small'}/>
                            <Typography>{movie?.vote_average}</Typography>
                        </Box>
                    </Grid>
                )
            }
        </Grid>
    )
}

export default MovieList;