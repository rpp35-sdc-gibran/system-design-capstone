import React from 'react';
import { Box, Container } from '@mui/material';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id
    }
  }
  render() {
    return (
      <Container component="span" sx={{ p: 20 }}>
        <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(2, 1fr)', height: 500, border: 1 }}>
          <div>1</div>
          <div>2</div>
        </Box>

      </Container>

    )
  }
}

export default RatingsAndReviews;