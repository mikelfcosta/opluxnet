import axios from 'axios'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = new Vuex.Store({
  state: {
    quiz: [
      {
        name: 'personalidades',
        icon: 'ico-personality',
        quizzes: [
          {
            id: '1',
            name: 'Qual princesa Disney você seria?',
            abv: 'PD',
            description: 'Realize um teste rápido e descubra, se você estivesse no universo Disney, qual princesa mais se identificaria com você.',
            link: 'qual-princesa-da-disney-voce-seria',
            image: 'quiz_disney.png',
            questions: [
              {
                question: 'Quais seriam suas férias ideais?',
                answers: [
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
                question: 'Qual seria seu Final de Semana ideal?',
                answers: [
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
            results: [
              {
                result: 'Mulan',
                description: 'Você é a atlética do grupo. Vai pra academia todos os dias e de final de semana se exercita no parque. Se for determinada e curtir culinária asiática, você pode ser literalmente a própria reincarnação da Mulan!',
                img: 'disney_mulan.png'
              },
              {
                result: 'Elsa',
                description: 'A fria do grupo. Não anda muito com os amigos porque prefere passar o final de semana em eventos da família ou trabalhando.',
                img: 'disney_elsa.png'
              },
              {
                result: 'Rapunzel',
                description: 'A avoada do grupo. Você não vê problema em trocar uma noite de balada por um programinha em casa de baixo das cobertas, nem mesmo se for só com o pessoal da sua casa ou até mesmo sozinha.',
                img: 'disney_rapunzel.png'
              },
              {
                result: 'Branca de Neve',
                description: 'A baladeira do grupo. Vive rodeada de gente e quer mandar em tudo. Existe uma lenda que você talvez durma para descansar as vezes aos finais de semana, mas ninguém jamais comprovou tal teoria.',
                img: 'disney_branca.png'
              },
              {
                result: 'Jasmine',
                description: 'A aventureira do grupo. Come a coxinha de cinquenta centavos do boteco da esquina e sonha em fazer um mochilão por um país que nem fala a língua com 10 reais na conta bancária.',
                img: 'disney_jasmine.png'
              },
              {
                result: 'Bela',
                description: 'A nerd do grupo. Deixa de sair com as amigas porque tem prova na segunda. Aparece no rolê para discussões filosóficas ou discutir história.',
                img: 'disney_bela.png'
              },
              {
                result: 'Ariel',
                description: 'A revoltada do grupo. Briga com os pais e sonha em conseguir um emprego dos sonhos e se sustentar sozinha bem longe de casa.',
                img: 'disney_ariel.png'
              },
              {
                result: 'Pocahontas',
                description: 'A hippie do grupo. Tem vontade de largar o emprego e sair de casa pra viver da comida que planta, água e luz solar.',
                img: 'disney_pocahontas.png'
              }
            ],
            done: false
          },
          {
            id: '2',
            name: 'Qual é a sua profissão coxinha?',
            abv: 'PC',
            description: 'Realize um teste rápido e descubra qual é a sua profissão coxinha.',
            link: 'qual-e-a-sua-profissao-coxinha',
            image: 'quiz_prof.png',
            questions: [
              {
                question: 'Qual sua opinião sobre trabalhar em grupo?',
                answers: [
                  'Odeio. No fim, sempre sou eu quem estou certo mesmo',
                  'Depende, mas prefiro grupos pequenos com pessoas qualificadas',
                  'Geralmente pergunto a opinião alheia, mas a palavra final é minha',
                  'É muito importante! Nada vai pra frente sem trabalho em grupo',
                  'É importante, mas é sempre bom ter alguém para liderar'
                ]
              },
              {
                question: 'Qual o seu objetivo de vida?',
                answers: [
                  'Já alcancei todos os meus objetivos',
                  'Ganhar muito dinheiro!',
                  'Ser o melhor no que faço',
                  'Conseguir concilicar minha vida profissional e pessoal!',
                  'Crescer muito profissionalmente!'
                ]
              },
              {
                question: 'E como você alcançará/alcançou seus objetivos?',
                answers: [
                  'Graças ao meu esforço',
                  'Fazendo as melhores faculdades e cursos possíveis!',
                  'Graças ao meu talento',
                  'Procurando as melhores oportunidades!',
                  'Com a ajuda e apoio das pessoas que conheço'
                ]
              },
              {
                question: 'Qual sua relação com seu trabalho?',
                answers: [
                  'Não tenho problemas de trabalhar muitas horas a mais se necessário',
                  'É simples quando temos uma boa base teórica para nos dar suporte',
                  'É crucial buscar todas as variáveis possíveis para evitar erros',
                  'É importante, mas existe muito mais para se viver além do trabalho!',
                  'Ter conhecimento é importante, mas não tanto quanto conhecer pessoas que o reconheça!'
                ]
              }
            ],
            results: [
              {
                result: 'Médico',
                description: 'Você é um Deus. Ou pelo menos acha que é um. Acredita que o mundo gira em torno de suas vontades e que todos devem se curvar à sua presença. Na verdade não aceita o fato de que ser chamado de "doutor" é só para pessoas que possuem doutorado.',
                img: 'prof_medico.png'
              },
              {
                result: 'Engenheiro',
                description: 'Você queria ser rico, e conseguiu. Ganha uma fortuna como estagiário enquanto na faculdade está na batalha pra passar em cálculo um depois de 5 tentativas.',
                img: 'prof_engenheiro.png'
              },
              {
                result: 'Advogado',
                description: 'Você passou muito tempo assistindo séries ou jogando jogos de advocacia. Você sonha em conseguir resolver qualquer situação, mas no fundo nunca será um Harvey Dent, nem um Phoenix Wright e muito menos uma Annalise Keating.',
                img: 'prof_advogado.png'
              },
              {
                result: 'Administrador',
                description: 'Você até tem um lado artístico, mas não queria ser pobre. Então escolheu um curso que não fosse muito focado nos seus pontos fracos e agora desfruta de milhares de opções de cargos diferentes graças ao seu curso.',
                img: 'prof_administrador.png'
              },
              {
                result: 'Empresário',
                description: 'Ninguém sabe de onde veio o seu dinheiro, mas de alguma forma você tem bastante. Já que tem de sobra, você investe seu dinheiro em formas de multiplicá-lo.',
                img: 'prof_empresario.png'
              }
            ],
            done: false
          },
          {
            id: '3',
            name: 'Qual é sua profissão mortadela?',
            abv: 'PM',
            description: 'Realize um teste rápido e descubra qual é a sua profissão mortadela.',
            link: 'qual-e-a-sua-profissao-mortadela',
            image: 'quiz_mort.png',
            questions: [
              {
                question: 'Qual sua opinião sobre trabalhar em grupo?',
                answers: [
                  'Sei trabalhar em grupo, mas o importante é entender as necessidades do cliente',
                  'Depende, mas prefiro grupos pequenos com pessoas qualificadas',
                  'Ahh, sei lá, tanto faz se pá',
                  'É muito importante! Nada vai pra frente sem trabalho em grupo',
                  'Prefito trabalhar sozinho. No máximo em duplas'
                ]
              },
              {
                question: 'Qual o seu objetivo de vida?',
                answers: [
                  'Ajudar a criar um mundo melhor para as pessoas',
                  'Acabar com a desigualdade social através da educação',
                  'Ajudar a salvar o planeta terra das atrocidades cometidas pelo homem!',
                  'Ser o melhor no que faço',
                  'Ser reconhecido pelo que eu faço!'
                ]
              },
              {
                question: 'E como você pretende chegar em seus objetivos?',
                answers: [
                  'Tentando e aprendendo com meus erros',
                  'Muito estudo através da leitura de muitos livros!',
                  'Buscando referências com outros profissionais da minha área',
                  'Praticando muito o que eu faço!',
                  'Sempre experimentando novas formas de melhorar!'
                ]
              },
              {
                question: 'Qual sua relação com seu trabalho?',
                answers: [
                  'É importante fazer o bem para todos!',
                  'É importante ter foco e determinação para chegarmos aos melhores resultados',
                  'Temos que nos conhecer bem para sabermos a melhor hora para se trabalhar',
                  'É importante para me satisfazer profissionalmente',
                  'É importante ser reconhecido pelo nosso trabalho'
                ]
              }
            ],
            results: [
              {
                result: 'Designer',
                description: 'Você realmente acredita que pode resolver o problema de todo mundo, mas na verdade ainda não conseguiu fazer seu chefe entender que as portas de empurrar só precisam ter maçanetas do lado dentro.',
                img: 'mort_designer.png'
              },
              {
                result: 'Historiador',
                description: 'Você gosta de ler e acredita que a educação pode mudar o mundo, mas ainda não conseguiu convencer seu primo de segundo grau que "bandido bom não é bandido morto" e nem que "não existe isso de direitos humanos para humanos direitos"...',
                img: 'mort_historiador.png'
              },
              {
                result: 'Biólogo',
                description: 'Você quer salvar os bichinhos e plantinhas do mundo todo, mas ainda está estudando uma forma de viver em algum lugar distante sem precisar de ajuda financeira de ninguém.',
                img: 'mort_biologo.png'
              },
              {
                result: 'Músico',
                description: 'Você nasceu pra trabalhar e estudar muito e não conseguir pagar as contas no fim do mês. E ainda tem que aguentar a família te comparando com seu primo que está fazendo algum outro curso mais rentável.',
                img: 'mort_musico.png'
              },
              {
                result: 'Artista Plástico',
                description: 'Você nasceu pra ser pobre, mas acredita que dinheiro não é tudo nessa vida. Se mete em brigas ferrenhas com familiares para discutir o que é e o que não é arte...',
                img: 'mort_artista.png'
              }
            ],
            done: false
          },
          {
            id: '4',
            name: 'Qual personagem de Sense8 você seria?',
            abv: 'S8',
            description: 'Realize um teste rápido e descubra, se você estivesse no universo de Sense8, qual personagem mais se identificaria com você.',
            link: 'qual-personagem-de-sense8-voce-seria',
            image: 'quiz_sense8.png',
            questions: [
              {
                question: 'Quais seriam suas férias ideais?',
                answers: [
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
                question: 'Qual seria seu Final de Semana ideal?',
                answers: [
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
                question: 'Qual seria seu lugar favorito para comer?',
                answers: [
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
                question: 'O que você imagina para seu futuro?',
                answers: [
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
                question: 'Qual a profissão dos seus sonhos?',
                answers: [
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
            results: [
              {
                result: 'Capheus',
                description: 'O pé-rapado do cluster. Trabalha quinze horas por dia pra ter dinheiro pra janta e pra ajudar em casa. Sonha e se esforça para ter uma vida melhor, pra ele e principalmente pros pais.',
                img: 'sense8_capheus.png'
              },
              {
                result: 'Will',
                description: 'O bom filho que ama os pais, cresceu sendo atleta e ainda resolveu seguir os passos do pai na profissão. É um cara legal, mas é tão legal que é a personificação do termo "bonzinho só se dá mal".',
                img: 'sense8_will.png'
              },
              {
                result: 'Nomi',
                description: 'A nerd do cluster. Ninguém sabe como é tão inteligente e nem o que faz da vida, mas talvez seja mais seguro nem saber.',
                img: 'sense8_nomi.png'
              },
              {
                result: 'Riley',
                description: 'A pessoa aleatória do cluster. Ninguém sabe muito bem o que você faz e como se sustenta, mas é uma amiga fiel, além de se dar muito bem com o papai e com a mamãe.',
                img: 'sense8_riley.png'
              },
              {
                result: 'Lito',
                description: 'O artista do cluster. Cresceu achando que ser diferente é errado, então não é à toa que quer ir pra bem longe desses lugares o mais rápido possível.',
                img: 'sense8_lito.png'
              },
              {
                result: 'Wolfgang',
                description: 'O baladeiro do cluster. Não tem muitos amigos, mas entra em briga feia se mexem com eles.',
                img: 'sense8_wolfgang.png'
              },
              {
                result: 'Sun',
                description: 'A atleta do cluster. É competitiva e pode até gostar de dar umas porradas nos outros às vezes. Pode ter uns problemas na família, mas né, quem não tem?',
                img: 'sense8_sun.png'
              },
              {
                result: 'Kala',
                description: 'A religiosa natureba do clueter que não come carne porque não quer ver nenhum animal sofrer. Mas no fundo, as vezes dá a louca porque viver uma vida diferente.',
                img: 'sense8_kala.png'
              }
            ],
            done: false
          }
        ]
      },
      {
        name: 'datas',
        icon: 'ico-dates',
        quizzes: [
          {
            id: 0,
            name: 'Filme Anos 80',
            abv: '80',
            description: 'Ja pensou como seria seu filme dos anos 80 ideal? Realize este teste e veja qual Filme dos Anos 80 seria sua cara.',
            link: 'filme-anos-80',
            image: 'quiz_anos80.png',
            result: {
              month: [
                'Adoidado',
                'Assassino',
                'Avoado',
                'Desastrado',
                'Mortífero',
                'Macabro',
                'Pelado',
                'Congelado',
                'Azarado',
                'Estranho',
                'Infernal',
                'Apavorante'
              ],
              days: [
                'Milk-Shake',
                'Gremilin',
                'Crocodilo',
                'Um pai',
                'Vizinho',
                'Brinquedo',
                'O anão',
                'Uma velhinha',
                'O aventureiro',
                'Um tira',
                'Mamãe',
                'O refresco',
                'Fantasma',
                'Robocop',
                'A Princesa',
                'Um solteirão',
                'O despertador',
                'A máquina',
                'Um hotel',
                'Criatura',
                'Um natal',
                'Um bebê',
                'Palhaço',
                'Xuxa',
                'Monstro',
                'Peru',
                'O ET',
                'O dinissauro',
                'Um louco',
                'Um morto',
                'O zumbi'
              ],
              years: [
                'se diverte',
                'e dois bebês',
                'vem aí',
                'do futuro',
                'das estrelas',
                'e um casamento',
                'em uma aventura',
                'da pesada',
                'de outro mundo',
                'volta ao passado'
              ],
              answers: []
            },
            done: false
          },
          {
            id: 1,
            name: 'Apelido Odebrecht',
            abv: 'Ode',
            description: 'E se você trabalhasse em uma das maiores e mais polêmicas empresas do Brasil, como te chamariam? Faça esse teste e descubra!',
            link: 'apelido-odebretch',
            image: 'quiz_odebrecht.png',
            result: {
              month: [],
              days: [
                'Passivo',
                'Mandrake',
                'Cortininha',
                'Avião',
                'Manicure',
                'Caranguejo',
                'Zé Ruela',
                'Lindinho',
                'Pastor',
                'Aspirador',
                'Escritor',
                'Metralhadora',
                'Gatuno',
                'Mandioca',
                'Catarro',
                'Nervosinho',
                'Correria',
                'Padeiro',
                'Peteca',
                'Malote',
                'Maluco',
                'Havaiana',
                'Caroço',
                'Xaninha',
                'Drácula',
                'Carniça',
                'X9',
                'Carniça',
                'Motorista',
                'Leite com pêra',
                'Bingola'
              ],
              years: [],
              answers: []
            },
            done: false
          },
          {
            id: 2,
            name: 'Novela Mex. (H)',
            abv: 'NMH',
            description: 'Se você fosse um galã das Novelas Mexicanas passando no horário nobre da SBT, qual seria o nome maravilhoso do seu Personagem? Descubra com este quiz, Carlos Eduardo.',
            link: 'novela-mexicana-m',
            image: 'quiz_mexicano.png',
            result: {
              month: [
                'Carlos Daniel',
                'Cirilo',
                'Demétrio',
                'Ramón',
                'Jorge Luiz',
                'Estevão',
                'Victor Manoel',
                'Cristovão',
                'Jaime',
                'Plutarco',
                'João Miguel',
                'Luiz Fernando'
              ],
              days: [
                'de la Cruz',
                'Bracho',
                'de la Vega',
                'de Jesus',
                'Palilo',
                'Gaivota',
                'do Bairro',
                'Sebastião',
                'de la Roda',
                'do Mar',
                'Duran',
                'Amador',
                'Colunga',
                'Estefanio',
                'Candelária',
                'Zapata',
                'Libertad',
                'Salvador',
                'Ponce León',
                'Leonidas',
                'Portillo',
                'Firmino',
                'Domenico',
                'del Racalque',
                'Henrique Fernandez',
                'de la Encarnacion',
                'Godinez',
                'Patrício',
                'Soledad',
                'Gonzalez',
                'Armando'
              ],
              years: [],
              answers: []
            },
            done: false
          },
          {
            id: 3,
            name: 'Novela Mex. (M)',
            abv: 'NMM',
            description: 'Se você fosse uma linda Atriz fazendo sucesso na maior novela mexicana ja lançada na SBT, qual seria o nome de sua maravilhosa personagem? Faça o quiz pra descobrir, Soraya.',
            link: 'novela-mexicana-f',
            image: 'quiz_mexicana.png',
            result: {
              month: [
                'Maria',
                'Paola',
                'Kassandra',
                'Soraya',
                'Paulina',
                'Rubi',
                'Pérola',
                'Esmeralda',
                'Alma',
                'Joaquina',
                'Lupita',
                'Adelina'
              ],
              days: [
                'do Bairro',
                'das Mercedes',
                'do Povo',
                'Clarita',
                'Gaivota',
                'Piedade',
                'Aleluia',
                'Miguelita',
                'Estefânia',
                'Esperanza',
                'Guadalupe',
                'Florinda',
                'Ramona',
                'Alegra',
                'Berenice',
                'Saolmé',
                'Soledad',
                'Zoraide',
                'Serafina',
                'Sebastiana',
                'de la Colina',
                'de Deus',
                'Carlota',
                'Preciosa',
                'Paleta',
                'Rosália',
                'Malvina',
                'do Céu',
                'Maribel',
                'Estrela',
                'Marion'
              ],
              years: [],
              answers: []
            },
            done: false
          },
          {
            id: 4,
            name: 'Profissão Star Wars',
            abv: 'SW',
            description: 'A muita tempo atrás, em uma galaxia muito, muito distante, as pessoas ainda possuiam profissões. Se você vivesse neste universo, qual seria a sua?',
            link: 'profissao-star-wars',
            image: 'quiz_profstarwars.png',
            result: {
              month: [
                'Aventureiro',
                'Prodigioso',
                'das Sombras',
                'Meio Humano',
                'Telepático',
                'Ciborgue',
                'Escravizado',
                'Exilado',
                'Traidor',
                'Clonado',
                'Droid',
                'Suicida'
              ],
              days: [
                'Guarda Imperial',
                'Musicista Senciente',
                'Imperador',
                'Senador',
                'Príncipe',
                'Padawan',
                'Mercenário',
                'Rei',
                'Cavaleiro Jedi',
                'Caçador de Recompensa',
                'General',
                'Mestre',
                'Cosnelheiro',
                'Guerreiro',
                'Lord Sith',
                'Tradutor de Wookie',
                'Piloto de Pod',
                'Comandante',
                'Mecânico',
                'Soldado Stormtrooper',
                'Aprendiz Sith',
                'Sentinela',
                'Vendedor',
                'Guarda Planetário',
                'Chanceler',
                'Líder Rebelde',
                'Governador',
                'Catador de Sucata',
                'Ladrão',
                'Cidente',
                'Contrabandista'
              ],
              years: [],
              answers: []
            },
            done: false
          }
        ]
      },
      {
        name: 'nomes',
        icon: 'ico-names',
        quizzes: [
          {
            id: 0,
            name: 'Nome Star Wars',
            abv: 'SW',
            description: 'Em uma Galaxia Muito Muito Distante, você precisaria de um nome imponente para sobreviver. Se você estivesse neste universo, qual seria o seu nome? Descubra!',
            link: 'nome-star-wars',
            image: 'quiz_profstarwars.png',
            result: {
              questions: ['Qual seu nome?', 'Qual seu Sobrenome?', 'Qual o nome de sua Mãe?', 'Qual o nome do bairro que você vive?'],
              answers: []
            },
            done: false
          },
          {
            id: 1,
            name: 'Nome RPG',
            abv: 'RPG',
            description: 'Para entrar em cavernas e enfrentar dragões, seu herói precisa de um nome lendário e um título imponente. Faça este teste, e descubra qual o nome levar na sua próxima aventura.',
            link: 'nome-rpg',
            image: 'quiz_rpg.png',
            result: {
              questions: ['Qual seu nome?', 'Qual o nome de seu Pai?', 'Qual cidade você nasceu?'],
              answers: []
            },
            done: false
          }
        ]
      }
    ],
    login: {
      loggedIn: false,
      provider: 'none',
      user: {}
    },
    current: {
      end: false,
      quiz: {},
      category: '',
      answers: []
    }
  },
  mutations: {
    setAsDone (state) {
      const quiz = state.quiz.filter(q => q.name === state.current.category)[0].quizzes.filter(q => q.id === state.current.quiz.id)[0]
      state.current.end = true
      quiz.done = true
    },
    setQuiz (state, {quiz, category}) {
      state.current.end = false
      state.current.quiz = quiz
      state.current.category = category
      state.current.answers.length = 0
    },
    addAnswer (state, value) {
      state.current.answers.push(value)
      if (state.current.quiz.result) {
        state.current.quiz.result.answers.push(value)
      }
    }
  },
  actions: {
    login ({commit, state}) {
      axios.get('/api/auth/me')
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
    },
    setQuiz ({commit, state}, quiz) {
      commit('setQuiz', quiz)
    },
    addAnswer ({commit, state}, value) {
      commit('addAnswer', value)
      if (state.current.category === 'nomes') {
        if (state.current.answers.length === state.current.quiz.result.questions.length) return commit('setAsDone')
      } else if (state.current.category === 'personalidades') {
        if (state.current.answers.length === state.current.quiz.questions.length) return commit('setAsDone')
      } else if (state.current.category === 'datas') {
        if (state.current.quiz.result.answers.length === 3) return commit('setAsDone')
      }
    }
  },
  getters: {
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
    },
    getCurrentQuiz (state) {
      return state.current
    },
    setAndGetResult (state) {
      if (!state.current.end) return false
      function capitalize (string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
      }

      if (state.current.category === 'personalidades') {
        let arr = state.current.answers
        let result = arr.sort((a, b) =>
          arr.filter(v => v === a).length - arr.filter(v => v === b).length
        ).pop()
        return state.current.quiz.results[result]
      } else if (state.current.category === 'nomes') {
        if (state.current.quiz.link === 'nome-star-wars') {
          let answers = state.current.quiz.result.answers
          const firstname = answers[1].substring(0, 3).toLowerCase() + answers[0].substring(0, 2).toLowerCase()
          const lastname = answers[2].substring(0, 2).toLowerCase() + answers[3].substring(0, 3).toLowerCase()
          return `${capitalize(firstname)} ${capitalize(lastname)}`
        }
        if (state.current.quiz.link === 'nome-rpg') {
          let answers = state.current.quiz.result.answers
          const abc = {
            A: 'Y',
            B: 'P',
            C: 'L',
            D: 'T',
            E: 'A',
            F: 'V',
            G: 'K',
            H: 'R',
            I: 'E',
            J: 'Z',
            K: 'G',
            L: 'M',
            M: 'S',
            N: 'H',
            O: 'U',
            P: 'B',
            Q: 'X',
            R: 'N',
            S: 'C',
            T: 'D',
            U: 'I',
            V: 'J',
            X: 'F',
            W: 'Q',
            Y: 'O',
            Z: 'W'
          }
          const replaced = answers.map(answer => {
            let array = answer.split('')
            array = array.map(item => {
              return abc[item.toUpperCase()]
            })
            let text = array.join('').toString()
            return capitalize(text)
          })
          return `${replaced[0]}, filho de ${replaced[1]} nascido em ${replaced[2]}`
        }
      } else if (state.current.category === 'datas') {
        const dates = state.current.quiz.result.answers
        const months = state.current.quiz.result.month
        const days = state.current.quiz.result.days
        const years = state.current.quiz.result.years
        let answer = ``
        if (days.length > 0) {
          answer = days[dates[0] - 1]
        }
        if (months.length > 0) {
          answer = answer + ' ' + months[dates[1] - 1].toLowerCase()
        }
        if (years.length > 0) {
          let year = dates[2].substring(3, 4)
          answer = answer + ' ' + years[year].toLowerCase()
        }
        return answer
      }
    },
    isResultUnlocked (state) {
      let count = 0
      state.quiz.forEach(group => {
        group.quizzes.some(quiz => {
          if (quiz.done) {
            count++
            return true
          }
        })
      })
      return count === 3
    }
  },
  plugins: [createPersistedState()]
})

export default store
