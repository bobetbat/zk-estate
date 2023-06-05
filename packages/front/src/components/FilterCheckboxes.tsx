import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
interface Options {
  [key: string]: string[];
}
interface FilterCheckboxesProps {
  // filterName: string;
  options: Options;
  onChange: (filterName: string, selectedOptions: string) => void;
}

const FilterCheckboxes: React.FC<FilterCheckboxesProps> = ({ options, onChange }) => {
  const [searchParams] = useSearchParams();
  // const [selectedOptions, setSelectedOptions] = useState<string>('');

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, filterName: string) => {
    const option = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      onChange(filterName, option);
    } else {
      onChange(filterName, '');
    }

  };

  return (
    <FormControl component="fieldset">
      {Object.keys(options).map((key) => (
        <>
          <FormLabel>
            <Typography textAlign="start" textTransform='capitalize' fontWeight={700}>
              {key}
            </Typography>
          </FormLabel>
          <FormGroup>
            {options[key].map((option) => (
              <FormControlLabel
                key={option}
                control={<Checkbox checked={searchParams.get(key) === option} onChange={(e) => handleCheckboxChange(e, key)} value={option} />}
                label={option}
              />
            ))}
          </FormGroup>
        </>
      ))}
    </FormControl>
  );
};

FilterCheckboxes.propTypes = {
  // filterName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  // options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterCheckboxes;
