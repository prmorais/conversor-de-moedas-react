import './ConversorMoedas.css';

import {
  Alert,
  Button,
  Col,
  Form,
  Jumbotron,
  Modal,
  Spinner,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const ConversorMoedas = () => {
  return (
    <div>
      <h1>Conversor Moedas</h1>
      <Alert variant="danger" show={false} >
        Erro obtendo dados de conversão, tente novamente.
      </Alert>
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

        <Modal show={false}>
          <Modal.Header closeButton>
            <Modal.Title>Conversão</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Resultado da conversão aqui...
          </Modal.Body>

          <Modal.Footer>
            <Button variant="success" >Nova conversão</Button>
          </Modal.Footer>
        </Modal>
      </Jumbotron>
    </div>
  );
};

export default ConversorMoedas;
