import React, { useState } from 'react';
import {
  Form, Button, Row, Col,
} from 'react-bootstrap';

const Search = () => {
  const [state, setState] = useState({
    description: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'full_time') {
      setState(prevState => ({ ...state, [name]: !prevState.full_time }));
    } else {
      setState({ ...state, [name]: value });
    }
  };

  const handleSearch = event => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className="search-section">
      <Form className="search-form" onSubmit={handleSearch}>
        <Row>
          <Col>
            <Form.Group controlId="description">
              <Form.Control
                type="text"
                name="description"
                value={state.description || ''}
                placeholder="Enter search term"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Button variant="primary" type="submit" className="btn-search">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
export default Search;
