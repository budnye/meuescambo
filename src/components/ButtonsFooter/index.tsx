import React from 'react';
import theme from '../../global/styles/theme';
import { CardButton } from '../CardButton';

import { Footer } from './styles';
interface ButtonProps {
  likeAction?: () => void;
  dislikeAction?: () => void;
  favoriteAction?: () => void;
}
export function ButtonsFooter({ likeAction, dislikeAction, favoriteAction }: ButtonProps) {
  return(
  <Footer>
    <CardButton name="close" color={theme.colors.danger} onPress={dislikeAction}/>
    <CardButton name="star" color={theme.colors.info} type="small" onPress={favoriteAction}/>
    <CardButton name="heart" color={theme.colors.success} onPress={likeAction}/>
  </Footer>
  );
};