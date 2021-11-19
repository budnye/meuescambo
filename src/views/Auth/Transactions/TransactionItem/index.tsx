import React from 'react';

import {
  Container,
  Title,
  AvatarBox,
  Avatar,
  InfoBox,
  ProposalBox,
  ProductTitle,
  DateInfo,
  Footer,
  MessageBox,
  Message,
  ProductDivider,
} from './styles';

export function TransactionItem({ transaction, navigation }) {
  const avatar = require('../../../../assets/avatar/Cat_2.png');
  return (
    <Container
      onPress={() => navigation.navigate('Chat', { id: transaction.id })}
    >
      <AvatarBox>
        <Avatar source={avatar} />
      </AvatarBox>
      <InfoBox>
        <ProposalBox>
          {transaction.proposals.map((proposal, idx) => (
            <ProductTitle numberOfLines={2} key={proposal.id + 'id'}>
              <ProductTitle key={proposal.id}>
                {`${proposal.product.name}`}
              </ProductTitle>
              {idx === 0 && (
                <ProductDivider key="divider"> com </ProductDivider>
              )}
            </ProductTitle>
          ))}
        </ProposalBox>
        <MessageBox>
          <Message>Ou vamos trocar esses items ?</Message>
        </MessageBox>
        <Footer>
          <DateInfo>10/10/2021</DateInfo>
        </Footer>
      </InfoBox>
    </Container>
  );
}
