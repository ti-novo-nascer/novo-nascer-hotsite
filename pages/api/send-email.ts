import { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    name,
    email,
    phone,
    city,
    healthPlan,
    details
  } = req.body

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const message = {
    to: 'contato@novonascer.com.br',
    from: 'ti@novonascer.com.br',
    subject: 'CONTATO DE CLIENTE',
    html: `
      Nome: ${name}<br/>
      Email: ${email}<br/>
      Telefone: ${phone}<br/>
      Cidade: ${city}<br/>
      Plano de Saúde: ${healthPlan}<br/>
      Detalhes: ${details}
    `
  }

  sgMail
    .send(message)
    .then(() => {
      res.status(200).send('Mensagem enviada com sucesso')
      console.log('Email enviado')
    })
    .catch((err) => {
      res.status(400).send('Erro ao enviar a mensagem')
      console.log('Erro: ', err)
    })
}
