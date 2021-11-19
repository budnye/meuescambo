import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text``;

export const MessageView = styled.View`
  flex-direction: ${({ sender }) => (sender ? 'row' : 'row-reverse')};
  align-items: flex-end;
  width: 100%;
`;

export const Logo = styled.Image`
  width: ${RFPercentage(6)}px;
  height: ${RFPercentage(6)}px;
  border-radius: 150px;
`;

export const Card = styled.View`
  max-width: 63%;
  margin-top: 12px;
  margin-left: 8px;
  border-radius: 16px;
  box-shadow: 3px 3px 3px #eee;
  background: ${({ theme, sender }) =>
    sender ? theme.colors.background : theme.colors.secondary};
`;

export const Text = styled.Text`
  font-size: ${RFValue(18)}px;
  line-height: 24px;
  margin-top: 12px;
  margin-bottom: 12px;
  margin-left: 12px;
  margin-right: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textDark};
`;

export const AvatarBox = styled.View`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 150px;
  padding: ${RFValue(2)}px;
  margin-right: 8px;
  margin-left: 8px;
`;

export const Avatar = styled.Image`
  width: ${RFPercentage(10)}px;
  height: ${RFPercentage(10)}px;
`;
