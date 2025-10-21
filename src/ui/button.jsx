// ui/button.jsx
import React from 'react';

const CustomButton = ({ 
  children, 
  variant = 'contained', 
  size = 'md', 
  className = '', 
  label,
  color, // Custom color prop
  backgroundColor, // Alternative name for custom background
  ...props 
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  // Predefined color classes for common colors
  const colorClasses = {
    '#DD7D02': 'bg-[#DD7D02] hover:bg-[#DD7D02]/90 border-[#DD7D02]',
    '#DC2626': 'bg-red-600 hover:bg-red-700 border-red-600',
    '#2563EB': 'bg-blue-600 hover:bg-blue-700 border-blue-600',
    '#059669': 'bg-emerald-600 hover:bg-emerald-700 border-emerald-600',
    '#7C3AED': 'bg-violet-600 hover:bg-violet-700 border-violet-600',
    '#EA580C': 'bg-orange-600 hover:bg-orange-700 border-orange-600',
  };

  const getVariantClasses = () => {
    // If custom color matches predefined classes, use them
    if (color && colorClasses[color]) {
      return `${colorClasses[color]} text-white`;
    }

    // If custom color is provided but not in predefined classes
    if (color || backgroundColor) {
      const customColor = color || backgroundColor;
      return `bg-[${customColor}] hover:brightness-95 text-white border border-[${customColor}]`;
    }

    switch (variant) {
      case 'outlined':
        return 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50';
      case 'text':
        return 'bg-transparent text-gray-600 hover:bg-gray-100';
      case 'contained':
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white border border-blue-600';
    }
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center
        font-medium rounded-lg
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        disabled:opacity-50 disabled:cursor-not-allowed
        ${sizeClasses[size]}
        ${getVariantClasses()}
        ${className}
      `}
      style={
        (color || backgroundColor) && !colorClasses[color] ? {
          backgroundColor: color || backgroundColor,
          borderColor: color || backgroundColor,
          color: '#FFFFFF'
        } : {}
      }
      {...props}
    >
      {label || children}
    </button>
  );
};

export default CustomButton;