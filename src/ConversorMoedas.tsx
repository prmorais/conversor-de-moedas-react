import { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react';

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
import ListarMoedas from './ListarMoedas';

const ConversorMoedas = () => {
  const [valor, setValor] = useState('');
  const [moedaDe, setMoedaDe] = useState('BRL');
  const [moedaPara, setMoedaPara] = useState('USD');
  const [exibirSpinner, setExibirSpinner] = useState(false);
  const [formValidado, setFormValidado] = useState(false);

  const handleValor = (event: ChangeEvent<HTMLInputElement>) => {
    setValor(event.target.value.replace(/\D/g, ''));
  };

  const handleMoedaDe = (event: ChangeEvent<HTMLInputElement>) => {
    setMoedaDe(event.target.value);
  };

  const handleMoedaPara = (event: ChangeEvent<HTMLInputElement>) => {
    setMoedaPara(event.target.value);
  };

  const converter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormValidado(true);

    if (event.currentTarget.checkValidity() === true) {
      alert('Correto');
    } else {
      alert('Incorretp');
    }
  };

  return (
    <div>
      <h1>Conversor Moedas</h1>
      <Alert variant="danger" show={false} >
        Erro obtendo dados de conversão, tente novamente.
      </Alert>
      <Jumbotron>
        <Form onSubmit={converter} noValidate validated={formValidado} >
          <Form.Row>
            <Col sm="3">
              <Form.Control
                as="input"
                onChange={handleValor}
                value={valor}
                required
                placeholder="0" />
            </Col>
            <Col sm="3">
              <Form.Control
                as="select"
                onChange={handleMoedaDe}
                value={moedaDe}
              >
                <ListarMoedas />
              </Form.Control>
            </Col>

            <Col sm="1"
              className="text-center"
              style={
                { paddingTop: '5px' }
              }>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Col>

            <Col sm="3">
              <Form.Control
                as="select"
                onChange={handleMoedaPara}
                value={moedaPara}
              >
                <ListarMoedas />
              </Form.Control>
            </Col>

            <Col sm="2">
              <Button variant="success" type="submit">
                <span className={exibirSpinner ? '' : 'hidden'}>
                  <Spinner animation="border" size="sm" />
                </span>
                <span className={exibirSpinner ? 'hidden' : ''}>
                  Converter
                </span>
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
