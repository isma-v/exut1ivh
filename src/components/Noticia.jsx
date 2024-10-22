import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShareIcon from '@mui/icons-material/Share'

import { useState } from 'react'
import ModalDialog from './ModalDialog'
import Grid from '@mui/material/Grid2'
import { Card, Typography, CardHeader, CardActionArea, CardMedia, CardContent, CardActions, IconButton, Avatar, Button } from '@mui/material';

export default function Noticia({ avatarAlt, imageAlt, imageUrl, avatarUrl, title, date, content, initialLikes }) {


  const [like, setLike] = useState(false);

  //añadir likes


  const toggleLike = () => {
    setLike(!like);
  };



  //eventos de ModalDialog

  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

    setOpen(false);
  };





  return (
    <Card sx={{ width: "100%" }}>

      <Grid container sx={{ padding: 2 }} spacing={2}>

        <Grid size={{ xs: 12, sm: 6, md: 5, lg: 5 }}>
          <Avatar alt={avatarAlt} src={avatarUrl} sx={{ width: 40, height: 40 }} />

        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 5, lg: 5 }}>
          <Typography variant="h7" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {date}
          </Typography>
        </Grid>
      </Grid>


      <CardActionArea>

        <CardMedia
          sx={{ height: 194, width: '100%', height: '300px', overflow: 'hidden' }}
          image={imageUrl}
          alt={imageAlt}
          title={title}
        />

        <CardContent>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ padding: 2, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>

        <Typography variant="body2" sx={{ fontSize: 20, color: 'text.secondary' }}>
          {like ? initialLikes + 1 : initialLikes}
        </Typography>

        <IconButton onClick={toggleLike} aria-label="add to favorites">
          {like ? <FavoriteIcon color="info" /> : <FavoriteBorderIcon color="info" />}
        </IconButton>


        {like ?

          <IconButton onClick={handleClickOpen} aria-label="share">
            <ShareIcon />
          </IconButton>
          :
          <IconButton disabled aria-label="share">
            <ShareIcon />
          </IconButton>
        }

        <ModalDialog open={open} handleClose={handleClose} />



      </CardActions>
    </Card>
  );
}

