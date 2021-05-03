const env = require('../.env')
const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)

const tecladoPrimeirosPassos = Markup.keyboard([
    ['Operadores Relacionais', 'Operadores Aritméticos', 'Operadores Lógicos'],
    ['Estruturas Condicionais', 'Estruturas de Repetição', 'Funções'],
    ['Vetores', 'Matrizes', 'Outros']
]).resize().extra()

let pontos = 0;

bot.start(async (ctx) => 
{
    const nome = ctx.update.message.from.first_name
    await ctx.reply(`Olá ${nome}! 
    Sabemos como é entusiasmante entrar nas matérias em que mais esperamos desde o primeiro dia na Faculdade, e por isso, estamos aqui para lhe ajudar nos primeiros passos. Em primeiro, gostaríamos de saber se você já sabe o que é Lógica de Pogramação`, 
    await Markup.keyboard(['Sim, eu já sei lógica de programação', 'Não, eu ainda não sei lógica de programação']).resize().oneTime().extra())
})

bot.hears('Sim, eu já sei lógica de programação', async ctx => {
    await ctx.reply(`Já que você já sabe sobre lógica de programação, o que você gostaria de aprender agora?`, tecladoPrimeirosPassos)
})

//Explicando o que é lógica de programação
bot.hears('Não, eu ainda não sei lógica de programação', async ctx => {
    await ctx.reply(`Então fique calmo(a), e venha conosco!
    A lógica de programação é o modo como se escrevem programas de computador através de uma sequência de passos, esta sequência de passos é chamada de algoritmo.
    O algoritmo, nada mais é do que uma "receita" de algo que fazemos. Por exemplo: 
    Se vamos fazer um bolo, temos um passo a passo para fazê-lo, que é:
    1º Separar todos os ingrediente
    2º Pré Aquecer o forno  
    3º Bater os ingredientes líquidos
    4º Misturar os ingredientes em pó
    5º Colocar o fermento
    6º Untar a forma
    7º Colocar a massa do bolo na forma
    8º Levar ao forno e esperar o bolo ficar dourado.
    Vejam, isso é um passo a passo de como fazer um bolo, e ele pode variar de receita para receita, e do mesmo modo, acontece com os algoritmos, tudo depende de quem está fazendo, mas sempre, mantendo um padrão mínimo de acontecimentos.
    Agora que você já sabe um pouquinho o que é lógica de programação, nós temos um menu de itens que com certeza vai te ajudar nos primeiros passos. Qual deles você quer saber em primeiro?`, tecladoPrimeirosPassos)
})

bot.hears('Não, gostaria de voltar ao menu', async ctx => {
    await ctx.reply(`Já que você decidiu voltar ao menu, o que gostaria de aprender agora?`, tecladoPrimeirosPassos)
})

