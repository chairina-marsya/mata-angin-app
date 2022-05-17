import React from "react";
import TextAtom from "../../atoms/Text";
import * as Styles from './styles';
import * as Color from '../../../helpers/colors';
import FieldGroup from "../../molecules/FieldGroup";
import ButtonAtom from "../../atoms/Button";

export default function GeneralForm({
    onChange,
    onClickButtonProceed,
    inputData,
    formTitle,
    buttonTitle,
}) {
    return(
        <Styles.Container>
            <Styles.ContentWrapper>
                <TextAtom size='20px' color={Color.oldGrey} weight='bold'>
                    {formTitle}
                </TextAtom>
            </Styles.ContentWrapper>
            <Styles.FormDialog>
                <FieldGroup
                    onChange={onChange}
                    // onClick={onClick}
                    inputData={inputData}
                    inputGap="1rem"
                    margin="20px 0"
                    width="100%"
                    direction="column"
                />
            <Styles.ButtonWrap>
                <ButtonAtom
                    key='ProceedButton'
                    id='ProceedButton'
                    buttonText={buttonTitle}
                    variant='contained'
                    color='primary'
                    onClick={() => onClickButtonProceed()}
                    fullWidth
                />
            </Styles.ButtonWrap>
            </Styles.FormDialog>
        </Styles.Container>
    )
}