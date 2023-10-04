import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import {
  ContainerHeader,
  ContainerRegister as ContainerConnectCalendar,
  Form,
  FormAlert,
} from '../styled'
import { ArrowRight, Check } from 'phosphor-react'
import { AlertError, ConnectBox, ConnectItem } from './styled'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function ConnectCalendar() {
  const session = useSession()
  const router = useRouter()
  console.log(session)
  const hasAuthError = !!router.query.error

  const hasSignIn = session.status === 'authenticated'

  async function handleConnectCalendar() {
    await signIn('google')
  }

  return (
    <ContainerConnectCalendar>
      <ContainerHeader>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>
        <MultiStep size={4} currentStep={2} />
      </ContainerHeader>
      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          {hasSignIn ? (
            <Button variant="secondary" size="sm" disabled>
              Conectado <Check />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleConnectCalendar}
            >
              Conectar <ArrowRight />
            </Button>
          )}
        </ConnectItem>
        {hasAuthError && (
          <AlertError>
            Falha ao se conectar ao Google, verifique se você habilitou as
            permissões de acesso ao Google Calendar.
          </AlertError>
        )}
        <Button type="submit" disabled={!hasSignIn}>
          Próximo Passo <ArrowRight />
        </Button>
      </ConnectBox>
    </ContainerConnectCalendar>
  )
}
