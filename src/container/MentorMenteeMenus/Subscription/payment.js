import React from "react";
import TextAtom from "../../../component/atoms/Text";
import * as Styles from './styles';
import * as Color from '../../../helpers/colors';
import FieldGroup from "../../../component/molecules/FieldGroup";
import ButtonAtom from "../../../component/atoms/Button";

import { FormElement } from "./paymentFormElement";
import { useHistory } from "react-router-dom";

export default function Payment({
    onChange,
    onClick,
    inputGap,
    margin,
}) {
    const history = useHistory();
    return(
        <Styles.Container>
            <Styles.FormDialog>
                <TextAtom size= '20px' textAlign='left' color= 'black' weight='bold'>Subscription Form</TextAtom>
                <FieldGroup
                    inputData={FormElement}
                    onChange={onChange}
                    onClick={onClick}
                    width='100%'
                    inputGap="0.5rem"
                    direction="column"
                    margin="20px 0"
                />
                <ButtonAtom
                    key='subscribe'
                    id='subscribe'
                    buttonText='Subscribe and Pay'
                    variant='contained'
                    color='primary'
                    onClick={() => (history.push('/invoice'))}
                    fullWidth
                />
            </Styles.FormDialog>
        </Styles.Container>
    )
}