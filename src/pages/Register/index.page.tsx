import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { ContainerHeader, ContainerRegister, Form, FormAlert } from './styled'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { api } from '@/lib/axios'

const propsShemaValidade = z.object({
  username: z
    .string()
    .min(3, { message: 'Digite mais caracteres' })
    .regex(/^([a-z\\-]+)$/i, { message: 'Precisa conter apenas letras' })
    .transform((item) => item.toLowerCase()),
  name: z.string().min(3, { message: 'nome precisa de mais caracteres' }),
})

type propTypes = z.infer<typeof propsShemaValidade>

export default function Register() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<propTypes>({
    resolver: zodResolver(propsShemaValidade),
  })

  const router = useRouter()

  useEffect(() => {
    // pegando query params e convertendo para string
    if (router.query.username) {
      setValue('username', String(router.query.username))
    }
  }, [router.query?.username, setValue])

  async function handleRegister(data: propTypes) {
    try {
      await api.post('/users', {
        nome: data.name,
        userName: data.username,
      })
      await router.push('/Register/connect-calendar')
    } catch (error: any) {
      return alert(error.response.data.message)
    }
  }

  return (
    <ContainerRegister>
      <ContainerHeader>
        <Heading as="strong">Bem vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>
        <MultiStep size={4} currentStep={1} />
      </ContainerHeader>
      <Form as="form" onSubmit={handleSubmit(handleRegister)}>
        <label>
          <Text size="sm">Nome de Usuario</Text>
          <TextInput
            prefix="ignite.com/"
            placeholder="nome de usuario"
            {...register('username')}
          />
          {errors.username && (
            <FormAlert size="sm">{errors.username?.message} </FormAlert>
          )}
        </label>
        <label>
          <Text size="sm">Nome Completo</Text>
          <TextInput placeholder="nome de usuario" {...register('name')} />
        </label>
        {errors.name && (
          <FormAlert size="sm">{errors.name?.message} </FormAlert>
        )}
        <Button type="submit" disabled={isSubmitting}>
          Próximo Passo <ArrowRight />
        </Button>
      </Form>
    </ContainerRegister>
  )
}
