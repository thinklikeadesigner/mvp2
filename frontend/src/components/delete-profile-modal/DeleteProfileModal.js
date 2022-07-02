import React from 'react';
import {
  Button,
  ButtonContainer,
  Form,
  Input,
  Label,
  Modal,
  Container,
  Warning,
} from './styledDeleteProfileModal';

export default function DeleteProfileModal({ isOpen, setIsOpen, deleteInvestor }) {
  const input = React.useRef();
  const [inputValue, setInputValue] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.toLowerCase() === 'yes') {
      deleteInvestor();
      setIsOpen(false);
      setInputValue('');
    } else {
      console.log('Error!');
    }
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleClose() {
    setInputValue('');
    setIsOpen(false);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function preventBubbling(e) {
    e.stopPropagation();
  }

  return (
    <Modal $show={isOpen} onClick={closeModal}>
      <Container onClick={preventBubbling}>
        <Warning>
          You’re going to delete your profile. This will cause permanent loss of your data. Are you
          sure?
        </Warning>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="confirm">Type in ‘yes’ if you really want to delete your profile</Label>
          <Input
            type="text"
            onChange={handleChange}
            ref={input}
            value={inputValue}
            required
            name="confirm"
          />
          <ButtonContainer>
            <Button type="button" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit">Delete Profile</Button>
          </ButtonContainer>
        </Form>
      </Container>
    </Modal>
  );
}
