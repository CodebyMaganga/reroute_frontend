import * as React from 'react';
import TextField from '@mui/material/TextField';

/**
 * A reusable MUI Input component
 * 
 * @param {string} label - The label for the input field
 * @param {string} type - Input type (text, number, email, password, etc.)
 * @param {string} value - Current value of the input
 * @param {function} onChange - Handler for input change
 * @param {string} placeholder - Placeholder text
 * @param {boolean} disabled - Disable input
 * @param {boolean} fullWidth - Whether input should take full width
 * @param {string} color - Custom color (hex or CSS color)
 */
export default function CustomInput({
  label = 'Enter email',
  type = 'text',
  value,
  onChange,
  placeholder = '',
  disabled = false,
  fullWidth = true,
  color = '#FFFFFF',
  
}) {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      fullWidth={fullWidth}
      variant="outlined"
      sx={{
        '& .MuiInputBase-input': {
          color: color, // Text color
        },
        '& .MuiInputLabel-root': {
          color: color, // Label color
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: color, // Border color
          },
          '&:hover fieldset': {
            borderColor: color,
          },
          '&.Mui-focused fieldset': {
            borderColor: color,
          },
        },
      }}
    />
  );
}
