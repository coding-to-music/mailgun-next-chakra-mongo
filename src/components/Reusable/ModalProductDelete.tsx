import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { toggleSnackbarOpen } from '../../redux/actions/snackbar.action';
import { removeFromCart } from '../../redux/actions/shoppingCart.action';
import Snackbar from './Snackbar';

type ModalProductDeleteProps = {
  _id: string;
  isOpen: boolean;
  onClose: () => void;
};

export const ModalProductDelete: React.FC<ModalProductDeleteProps> = (
  props: ModalProductDeleteProps
) => {
  const { _id, isOpen, onClose } = props;
  const dispatch = useDispatch();

  const handleConfirmRemove = () => {
    // modal successful
    dispatch(toggleSnackbarOpen('Produsul a fost eliminat din coșul de cumpărături'));
    dispatch(removeFromCart(_id));
  };

  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered={true}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ștergere produs</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text>Sunteți sigur că doriți să eliminați produsul din coșul de cumpărături?</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={() => handleConfirmRemove()}>
              Elimină
            </Button>
            <Button onClick={onClose}>Anulează</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Snackbar timeout={3000} />
    </>
  );
};

export default ModalProductDelete;
