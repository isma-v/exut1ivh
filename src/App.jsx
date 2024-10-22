import { useState } from 'react'

import './App.css'
import { List, ListItem } from '@mui/material'

import Noticia from './components/Noticia'


function App() {

  const noticias = [
    {
      id: 0,
      imageUrl: './mario.jpg',
      avatarUrl: './avatar01.png',
      title: 'Título 1',
      date: '13 de julio de 2024',
      content: 'Lorem Ipsum is simply dummy text of verdana et justo et justo sent in ver',
      imageAlt: 'sky',
      avatarAlt: 'sky',
      initialLikes: 4
    },
    {
      id: 3,
      imageUrl: './sea.jpg',
      avatarUrl: './avatar02.png',
      title: 'Título 2',
      date: '23 de mayo de 2020',
      content: 'Lorem Ipsum is simply dummy text of verdana et justo et justo sent in ver ',
      imageAlt: 'sky',
      avatarAlt: 'sky',
      initialLikes: 45
    },
    {
      id: 5,
      imageUrl: './sky.jpg',
      avatarUrl: './avatar03.png',
      title: 'Título 3',
      date: '2 de febrero de 2019',
      content: 'Lorem Ipsum is simply dummy text of verdana et justo et justo sent in ver',
      imageAlt: 'sky',
      avatarAlt: 'sky',
      initialLikes: 22
    },
    {
      id: 2,
      imageUrl: './tux.jpg',
      avatarUrl: './avatar04.png',
      title: 'Título 4',
      date: '13 de abril de 2023',
      content: 'Lorem Ipsum is simply dummy text of verdana et justo et justo sent in ver',
      imageAlt: 'sky',
      avatarAlt: 'sky',
      initialLikes: 17
    },
   
  ];



  return (

  
    
    <List>

      {noticias.map((noticia, index) => (
        <ListItem
          sx={{ margin: '50px', backgroundColor: 'lightgray', borderRadius: '10px', padding: '20px' }}
          key={noticia.id}

        >
          <Noticia
            key={noticia.id}
            imageUrl= {noticia.imageUrl}
            avatarUrl= {noticia.avatarUrl}
            title= {noticia.title}
            date= {noticia.date}
            content= {noticia.content}
            imageAlt= {noticia.imageAlt}
            avatarAlt= {noticia.avatarAlt}
            initialLikes={noticia.initialLikes}



          />
        </ListItem>
      ))}




    </List>

    
  );
}

export default App
