import React from 'react';
import * as Styles from './styles';

import ButtonAtom from '../../component/atoms/Button';
import Text from '../../component/atoms/Text';
import InputField from '../../component/atoms/TextField';
import CheckboxAtom from '../../component/atoms/Checkbox';

export default function LandingPage() {
return (
    <Styles.Container>
        <ButtonAtom variant='contained' buttonText='Welcome to Mata Angin' width='300px'/>
        <Text size='m'>Test</Text>
        <InputField label='Field' value='Test' sx={{marginTop: '10px', width:'200px', color:'blue'}}/>
        <CheckboxAtom label='Test' />
    </Styles.Container>
  );
}