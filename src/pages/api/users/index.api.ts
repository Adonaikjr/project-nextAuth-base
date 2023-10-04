import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { nome, userName } = req.body

  const checkUserExist = await prisma.user.findUnique({
    where: {
      userName,
    },
  })

  if (checkUserExist) {
    return res.status(400).json({ message: 'Usuario já existe' })
  }

  const user = await prisma.user.create({
    data: {
      nome,
      userName,
    },
  })
  setCookie({ res }, '@myApp:userId', user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 dias
    path: '/',
  })
  return res.status(201).json(user)
}
