import MOEDAS from './data/moedas';

type TMoeda = {
  sigla: string,
  descricao: string;
}

const ListarMoedas = () => {


  const compare = (moeda1: TMoeda, moeda2: TMoeda): number => {
    if (moeda1.descricao < moeda2.descricao) {
      return -1;
    } else if (moeda1.descricao > moeda2.descricao) {
      return 1;
    }
    return 0;
  };

  return (
    <>
      {
        MOEDAS.sort(compare).map(moeda =>
          <option value={moeda.sigla} key={moeda.sigla} >
            {moeda.descricao}
          </option>,
        )
      }
    </>
  );
};

export default ListarMoedas;
