import React from 'react';
import { Scroll } from '../../views/Default/Login/styles';
import { SelectItem } from './SelectItem';
import { Container, Title, Box } from './styles';
import { Option } from '../../views/Auth/Trade/RegisterProducts/ProductForm/index';

interface Props {
  title: string;
  options: Option[];
  visible: boolean;
  selected: Option;
  onSelect: (option: Option) => void;
}

export function SelectModal({
  visible,
  options,
  title,
  selected,
  onSelect,
}: Props) {
  return (
    <Container visible={visible} animationType="slide" transparent={true}>
      <Box>
        <Title>{title}</Title>
        <Scroll>
          {options &&
            options.length > 0 &&
            options.map((option) => (
              <SelectItem
                key={option.id}
                option={option}
                onPress={onSelect}
                selected={selected?.id === option.id}
              />
            ))}
        </Scroll>
      </Box>
    </Container>
  );
}
