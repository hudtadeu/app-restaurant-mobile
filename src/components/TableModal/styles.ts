import styled from 'styled-components/native';

export const Overlay = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: stretch;
  align-items: center;
  padding: 0 24px;
`;

export const ModalBody = styled.View`
  background: #fafafa;
  border-radius: 8px;
  padding: 24px;
  width: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.View`
  margin-top: 32px;
`;

export const Input = styled.TextInput`
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #ddd;
  margin-bottom: 24px;
`;
