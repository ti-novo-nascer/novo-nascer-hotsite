import { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'
import emailTemplate from '../../utils/email-template'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { host } = req.headers

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
    // to: 'contato@novonascer.com.br',
    to: 'luc.kasnix@gmail.com',
    from: 'ti@novonascer.com.br',
    subject: 'CONTATO DE CLIENTE',
    html: emailTemplate(host, name, email, phone, city, healthPlan, details)
  }

  sgMail
    .send(message)
    .then(() => {
      res.status(200).send('Mensagem enviada com sucesso')
    })
    .catch((err) => {
      console.log(err)
      res.status(400).send('Erro ao enviar a mensagem')
    })
}
