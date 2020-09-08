import React, { useCallback, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, TextInput, Button, styles } from './styles';

interface IFormSearch {
  loadDevs(): void;
  techs: string;
  setTechs(techs: string): void;
}

const FormSearch: React.FC<IFormSearch> = ({ loadDevs, techs, setTechs }) => {
  return (
    <Container>
      <TextInput
        style={styles.shadow}
        placeholder="Buscar devs por techs..."
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
        value={techs}
        onChangeText={setTechs}
      />
      <Button style={styles.shadow} onPress={loadDevs}>
        <MaterialIcons name="my-location" size={20} color="#fff" />
      </Button>
    </Container>
  );
};

export default FormSearch;
