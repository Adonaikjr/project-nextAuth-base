import { Heading, Text, styled } from '@ignite-ui/react'

export const ContainerHome = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$20',
  justifyContent: 'center',
  height: '100vh',
})
export const ContainerLeft = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0rem $10',
  maxWidth: 490,
  '@media(max-width: 600px)': {
    padding: '0.5rem',
    justifyContent: 'center',
    textAlign: 'center',
    [`${Heading}`]: {
      fontSize: '$6xl',
    },
    [`${Text}`]: {
      marginTop: '$2',
      color: '$gray200',
    },
  },
})
export const ContainerRight = styled('div', {
  overflow: 'hidden',
  '@media(max-width: 600px)': {
    display: 'none',
  },
})
