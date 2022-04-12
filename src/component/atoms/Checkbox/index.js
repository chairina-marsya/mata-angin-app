import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxAtom({
    id,
    label,
    icon,
    checkedIcon,
    checked,
    onChange,
    disabled,
}) {

return (

    <FormControlLabel 
        id={id}
        label={label}
        control={
        <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            checked={checked}
            disabled={disabled}
            onChange={(e) => onChange(e.target.checked)}
        />}
    />
  );
}