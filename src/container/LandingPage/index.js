import React from 'react';
import * as Styles from './styled';

import ButtonAtom from '../../component/Button';

export default function LandingPage() {
return (
    <Styles.Container>
        <ButtonAtom buttonText='Welcome to Mata Angin' />
    </Styles.Container>
  );
}