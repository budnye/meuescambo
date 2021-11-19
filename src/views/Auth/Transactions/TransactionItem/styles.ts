import { Dimensions } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
const width = Dimensions.get('window').width;
export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 100%;
  /* border: 1px solid red; */
  border-radius: 20px;
  padding: ${RFValue(8)}px;
  background-color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 16px;
`;

export const Title = styled.Text``;
export const DateInfo = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(10)}px;
  align-self: flex-end;
`;
export const InfoBox = styled.View`
  flex-direction: column;
  justify-content: space-around;
  width: ${width * 0.65}px;
  /* border: 1px solid red; */
`;
export const Footer = styled.View``;

export const ProposalBox = styled.View`
  flex-direction: row;
  align-items: baseline;
  /* justify-content: space-between; */
  margin-bottom: 2px;
  flex-wrap: wrap;
`;

export const ProductTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(14)}px;
`;
export const ProductDivider = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(12)}px;
`;
export const MessageBox = styled.View``;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textDark};
  font-size: ${RFValue(12)}px;
  margin-bottom: 3px;
`;

export const AvatarBox = styled.View`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 150px;
  padding: ${RFValue(2)}px;
  margin-right: 16px;
`;

export const Avatar = styled.Image`
  width: ${RFPercentage(10)}px;
  height: ${RFPercentage(10)}px;
  border-radius: 150px;
`;
