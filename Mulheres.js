const express = require("express")
const router = express.Router()


const porta = 3333
const app= express()

const Mulheres = [

       {
        Nome: 'Evelyn Siles',
        Imagem: 'https://encr.pw/EveSiles',
        Bio: 'Profissional Graduada em Gerenciamento de Redes.'        
       },
       {
        Nome: 'Priscila Thorrecilha',
        Imagem: 'https://encr.pw/PriscilaT',
        Bio: 'Psicóloga em Formação'
       },    
       {
        Nome: 'Ariene Koike',
        Imagem: 'https://encr.pw/ARIENEYK',
        Bio:'Analista de Suporte, em processo de migração para área de Quality Assure',
      }
]

function mostraMulheres (request, response) {
      response.json(Mulheres)}


function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta);
}
app.use(router.get ('/Mulheres' , mostraMulheres))
app.listen(porta, mostraPorta)
