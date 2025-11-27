import React, { useState } from 'react';
import './Delivery.scss';
import { CITIES, DELIVERY_BY_CITY } from './deliveryOptions';
import type { CityId } from './deliveryOptions';
import { Dropdown } from '@/components/base/Dropdown';

interface CityOption {
  name: string;
  label: string;
}

interface DeliveryProps {
  productId?: string;
  onDeliveryMethodChange?: (selectedId: string | null) => void;
}

export const Delivery: React.FC<DeliveryProps> = ({ onDeliveryMethodChange }) => {
  const [selectedCity, setSelectedCity] = useState<CityId>('nyc');
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const options = DELIVERY_BY_CITY[selectedCity];

  const cityOptions: CityOption[] = CITIES.map((city) => ({
    name: city.id,
    label: city.name,
  }));

  const handleSelectOption = (optionId: string | null) => {
    setSelectedOptionId(optionId);

    if (onDeliveryMethodChange) {
      onDeliveryMethodChange(optionId);
    }
  };

  return (
    <section className="delivery">
      <h2 className="delivery__title">Delivery</h2>

      <div className="delivery__city-block">
        <div className="delivery__city-label">Delivery city</div>

        <div className="delivery__city-row">
          <Dropdown
            options={cityOptions}
            placeholder="Select city"
            value={selectedCity}
            onChange={(name) => {
              const cityId = name as CityId;
              setSelectedCity(cityId);
              handleSelectOption(null);
            }}
            className="delivery__city-dropdown"
          />

          <span className="delivery__city-note">
            Choose your city to see available delivery options and rates.
          </span>
        </div>
      </div>

      <div className="delivery__options-block">
        <div className="delivery__options-header">Delivery methods</div>

        {options.length === 0 && (
          <div className="delivery__empty">
            There are no delivery options available for this city yet.
          </div>
        )}

        <ul className="delivery__options-list">
          {options.map((option) => {
            const isSelected = option.id === selectedOptionId;

            return (
              <li
                key={option.id}
                className={
                  'delivery__option' +
                  (isSelected ? ' delivery__option--selected' : '') +
                  (!option.isAvailable ? ' delivery__option--disabled' : '')
                }
                onClick={() => {
                  if (!option.isAvailable) return;
                  handleSelectOption(option.id);
                }}
              >
                <div className="delivery__option-main">
                  <div className="delivery__option-title">{option.title}</div>
                  <div className="delivery__option-eta">{option.eta}</div>
                </div>

                <div className="delivery__option-side">
                  {option.isAvailable ? (
                    <span className="delivery__option-price">
                      {option.price === 0 ? 'Free' : `$${option.price.toFixed(2)}`}
                    </span>
                  ) : (
                    <span className="delivery__option-unavailable">
                      Not available
                    </span>
                  )}
                </div>

                <div className="delivery__option-description">
                  {option.description}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Delivery;
