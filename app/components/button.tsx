'use client';
import React from 'react';

interface CommonButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick: () => void;
  fullWidth?: boolean;
}

export default function CommonButton({ label, variant = 'primary', onClick, fullWidth = false }: CommonButtonProps) {
  const baseClasses = "font-semibold rounded px-6 py-2 transition-colors duration-200";
  
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-gray-600 hover:text-white",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass}`}
    >
      {label}
    </button>
  );
}
