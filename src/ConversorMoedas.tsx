import './ConversorMoedas.css';

import { Button, Col, Form, Jumbotron, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const ConversorMoedas = () => {
  return (
    <div>
      <h1>Conversor Moedas</h1>
      <Jumbotron>
        <Form>
          <Form.Row>
            <Col sm="3">
              <Form.Control value={1} required placeholder="0" />
            </Col>
            <Col sm="3">
              <Form.Control as="select">
              </Form.Control>
            </Col>

            <Col sm="1" className="text-center" style={{ paddingTop: '5px' }}>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Col>

            <Col sm="3">
              <Form.Control as="select">

              </Form.Control>
            </Col>

            <Col sm="2">
              <Button variant="success" type="submit">
                <Spinner animation="border" size="sm" />
                Converter
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Jumbotron>

    </div>
  );
};

export default ConversorMoedas;
