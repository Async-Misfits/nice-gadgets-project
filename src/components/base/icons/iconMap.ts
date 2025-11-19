import HomeSvg from '../../../../public/icons/home.svg?react';
// import SearchSvg from '../../../../../public/icons/search.svg?react';
import MailSvg from '../../../../public/icons/mail.svg?react';
import HeartSvg from '../../../../public/icons/heart.svg?react';
import HeartFilledSvg from '../../../../public/icons/heart-filled.svg?react';
import MinusSvg from '../../../../public/icons/minus.svg?react';
import PlusSvg from '../../../../public/icons/plus.svg?react';
import XSvg from '../../../../public/icons/x.svg?react';
import ChevronLeftSvg from '../../../../public/icons/chevron-left.svg?react';
import ChevronRightSvg from '../../../../public/icons/chevron-right.svg?react';
import ChevronDownSvg from '../../../../public/icons/chevron-down.svg?react';
import ChevronUpSvg from '../../../../public/icons/chevron-up.svg?react';
import MenuSvg from '../../../../public/icons/menu.svg?react';
import LogoSvg from '../../../../public/icons/Logo.svg?react';

export const iconMap = {
  'home': HomeSvg,
  //   search: SearchSvg,
  'mail': MailSvg,
  'heart': HeartSvg,
  'heart-filled': HeartFilledSvg,
  'minus': MinusSvg,
  'plus': PlusSvg,
  'x': XSvg,
  'chevron-left': ChevronLeftSvg,
  'chevron-right': ChevronRightSvg,
  'chevron-down': ChevronDownSvg,
  'chevron-up': ChevronUpSvg,
  'menu': MenuSvg,
  'logo': LogoSvg,
};

export type IconName = keyof typeof iconMap;
