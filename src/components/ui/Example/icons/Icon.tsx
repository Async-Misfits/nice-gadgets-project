import React from 'react';
import { iconMap, type IconName } from './iconMap';
import type { IconProps } from './types';
import './Badge.scss';

interface CustomIconProps extends IconProps {
  name: IconName;
  badgeCount?: number;
}

export const Icon: React.FC<CustomIconProps> = ({ 
  name, 
  size = 16, 
  badgeCount,
  ...props
}) => {
  const SvgComponent = iconMap[name];

  if (!SvgComponent) {
    console.warn(`Icon with name "${name}" not found.`);
    return null;
  }

  const iconElement = <SvgComponent width={size} height={size} {...props} />;

  if (badgeCount && badgeCount > 0) {
    return (
      <div className="badge-wrapper">
        {iconElement}
        <span className="badge-item">
          {badgeCount > 99 ? '99+' : badgeCount}
        </span>
      </div>
    );
  }

  return iconElement;
};