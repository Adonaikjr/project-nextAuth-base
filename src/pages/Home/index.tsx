import { Heading, Text, getCssText } from '@ignite-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { ContainerHome, ContainerLeft, ContainerRight } from './styled'
import ImagePreview from '../../assets/app-preview.png'
import { UserNameForm } from './components/UserNameForm'
export default function Home() {
  return (
    <ContainerHome>
      <ContainerLeft>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="lg">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <UserNameForm />
      </ContainerLeft>

      <ContainerRight>
        <Image
          src={ImagePreview}
          height={400}
          quality={100}
          priority
          alt="preview-app"
        />
      </ContainerRight>
    </ContainerHome>
  )
}
