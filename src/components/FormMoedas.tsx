import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Form, Spinner } from 'react-bootstrap';

import ListarMoedas from './ListarMoedas';
import { TFormMoeda } from '../types/typesMoedas';

const FormMoedas: React.FC<TFormMoeda> = (props) => {
  return (
    <>
      <Form onSubmit={props.converter} noValidate validated={props.validaForm} >
        <Form.Row>
          <Col sm="3">
            <Form.Control
              as="input"
              onChange={props.changeValor}
              value={props.valor}
              required
              placeholder="0" />
          </Col>
          <Col sm="3">
            <Form.Control
              as="select"
              onChange={props.changeMoedaDe}
              value={props.moedaDe}
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
              onChange={props.changeMoedaPara}
              value={props.moedaPara}
            >
              <ListarMoedas />
            </Form.Control>
          </Col>

          <Col sm="2">
            <Button variant="success" type="submit">
              <span className={props.showSpinner ? '' : 'hidden'}>
                <Spinner animation="border" size="sm" />
              </span>
              <span className={props.showSpinner ? 'hidden' : ''}>
                Converter
              </span>
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </>
  );
};

export default FormMoedas;
