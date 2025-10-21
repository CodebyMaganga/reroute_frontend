import * as React from 'react';
import Typography from '@mui/material/Typography';

/**
 * A reusable Label component using MUI Typography
 * 
 * @param {string} text - The label text
 * @param {string} color - Text color
 * @param {string} variant - Typography variant (body1, h6, subtitle1, etc.)
 * @param {string} align - Text alignment (left, center, right)
 */
export default function CustomLabel({
  text = 'Label',
  color = '#FFFFFF',
  variant = 'body1',
  align = 'left',
}) {
  return (
    <Typography
      variant={variant}
      color={color}
      align={align}
      gutterBottom
      sx={{ fontWeight: 300 }}
    >
      {text}
    </Typography>
  );
}
