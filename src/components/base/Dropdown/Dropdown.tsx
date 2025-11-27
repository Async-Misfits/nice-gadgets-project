import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.scss';
import { Typography } from '@/components/base/Typography';

interface DropdownOption {
  name: string | number;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  placeholder: string;
  value: string | number | null;
  onChange: (name: string | number) => void;
  disabled?: boolean;
  className?: string;
}
/**
 * The Dropdown component (Select Menu).
 * * @param {DropdownProps} props
 * @param {DropdownOption[]} props.options - An array of options to display in the dropdown list.
 * @param {string} props.placeholder - The text displayed when no value is selected.
 * @param {string | number | null} props.value - The currently selected value (`name`) of the component.
 * @param {(name: string | number) => void} props.onChange - The handler called when a new item is selected. It returns the `name` of the chosen option.
 * @param {boolean} [props.disabled=false] - If `true`, the entire component's interaction is completely disabled.
 * @param {string} [props.className=''] - An optional custom CSS class for styling the dropdown container.
 */

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder,
  value,
  onChange,
  disabled = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.name === value);
  const displayLabel = selectedOption ? selectedOption.label : placeholder;

  const handleOptionClick = (option: DropdownOption) => {
    if (disabled) return;

    onChange(option.name);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`dropdown-container ${className} ${disabled ? 'disabled' : ''}`}
      ref={dropdownRef}
    >
      <div
        className="dropdown-header"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        role="button"
        aria-expanded={isOpen}
        tabIndex={disabled ? -1 : 0}
      >
        <Typography
          as="button"
          variant="button"
          className={!selectedOption ? 'placeholder-text' : ''}
        >
          {displayLabel}
        </Typography>
        <span className={`dropdown-arrow ${isOpen ? 'up' : 'down'}`}></span>
      </div>

      <ul
        className={`dropdown-list ${isOpen ? 'is-open' : ''}`}
        role="listbox"
      >
        {options.map((option) => (
          <li
            key={String(option.name)}
            className={`dropdown-item ${option.name === value ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
            role="option"
            aria-selected={option.name === value}
            tabIndex={0}
          >
            <Typography
              as="button"
              variant="button"
            >
              {option.label}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};
