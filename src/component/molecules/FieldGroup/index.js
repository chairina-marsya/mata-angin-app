import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';

import ButtonAtom from '../../atoms/Button';
import CheckboxAtom from '../../atoms/Checkbox';
import Text from '../../atoms/Text';
import InputField from '../../atoms/TextField';

export default function FieldGroup({
    onChange,
    onClick,
    inputGap,
    margin,
    width,
    inputData
}) {
    const formUi = (type, data) => {
        let ui = '';
        switch (type) {
          case 'input':
            ui = (
              <InputField
              id={data.id}
              label={data.label}
              variant={data.variant}
              color={data.color}
              disabled={data.disabled}
              error={data.error}
              helperText={data.helperText}
              required={data.required}
              value={data.value}
              width={data.width}
              marginTop={data.marginTop ? data.marginTop : '8px'}
              inputProps={data.inputProps}
              onChange={data.onChange}
              />
            );
            break;
          case 'text':
            ui = (
              <Text size="md" weight={data.fontWeight ? data.fontWeight : 'bold'} margin={data.margin}>
                {data.label}
              </Text>
            );
            break;
          case 'checkbox':
            ui = (
              <CheckboxAtom
              id={data.id}
              label={data.label}
              icon={data.icon}
              checkedIcon={data.checkedIcon}
              checked={data.checked}
              onChange={() => onChange(data.id, !data.checked)}
              disabled={data.disabled}
              />
            );
            break;
          case 'button':
            ui = (
              <ButtonAtom
                id={data.id}
                buttonText={data.label}
                variant={data.variant}
                color={data.color}
                startIcon={data.startIcon}
                endIcon={data.endIcon}
                width={data.width}
                height={data.height}
                fontSize={data.fontSize}
                disabled={data.disabled}
                onClick={() => onClick(data.id)}
              />
            );
            break;
          case 'separator':
            ui = <Styles.Separator width={data.width} />;
            break;
          default:
            break;
        }
        return ui;
      };
    
    return (
        <Styles.InputGroupContainer
          gap={inputGap}
          margin={margin}
          width={width}
        >
          {inputData.length > 0 && inputData.map((val, index) => {
            const key = `key${index}`;
            return (
              <Styles.InputContainer key={key} placeItems={val.data.placeItems}>
                {formUi(key, val.type, val.data)}
              </Styles.InputContainer>
            );
          })}
        </Styles.InputGroupContainer>
    );
}
    
FieldGroup.propTypes = {
      inputData: PropTypes.arrayOf(PropTypes.any),
      onClick: PropTypes.func,
      onChange: PropTypes.func,
      inputGap: PropTypes.string,
      margin: PropTypes.string,
      width: PropTypes.string,
};
    
FieldGroup.defaultProps = {
      inputData: [],
      onClick: () => { },
      onChange: () => { },
      inputGap: '',
      margin: '',
      width: '100%',
};