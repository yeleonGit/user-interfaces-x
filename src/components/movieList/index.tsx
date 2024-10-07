import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const movies = [
  { id: 1, title: 'Inception', year: 2010 },
  { id: 2, title: 'Interstellar', year: 2014 },
  { id: 3, title: 'The Dark Knight', year: 2008 },
  { id: 4, title: 'Pulp Fiction', year: 1994 },
  { id: 5, title: 'Forrest Gump', year: 1994 },
];

const MovieList: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Movie List
      </Typography>
      <List>
        {movies.map((movie) => (
          <ListItem key={movie.id}>
            <ListItemText primary={movie.title} secondary={`Released: ${movie.year}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MovieList;
