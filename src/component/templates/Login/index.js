import React from "react";
import TextAtom from "../../atoms/Text";
import * as Styles from './styles';
import * as Color from '../../../helpers/colors';
import FieldGroup from "../../molecules/FieldGroup";
import ButtonAtom from "../../atoms/Button";

import GoogleIcon from '@mui/icons-material/Google';

export default function LoginTemplate({
    onChange,
    onClick,
    inputGap,
    margin,
    width,
    direction,
    inputData,
}) {
    return(
        <Styles.Container>
            <Styles.ContentWrapper>
                <TextAtom size='20px' textAlign='center' color={Color.oldGrey}>
                    Welcome back!
                </TextAtom>
                <TextAtom size='20px' textAlign='center' color={Color.oldGrey}>
                    A place to meet mentors in Mata Angin Indonesia.
                </TextAtom>
            </Styles.ContentWrapper>
            <Styles.FormDialog>
                <TextAtom size= '24px' textAlign='center' color= 'black'>Log In</TextAtom>
                <FieldGroup
                    onChange={onChange}
                    onClick={onClick}
                    inputGap={inputGap}
                    margin={margin}
                    width={width}
                    direction={direction}
                    inputData={inputData}
                />
                <ButtonAtom
                    key='loginButton'
                    id='loginButton'
                    buttonText='Log in'
                    variant='contained'
                    color='primary'
                    onClick={(id) => onClick(id)}
                    fullWidth
                />
                <TextAtom key='or' size= '18px' textAlign='center' color= 'grey'>OR</TextAtom>
                <ButtonAtom
                    key='loginGoogleButton'
                    id='loginGoogleButton'
                    buttonText='Log in with Google'
                    variant='contained'
                    color='primary'
                    startIcon={(<GoogleIcon />)}
                    onClick={(id) => onClick(id)}
                    fullWidth
                />
            </Styles.FormDialog>
        </Styles.Container>
    )
}