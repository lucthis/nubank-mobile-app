import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { ThemeContext } from 'styled-components';
import CardContainer from '@components/CardContainer';
import { ThemeValue } from '@theme';
import {
  CardHeader,
  IconContainer,
  IconText,
  CardContent,
  Title,
  Description,
  CardFooter,
  AnnotationIconWrapper,
  Annotation,
} from './styles';

const AccountCard: React.FC = () => {
  const { current: theme } = useContext<ThemeValue>(ThemeContext);

  return (
    <CardContainer>
      <CardHeader>
        <IconContainer>
          <Icon name="wallet" size={22} color={theme.tertiaryIconColor} />
          <IconText>Conta</IconText>
        </IconContainer>
        <Icon name="eye" size={22} color={theme.tertiaryIconColor} />
      </CardHeader>
      <CardContent>
        <Title>Saldo disponível</Title>
        <Description>R$ 1.439,17</Description>
      </CardContent>
      <CardFooter>
        <AnnotationIconWrapper>
          <Icon name="arrow-down-circle" size={22} color={theme.primaryColor} />
        </AnnotationIconWrapper>
        <Annotation>
          Transferência de R$ 20,00 recebida hoje de Dayane Gandos
        </Annotation>
        <AnnotationIconWrapper>
          <Icon name="arrow-right" size={10} color={theme.tertiaryIconColor} />
        </AnnotationIconWrapper>
      </CardFooter>
    </CardContainer>
  );
};

export default AccountCard;
