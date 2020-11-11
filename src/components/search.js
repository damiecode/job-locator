import React, { useState } from 'react';
import {
  Form, Button, Row, Col,
} from 'react-bootstrap';

const Search = () => {
  const [state, setState] = useState({
    id: '',
    username: '',
  });

  const handleSearch = event => {
    event.preventDefault();
    console.log(state);
  };

  const handleChange = event => {
    if(event.target.name == 'job') {
      this.setState({
        job: event.target.value,
      });
    } else if (event.target.name == 'people') {
      this.setState({
        people: event.target.value,
      })
    }
  };

  return (
    <div className="search-section">
      <Form className="search-form" onSubmit={handleSearch}>
        <Row>
          <Col>
            <select id="search__select" name="search_item">
              <option value="job">Job</option>
              <option value="people">People</option>
            </select>
          </Col>
          <Col>
            <Form.Group controlId="description">
              <Form.Control
                type="text"
                name="search_text"
                placeholder="Search Job &amp; People"
                onChange={handleChange}
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

