import HomeSvg from '@/icons/home.svg?react';
// import SearchSvg from '/public/icons/search.svg?react';
import MailSvg from '@/icons/mail.svg?react';
import HeartSvg from '@/icons/heart.svg?react';
import HeartFilledSvg from '@/icons/heart-filled.svg?react';
import MinusSvg from '@/icons/minus.svg?react';
import PlusSvg from '@/icons/plus.svg?react';
import XSvg from '@/icons/x.svg?react';
import ChevronLeftSvg from '@/icons/chevron-left.svg?react';
import ChevronRightSvg from '@/icons/chevron-right.svg?react';
import ChevronDownSvg from '@/icons/chevron-down.svg?react';
import ChevronUpSvg from '@/icons/chevron-up.svg?react';
import MenuSvg from '@/icons/menu.svg?react';
import LogoSvg from '@/icons/Logo.svg?react';

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
