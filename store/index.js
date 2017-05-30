export const state = {
  quiz: [
    {
      name: 'nomes',
      quizzes: [
        {
          id: '1',
          name: 'Qual princesa Disney você seria?',
          description: 'Realize um teste rápido e descubra, se você estivesse no universo Disney, qual princesa mais se identificaria com você.',
          link: 'princesa-disney',
          questions: [
            {
              question: 'Quais seriam suas férias ideais?',
              answers: [
                'Ir para um acampamento',
                'Lugares que eu possa passar um tempo sem ninguém por perto',
                'Ir visitar meus pais!',
                'Qualquer lugar, contanto que esteja com meus amigos',
                'Viajar pelo mundo',
                'Roles culturais, como ir a museus e etc.',
                'Qualquer lugar para poder sair da rotina!',
                'Algum lugar que eu possa me conectar com meu lado espiritual'
              ]
            },
            {
              question: 'Qual seria seu Final de Semana ideal?',
              answers: [
                'Andar de bicicleta, fazer uma caminhada, etc.',
                'Visitar minha família',
                'Um Netflix em casa',
                'Uma festa com a galera',
                'Um rolê pela cidade',
                'Estudando algo novo, investindo tempo em meus projetos',
                'Um parque aquático',
                'Piquenique no parque'
              ]
            },
            {
              question: 'Qual seria seu lugar favorito para comer?',
              answers: [
                'Comida asiática',
                'Nada melhor que nossa própria casa!',
                'Algum lugar com uma bela vista',
                'Um lugar legal pra levar a galera e dividir a comida',
                'Restaurantes locais, para experimentar coisas novas',
                'Um café, onde eu possa também ler ou usar meu computador',
                'Algum restaurante chique!',
                'Ir num vegetariano/vegano'
              ]
            },
            {
              question: 'O que você imagina para seu futuro?',
              answers: [
                'Qualquer coisa, contanto que seja uma escolha minha e que eu seja bom naquilo',
                'Quero crescer profissionalmente!',
                'Quero morar perto da minha família',
                'Quero poder continuar próximo das pessoas que importam pra mim',
                'Quero viajar todo o mundo!',
                'Terminando meu doutorado!',
                'Quero montar uma família e me mudar para longe de onde cresci',
                'Quer poder ter vários animais de estimação'
              ]
            },
            {
              question: 'Qual a profissão dos seus sonhos?',
              answers: [
                'Atleta',
                'Cargo público',
                'Crítica de obras de arte',
                'Promotora de eventos',
                'Aeromoça',
                'Professora',
                'Viver da minha arte',
                'Bióloga'
              ]
            }
          ],
          results: ['Mulan', 'Elsa', 'Rapunzel', 'Branca de Neve', 'Jasmine', 'Bela', 'Ariel', 'Pocahontas'],
          done: false
        },
        {
          id: '2',
          name: 'Quiz 2',
          link: '2'
        },
        {
          id: '3',
          name: 'Quiz 3',
          link: '3'
        },
        {
          id: '4',
          name: 'Quiz 4',
          link: '4'
        },
        {
          id: '5',
          name: 'Quiz 5',
          link: '5'
        }
      ]
    },
    {
      name: 'datas',
      quizzes: [
        {
          id: '1',
          name: 'Quiz 1',
          link: '123'
        },
        {
          id: '2',
          name: 'Quiz 2',
          link: '123'
        },
        {
          id: '3',
          name: 'Quiz 3',
          link: '123'
        }
      ]
    },
    {
      name: 'personalidades',
      quizzes: [
        {
          id: '1',
          name: 'Quiz 1',
          link: '123'
        },
        {
          id: '2',
          name: 'Quiz 2',
          link: '123'
        },
        {
          id: '3',
          name: 'Quiz 3',
          link: '123'
        },
        {
          id: '4',
          name: 'Quiz 4',
          link: '123'
        }
      ]
    }
  ]
}

export const mutations = {
  setAsDone (category, quiz) {
    const toBeSet = state.quiz[category].quizzes.filter(q => q.id === quiz)[0]
    toBeSet.done = true
  }
}

export const actions = {}
