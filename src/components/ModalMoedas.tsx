import { Button, Modal } from 'react-bootstrap';
import { TModal } from '../types/typesMoedas';

const ModalMoedas: React.FC<TModal> = (
  {
    exibir,
    fecharModal,
    resultado,
  }) => {
  return (
    <>
      <Modal show={exibir} onHide={fecharModal}>
        <Modal.Header closeButton>
          <Modal.Title>Conversão</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {resultado}
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={fecharModal}
            variant="success"
          >
            Nova conversão
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalMoedas;
