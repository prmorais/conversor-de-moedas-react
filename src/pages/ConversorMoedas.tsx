import { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import { Jumbotron } from 'react-bootstrap';

import './ConversorMoedas.css';
import ModalMoedas from '../components/ModalMoedas';
import FormMoedas from '../components/FormMoedas';
import AlertMoedas from '../components/AlertMoedas';

const ConversorMoedas = () => {

  const URL = process.env.REACT_APP_FIXER_URL || '';

  const [valor, setValor] = useState('');
  const [moedaDe, setMoedaDe] = useState('BRL');
  const [moedaPara, setMoedaPara] = useState('USD');
  const [exibirSpinner, setExibirSpinner] = useState(false);
  const [formValidado, setFormValidado] = useState(false);
  const [exibirModal, setExibirModal] = useState(false);
  const [exibirAlert, setExibirAlert] = useState(false);
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

      axios.get(URL).then(response => {
        if (response.data.success) {
          const cotacao = obterCotacao(response.data);

          setResultadoConversao(`${valor} ${moedaDe} = ${cotacao} ${moedaPara}`);

          setExibirModal(true);
          setExibirSpinner(false);

        } else {
          setExibirAlert(true);
        }
      });
    }
  };

  const obterCotacao = (dadosCotacao: any) => {
    if (!dadosCotacao || dadosCotacao.success !== true) {
      return false;
    }

    const cotacaoDe = dadosCotacao.rates[moedaDe];
    const cotacaoPara = dadosCotacao.rates[moedaPara];

    const cotacao = (1 / cotacaoDe * cotacaoPara) * +valor;

    return cotacao.toFixed(3);

  };

  return (
    <div>
      <h1>Conversor Moedas</h1>
      <AlertMoedas
        exibir={exibirAlert}
        mensagem="Erro ao converter moedas. Tente novamente."
      />

      <Jumbotron>
        <FormMoedas
          changeMoedaDe={handleMoedaDe}
          changeValor={handleValor}
          changeMoedaPara={handleMoedaPara}
          converter={converter}
          moedaDe={moedaDe}
          moedaPara={moedaPara}
          showSpinner={exibirSpinner}
          validaForm={formValidado}
          valor={valor}
        />

        <ModalMoedas
          exibir={exibirModal}
          fecharModal={handleFecharModal}
          resultado={resultadoConversao} />

      </Jumbotron>
    </div>
  );
};

export default ConversorMoedas;
