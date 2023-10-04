import { Box, Heading, Text, styled } from '@ignite-ui/react'

export const ContainerRegister = styled('main', {
  maxWidth: 572,
  margin: '$20 auto $4',
  padding: '0 $4',
})

export const ContainerHeader = styled('div', {
  padding: '0 $6',
  [`> ${Heading}`]: {
    lineHeight: '$base',
  },
  [`> ${Text}`]: {
    color: '$gray200',
    marginBottom: '$6',
  },
})

export const Form = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },
})

export const FormAlert = styled(Text, {
  color: '#f75a68',
})
