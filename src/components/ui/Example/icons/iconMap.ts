import HomeSvg from './svgs/home.svg?react';
// import SearchSvg from './svgs/search.svg?react';
import MailSvg from './svgs/mail.svg?react';
import HeartSvg from './svgs/heart.svg?react';
import HeartFilledSvg from './svgs/heart-filled.svg?react';
import MinusSvg from './svgs/minus.svg?react';
import PlusSvg from './svgs/plus.svg?react';
import XSvg from './svgs/x.svg?react';
import ChevronLeftSvg from './svgs/chevron-left.svg?react';
import ChevronRightSvg from './svgs/chevron-right.svg?react';
import ChevronDownSvg from './svgs/chevron-down.svg?react';
import ChevronUpSvg from './svgs/chevron-up.svg?react';
import MenuSvg from './svgs/menu.svg?react';

export const iconMap = {
  home: HomeSvg,
//   search: SearchSvg,
  mail: MailSvg,
  heart: HeartSvg,
  'heart-filled': HeartFilledSvg,
  minus: MinusSvg,
  plus: PlusSvg,
  x: XSvg,
  'chevron-left': ChevronLeftSvg,
  'chevron-right': ChevronRightSvg,
  'chevron-down': ChevronDownSvg,
  'chevron-up': ChevronUpSvg,
  menu: MenuSvg,
};

export type IconName = keyof typeof iconMap;