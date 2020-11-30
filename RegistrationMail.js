import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  options: {
    delay: 5000,
    priority: 3
  },
  async handle({ data }){
    const { user } = data;


    await Mail.sendMail({
      from: 'Backgrond-Jobs <email@email.com>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de Usuário',
      html: `Bom, ${user.name}, esta é a sua senha: ${user.password}.`
    })
  }
}