bot.hears('Operadores Relacionais', async ctx => {
    await ctx.reply(`Os operadores relacionais são utilizados para comparar valores, e sempre, o resultado de uma comparação relacional, será booleano.
    O resultado booleano nada mais é do que Verdadeiro ou Falso. No caso das máquinas, elas entendem como 1 para Verdadeiro e 0 para Falso. Já para os programas, é utilizado true ou false.`)
    await ctx.replyWithPhoto({source: `${__dirname}/Operadores_Relacionais.png`})
    await ctx.reply(`Acima estão todos os operadores relacionais, eles são muito utilizados no dia a dia dos programadores. Mas vale lembrar que nem todos eles funcionam exatamente como está descrito na imagem, um ou outro pode acabar sendo diferente dependendo da linguagem de programação que está sendo utilizada, mas, em sua maior parte é um padrão.`)
    await ctx.reply(`Agora que você sabe um pouquinho mais sobre o que é um operador relacional, você gostaria de fazer alguns exercícios para testar o seu conhecimento e colocar um pouquinho em prática?`, 
    await Markup.keyboard(['Sim, gostaria de fazer um exercício de Operadores Relacionais', 'Não, gostaria de voltar ao menu']).resize().oneTime().extra())

    bot.hears('Sim, gostaria de fazer um exercício de Operadores Relacionais', async ctx => {
        await ctx.reply(`Sabendo que A = 2, B = 6, C = 1, qual dos operadores aritméticos teremos que utilizar para dizer que A + B é Maior que C?`
        , await Markup.keyboard(['==', '<>', '>', '!=']).resize().oneTime().extra())
    
        bot.hears('>', async ctx => {
            await ctx.reply(`Parabéns! Você acertou e ganhou 400xp! Você gostaria de aprender o que agora?`, tecladoPrimeirosPassos)
            pontos += 400 
        }) 
        bot.hears(['==', '<>', '!='], async ctx => {
            await ctx.reply('Infelizmente você errou a questão, mas essa não é a hora de desistir, você pode voltar aqui mais tarde e fazer novamente os exercícios. Mas enquanto isso, você gostaria de aprender o que agora?', 
            tecladoPrimeirosPassos)
        })
    }) 

    bot.hears('Não', async ctx => {
        await ctx.reply(`Já que você decidiu voltar ao menu, o que gostaria de aprender agora?`, tecladoPrimeirosPassos)
    })
})

bot.hears('Operadores Aritméticos', async ctx => {
    await ctx.reply(`Os Operadores aritméticos estão presentes nas nossas vidas desde muito novos. Nele não temos muito o que explicar, apenas mostrar como utilizamos eles na programação.`)
    await ctx.replyWithPhoto({source: `${__dirname}/Operadores_Aritmeticos.png`})
    await ctx.reply(`Agora que você sabe um pouquinho quais são os símbolos para cada operação aritmética, você gostaria de fazer um exercício para colocar em prática?`, 
    await Markup.keyboard(['Sim, gostaria de fazer um exerício de Operadores Aritméticos', 'Não, gostaria de voltar ao menu']).resize().oneTime().extra())

    bot.hears('Sim, gostaria de fazer um exerício de Operadores Aritméticos', async ctx => {
        await ctx.reply(`Se colocarmos no nosso código 2**, qual é a operação aritmética que estamos utiliazndo no nosso código?`, 
        await Markup.keyboard(['Multiplicação', 'Potencialização', 'Divisão', 'Adição', 'Concatenação literal', 'Subtração', 'Resto']).resize().oneTime().extra())
    
        bot.hears('Potencialização', async ctx => {
            await ctx.reply(`Parabéns! Você acertou e ganhou 400xp! Você gostaria de aprender o que agora?`, tecladoPrimeirosPassos)
            pontos += 400 
        }) 
        bot.hears(['Multiplicação', 'Divisão', 'Adição', 'Concatenação literal', 'Subtração', 'Resto'], async ctx => {
            await ctx.reply('Infelizmente você errou a questão, mas essa não é a hora de desistir, você pode voltar aqui mais tarde e fazer novamente os exercícios. Mas enquanto isso, você gostaria de aprender o que agora?', 
            tecladoPrimeirosPassos)
        })
    }) 

    
})

bot.hears('Operadores Lógicos', async ctx => {
    await ctx.reply(`Operadores Lógicos Texto de explicação vai aqui`)
})

bot.hears('Estruturas Condicionais', async ctx => {
    await ctx.reply(`Estruturas Condicionais Texto de explicação vai aqui`)
})

bot.hears('Funções', async ctx => {
    await ctx.reply(`Funções Texto de explicação vai aqui`)
})

bot.hears('Vetores', async ctx => {
    await ctx.reply(`Vetores Texto de explicação vai aqui`)
})

bot.hears('Matrizes', async ctx => {
    await ctx.reply(`Matrizes Texto de explicação vai aqui`)
})

bot.hears('Outros', async ctx => {
    await ctx.reply(`Outros Texto de explicação vai aqui`)
})

bot.startPolling()