import axios from 'axios'

export const state = {
  quiz: [
    {
      'name': 'personalidades',
      'quizzes': [
        {
          'id': '1',
          'name': 'Qual princesa Disney você seria?',
          'description': 'Realize um teste rápido e descubra, se você estivesse no universo Disney, qual princesa mais se identificaria com você.',
          'link': 'qual-princesa-da-disney-voce-seria',
          'questions': [
            {
              'question': 'Quais seriam suas férias ideais?',
              'answers': [
                'Ir para um acampamento',
                'Lugares que eu possa passar um tempo sem ninguém por perto',
                'Ir visitar meus pais!',
                'Qualquer lugar, contanto que esteja com meus amigos',
                'Viajar pelo mundo',
                'Roles culturais, como ir a museus e etc...',
                'Qualquer lugar para poder sair da rotina!',
                'Algum lugar que eu possa me conectar com meu lado espiritual'
              ]
            },
            {
              'question': 'Qual seria seu Final de Semana ideal?',
              'answers': [
                'Andar de bicicleta, fazer uma caminhada, etc...',
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
              'question': 'Qual seria seu lugar favorito para comer?',
              'answers': [
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
              'question': 'O que você imagina para seu futuro?',
              'answers': [
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
              'question': 'Qual a profissão dos seus sonhos?',
              'answers': [
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
          'results': [
            {
              'result': 'Mulan',
              'description': 'Você é a atlética do grupo. Vai pra academia todos os dias e de final de semana se exercita no parque. Se for determinada e curtir culinária asiática, você pode ser literalmente a própria reincarnação da Mulan!'
            },
            {
              'result': 'Elsa',
              'description': 'A fria do grupo. Não anda muito com os amigos porque prefere passar o final de semana em eventos da família ou trabalhando.'
            },
            {
              'result': 'Rapunzel',
              'description': 'A avoada do grupo. Você não vê problema em trocar uma noite de balada por um programinha em casa de baixo das cobertas, nem mesmo se for só com o pessoal da sua casa ou até mesmo sozinha.'
            },
            {
              'result': 'Branca de Neve',
              'description': 'A baladeira do grupo. Vive rodeada de gente e quer mandar em tudo. Existe uma lenda que você talvez durma para descansar as vezes aos finais de semana, mas ninguém jamais comprovou tal teoria.'
            },
            {
              'result': 'Jasmine',
              'description': 'A aventureira do grupo. Come a coxinha de cinquenta centavos do boteco da esquina e sonha em fazer um mochilão por um país que nem fala a língua com 10 reais na conta bancária.'
            },
            {
              'result': 'Bela',
              'description': 'A nerd do grupo. Deixa de sair com as amigas porque tem prova na segunda. Aparece no rolê para discussões filosóficas ou discutir história.'
            },
            {
              'result': 'Ariel',
              'description': 'A revoltada do grupo. Briga com os pais e sonha em conseguir um emprego dos sonhos e se sustentar sozinha bem longe de casa.'
            },
            {
              'result': 'Pocahontas',
              'description': 'A hippie do grupo. Tem vontade de largar o emprego e sair de casa pra viver da comida que planta, água e luz solar.'
            }
          ],
          'done': false
        },
        {
          'id': '2',
          'name': 'Qual é a sua profissão coxinha?',
          'description': 'Realize um teste rápido e descubra qual é a sua profissão coxinha.',
          'link': 'qual-e-a-sua-profissao-coxinha',
          'questions': [
            {
              'question': 'Qual sua opinião sobre trabalhar em grupo?',
              'answers': [
                'Odeio. No fim, sempre sou eu quem estou certo mesmo',
                'Depende, mas prefiro grupos pequenos com pessoas qualificadas',
                'Geralmente pergunto a opinião alheia, mas a palavra final é minha',
                'É muito importante! Nada vai pra frente sem trabalho em grupo',
                'É importante, mas é sempre bom ter alguém para liderar'
              ]
            },
            {
              'question': 'Qual o seu objetivo de vida?',
              'answers': [
                'Já alcancei todos os meus objetivos',
                'Ganhar muito dinheiro!',
                'Ser o melhor no que faço',
                'Conseguir concilicar minha vida profissional e pessoal!',
                'Crescer muito profissionalmente!'
              ]
            },
            {
              'question': 'E como você alcançará/alcançou seus objetivos?',
              'answers': [
                'Graças ao meu esforço',
                'Fazendo as melhores faculdades e cursos possíveis!',
                'Graças ao meu talento',
                'Procurando as melhores oportunidades!',
                'Com a ajuda e apoio das pessoas que conheço'
              ]
            },
            {
              'question': 'Qual sua relação com seu trabalho?',
              'answers': [
                'Não tenho problemas de trabalhar muitas horas a mais se necessário',
                'É simples quando temos uma boa base teórica para nos dar suporte',
                'É crucial buscar todas as variáveis possíveis para evitar erros',
                'É importante, mas existe muito mais para se viver além do trabalho!',
                'Ter conhecimento é importante, mas não tanto quanto conhecer pessoas que o reconheça!'
              ]
            }
          ],
          'results': [
            {
              'result': 'Médico',
              'description': 'Você é um Deus. Ou pelo menos acha que é um. Acredita que o mundo gira em torno de suas vontades e que todos devem se curvar à sua presença. Na verdade não aceita o fato de que ser chamado de "doutor" é só para pessoas que possuem doutorado.'
            },
            {
              'result': 'Engenheiro',
              'description': 'Você queria ser rico, e conseguiu. Ganha uma fortuna como estagiário enquanto na faculdade está na batalha pra passar em cálculo um depois de 5 tentativas.'
            },
            {
              'result': 'Advogado',
              'description': 'Você passou muito tempo assistindo séries ou jogando jogos de advocacia. Você sonha em conseguir resolver qualquer situação, mas no fundo nunca será um Harvey Dent, nem um Phoenix Wright e muito menos uma Annalise Keating.'
            },
            {
              'result': 'Administrador',
              'description': 'Você até tem um lado artístico, mas não queria ser pobre. Então escolheu um curso que não fosse muito focado nos seus pontos fracos e agora desfruta de milhares de opções de cargos diferentes graças ao seu curso.'
            },
            {
              'result': 'Empresário',
              'description': 'Ninguém sabe de onde veio o seu dinheiro, mas de alguma forma você tem bastante. Já que tem de sobra, você investe seu dinheiro em formas de multiplicá-lo.'
            }
          ],
          'done': false
        },
        {
          'id': '3',
          'name': 'Qual é sua profissão mortadela?',
          'description': 'Realize um teste rápido e descubra qual é a sua profissão mortadela.',
          'link': 'qual-e-a-sua-profissao-mortadela',
          'questions': [
            {
              'question': 'Qual sua opinião sobre trabalhar em grupo?',
              'answers': [
                'Sei trabalhar em grupo, mas o importante é entender as necessidades do cliente',
                'Depende, mas prefiro grupos pequenos com pessoas qualificadas',
                'Ahh, sei lá, tanto faz se pá',
                'É muito importante! Nada vai pra frente sem trabalho em grupo',
                'Prefito trabalhar sozinho. No máximo em duplas'
              ]
            },
            {
              'question': 'Qual o seu objetivo de vida?',
              'answers': [
                'Ajudar a criar um mundo melhor para as pessoas',
                'Acabar com a desigualdade social através da educação',
                'Ajudar a salvar o planeta terra das atrocidades cometidas pelo homem!',
                'Ser o melhor no que faço',
                'Ser reconhecido pelo que eu faço!'
              ]
            },
            {
              'question': 'E como você pretende chegar em seus objetivos?',
              'answers': [
                'Tentando e aprendendo com meus erros',
                'Muito estudo através da leitura de muitos livros!',
                'Buscando referências com outros profissionais da minha área',
                'Praticando muito o que eu faço!',
                'Sempre experimentando novas formas de melhorar!'
              ]
            },
            {
              'question': 'Qual sua relação com seu trabalho?',
              'answers': [
                'É importante fazer o bem para todos!',
                'É importante ter foco e determinação para chegarmos aos melhores resultados',
                'Temos que nos conhecer bem para sabermos a melhor hora para se trabalhar',
                'É importante para me satisfazer profissionalmente',
                'É importante ser reconhecido pelo nosso trabalho'
              ]
            }
          ],
          'results': [
            {
              'result': 'Designer',
              'description': 'Você realmente acredita que pode resolver o problema de todo mundo, mas na verdade ainda não conseguiu fazer seu chefe entender que as portas de empurrar só precisam ter maçanetas do lado dentro.'
            },
            {
              'result': 'Historiador',
              'description': 'Você gosta de ler e acredita que a educação pode mudar o mundo, mas ainda não conseguiu convencer seu primo de segundo grau que "bandido bom não é bandido morto" e nem que "não existe isso de direitos humanos para humanos direitos"...'
            },
            {
              'result': 'Biólogo',
              'description': 'Você quer salvar os bichinhos e plantinhas do mundo todo, mas ainda está estudando uma forma de viver em algum lugar distante sem precisar de ajuda financeira de ninguém.'
            },
            {
              'result': 'Músico',
              'description': 'Você nasceu pra trabalhar e estudar muito e não conseguir pagar as contas no fim do mês. E ainda tem que aguentar a família te comparando com seu primo que está fazendo algum outro curso mais rentável.'
            },
            {
              'result': 'Artista Plástico',
              'description': 'Você nasceu pra ser pobre, mas acredita que dinheiro não é tudo nessa vida. Se mete em brigas ferrenhas com familiares para discutir o que é e o que não é arte...'
            }
          ],
          'done': false
        },
        {
          'id': '4',
          'name': 'Qual personagem de Sense8 você seria?',
          'description': 'Realize um teste rápido e descubra, se você estivesse no universo de Sense8, qual personagem mais se identificaria com você.',
          'link': 'qual-personagem-de-sense8-voce-seria',
          'questions': [
            {
              'question': 'Quais seriam suas férias ideais?',
              'answers': [
                'Viajar pelo mundo',
                'Lugares que eu possa passar um tempo sem ninguém por perto',
                'Roles culturais, como ir a museus e etc...',
                'Ir visitar meus pais!',
                'Qualquer lugar para poder sair da rotina!',
                'Qualquer lugar, contanto que esteja com meus amigos',
                'Ir para um acampamento',
                'Algum lugar que eu possa me conectar com meu lado espiritual'
              ]
            },
            {
              'question': 'Qual seria seu Final de Semana ideal?',
              'answers': [
                'Um rolê pela cidade',
                'Visitar minha família',
                'Estudando algo novo, investindo tempo em meus projetos',
                'Um Netflix em casa',
                'Um parque aquático',
                'Uma festa com a galera',
                'Andar de bicicleta, fazer uma caminhada, etc.',
                'Piquenique no parque'
              ]
            },
            {
              'question': 'Qual seria seu lugar favorito para comer?',
              'answers': [
                'Restaurantes locais, para experimentar coisas novas',
                'Nada melhor que nossa própria casa!',
                'Um café, onde eu possa também ler ou usar meu computador',
                'Algum lugar com uma bela vista',
                'Algum restaurante chique!',
                'Um lugar legal pra levar a galera e dividir a comida',
                'Comida asiática',
                'Ir num vegetariano/vegano'
              ]
            },
            {
              'question': 'O que você imagina para seu futuro?',
              'answers': [
                'Quero viajar todo o mundo!',
                'Quero crescer profissionalmente!',
                'Terminando meu doutorado!',
                'Quero morar perto da minha família',
                'Quero montar uma família e me mudar para longe de onde cresci',
                'Quero poder continuar próximo das pessoas que importam pra mim',
                'Qualquer coisa, contanto que seja uma escolha minha e que eu seja bom naquilo',
                'Quer poder ter vários animais de estimação'
              ]
            },
            {
              'question': 'Qual a profissão dos seus sonhos?',
              'answers': [
                'Área de transportes',
                'Cargo público',
                'Professora',
                'Crítico de obras de arte',
                'Viver da minha arte',
                'Promotor de eventos',
                'Atleta',
                'Bióloga'
              ]
            }
          ],
          'results': [
            {
              'result': 'Capheus',
              'description': 'O pé-rapado do cluster. Trabalha quinze horas por dia pra ter dinheiro pra janta e pra ajudar em casa. Sonha e se esforça para ter uma vida melhor, pra ele e principalmente pros pais.'
            },
            {
              'result': 'Will',
              'description': 'O bom filho que ama os pais, cresceu sendo atleta e ainda resolveu seguir os passos do pai na profissão. É um cara legal, mas é tão legal que é a personificação do termo "bonzinho só se dá mal".'
            },
            {
              'result': 'Nomi',
              'description': 'A nerd do cluster. Ninguém sabe como é tão inteligente e nem o que faz da vida, mas talvez seja mais seguro nem saber.'
            },
            {
              'result': 'Riley',
              'description': 'A pessoa aleatória do cluster. Ninguém sabe muito bem o que você faz e como se sustenta, mas é uma amiga fiel, além de se dar muito bem com o papai e com a mamãe.'
            },
            {
              'result': 'Lito',
              'description': 'O artista do cluster. Cresceu achando que ser diferente é errado, então não é à toa que quer ir pra bem longe desses lugares o mais rápido possível.'
            },
            {
              'result': 'Wolfgang',
              'description': 'O baladeiro do cluster. Não tem muitos amigos, mas entra em briga feia se mexem com eles.'
            },
            {
              'result': 'Sun',
              'description': 'A atleta do cluster. É competitiva e pode até gostar de dar umas porradas nos outros às vezes. Pode ter uns problemas na família, mas né, quem não tem?'
            },
            {
              'result': 'Kala',
              'description': 'A religiosa natureba do clueter que não come carne porque não quer ver nenhum animal sofrer. Mas no fundo, as vezes dá a louca porque viver uma vida diferente.'
            }
          ],
          'done': false
        }
      ]
    },
    {
      name: 'nomes',
      quizzes: [
        {
          id: 0,
          name: 'Filme Anos 80',
          description: 'asdsad',
          link: 'filme-anos-80',
          result: {
            month: ['Adoidado', 'Assassino', ''],
            days: [],
            years: []
          }
        }
      ]
    },
    {name: 'datas', quizzes: []}
  ],
  login: {
    loggedIn: false,
    provider: 'none',
    user: {}
  }
}

export const mutations = {
  setAsDone (state, payload) {
    const {category, id} = payload
    const toBeSet = state.quiz.filter(q => q.name === category)[0].quizzes.filter(q => q.link === id)[0]
    toBeSet.done = true
  }
}

export const actions = {
  login ({commit, state}) {
    axios.get('http://localhost:3000/api/auth/me')
      .then(response => {
        const provider = response.data.provider
        if (provider === 'facebook') {
          state.login.provider = 'facebook'
          state.login.avatarImage = `https://graph.facebook.com/${response.data.id}/picture?type=large`
          state.login.user = response.data
          state.login.loggedIn = true
        } else if (provider === 'google') {
          state.login.provider = 'google'
          state.login.avatarImage = response.data.photos[0].value.replace('sz=50', 'sz=250')
          state.login.user = response.data
          state.login.loggedIn = true
        }
      })
      .catch(err => console.log(err))
  }
}

export const getters = {
  getCompletionPercentage (state) {
    let totalQuiz = state.quiz.reduce((acc, val) => {
      acc += val.quizzes.length
      return acc
    }, 0)
    let completedQuiz = state.quiz.reduce((acc, val) => {
      let count = 0
      val.quizzes.forEach(q => {
        if (q.done) count++
      })
      acc += count
      return acc
    }, 0)
    return Math.ceil((completedQuiz / totalQuiz) * 100)
  },
  getUser (state) {
    return state.login
  }
}
