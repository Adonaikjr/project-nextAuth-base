import { Button, Text, TextInput } from '@ignite-ui/react'
import { Form, FormAlert } from './styled'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'

const PropsSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Digite mais caracteres' })
    .regex(/^([a-z\\-]+)$/i, { message: 'Precisa conter apenas letras' })
    .transform((item) => item.toLowerCase()),
})

type propsForm = z.infer<typeof PropsSchema>

export function UserNameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<propsForm>({
    resolver: zodResolver(PropsSchema),
  })

  const router = useRouter()

  async function handlePreRegister(data: propsForm) {
    const { username } = data
    await router.push(`/Register?username=${username}`)
  }
  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handlePreRegister)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="usuario"
          {...register('username')}
        />
        <Button size="sm" type="submit" disabled={isSubmitting}>
          Reservar
          <ArrowRight />
        </Button>
      </Form>
      <FormAlert>
        <Text>
          {errors.username
            ? errors.username?.message
            : 'Digite um nome de usuário'}
        </Text>
      </FormAlert>
    </>
  )
}
