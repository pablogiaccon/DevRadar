import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.2,
    elevation: 2,
  },
});

export const Container = styled.View`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  z-index: 5;
  flex-direction: row;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  height: 50px;
  background: #fff;
  color: #333;
  border-radius: 25px;
  padding: 0 20px;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #8e4dff;
  margin-left: 15px;

  justify-content: center;
  align-items: center;
`;
