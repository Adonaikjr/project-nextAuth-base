import { Box, Text, styled } from '@ignite-ui/react'

export const Form = styled(Box, {
  display: 'flex',
  gap: '1rem',
  marginTop: '1.5rem',
})

export const FormAlert = styled('div', {
  marginTop: '$2',
  width: '100%',
  [`> ${Text}`]: {
    color: '$gray400',
  },
})
