import React from 'react';

import { Container, Form, SearchIcon } from './styles';

function Search() {
  return (
      <Container>
          <Form>
              <input type="search" placeholder="Ex: One piece" />
              <SearchIcon />
          </Form>
      </Container>
  )
}

export default Search;