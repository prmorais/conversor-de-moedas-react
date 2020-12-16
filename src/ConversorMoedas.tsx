import { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';

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

// type TRates = {
//   sigla: string,
//   valor: number,
// }

// type TDadosFixed = {
//   success: boolean,
//   rates: TRates,
// }

const ConversorMoedas = () => {

  const FIXER_URL = 'http://data.fixer.io/api/latest?access_key=0af9ff85fe182a10200c5646755c4a8f';

  const [valor, setValor] = useState('');
  const [moedaDe, setMoedaDe] = useState('BRL');
  const [moedaPara, setMoedaPara] = useState('USD');
  const [exibirSpinner, setExibirSpinner] = useState(false);
  const [formValidado, setFormValidado] = useState(false);
  const [exibirModal, setExibirModal] = useState(false);
  const [resultadoConversao, setResultadoConversao] = useState('');

  const handleValor = (event: ChangeEvent<HTMLInputElement>) => {
    setValor(event.target.value.replace(/\D/g, ''));
  };

  const handleMoedaDe = (event: ChangeEvent<HTMLInputElement>) => {
    setMoedaDe(event.target.value);
  };

  const handleMoedaPara = (event: ChangeEvent<HTMLInputElement>) => {
    setMoedaPara(event.target.value);
  };

  const handleFecharModal = () => {
    setValor('');
    setMoedaDe('BRL');
    setMoedaPara('USD');
    setFormValidado(false);
    setExibirModal(false);
  };

  const converter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormValidado(true);

    if (event.currentTarget.checkValidity() === true) {
      setExibirSpinner(true);

      axios.get(FIXER_URL).then(response => {
        const cotacao = obterCotacao(response.data);

        setResultadoConversao(`${valor} ${moedaDe} = ${cotacao} ${moedaPara}`);

        setExibirModal(true);
        setExibirSpinner(false);

      });
    }
  };

  const obterCotacao = (dadosCotacao: any) => {
    if (!dadosCotacao || dadosCotacao.success !== true) {
      return false;
    }

    const cotacaoDe = dadosCotacao.rates[moedaDe];
    console.log('Cotação de ' + cotacaoDe);
    const cotacaoPara = dadosCotacao.rates[moedaPara];
    console.log('Cotação para ' + cotacaoPara);

    const cotacao = (1 / cotacaoDe * cotacaoPara) * +valor;

    return cotacao.toFixed(3);

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

        <Modal show={exibirModal} onHide={handleFecharModal}>
          <Modal.Header closeButton>
            <Modal.Title>Conversão</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {resultadoConversao}
          </Modal.Body>

          <Modal.Footer>
            <Button
              onClick={handleFecharModal}
              variant="success"
            >
              Nova conversão
            </Button>
          </Modal.Footer>
        </Modal>
      </Jumbotron>
    </div>
  );
};

export default ConversorMoedas;
