import { ChangeEvent, FormEvent } from 'react';

export type TFormMoeda = {
  converter: (e: FormEvent<HTMLFormElement>) => void,
  validaForm: boolean,
  showSpinner: boolean,
  changeValor: (e: ChangeEvent<HTMLInputElement>) => void,
  changeMoedaDe: (e: ChangeEvent<HTMLInputElement>) => void,
  changeMoedaPara: (e: ChangeEvent<HTMLInputElement>) => void,
  valor: string,
  moedaDe: string,
  moedaPara: string,
}

export type TModal = {
  exibir: boolean,
  resultado: string,
  fecharModal: () => void,
}

export type IAlertMoedas = {
  exibir: boolean,
  mensagem: string,
}
