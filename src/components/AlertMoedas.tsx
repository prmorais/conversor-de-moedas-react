import { Alert } from 'react-bootstrap';

import { IAlertMoedas } from '../types/typesMoedas';

const AlertMoedas = (props: IAlertMoedas) =>
  <Alert variant="danger" show={props.exibir} >
    {props.mensagem}
  </Alert>;

export default AlertMoedas;
