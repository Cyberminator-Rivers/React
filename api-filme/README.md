Essa foi minha tentativa, foi um choque de realidade imenso, mas uma experiência muito proveitosa
no primeiro dia (terça), tirei o Escorpião do bolso e adquiri um curso da Udemy de React, recomendado por um amigo muito entendido do assunto : https://www.udemy.com/share/108PTK3@yiiSdB-aMNYgd_EAcXJurFsBiq40d7TshPOO0FU-mdvUMB0L3OX1gf0uoWC3l9NJGA==/
Com ajuda desse mesmo amigo e com as etapas iniciais do curso consegui trazer a API. Aprendi que no React, cada componente tem seu próprio arquivo, uma estrutura bem organizada e que componentes podem chamar outros componentes, quantos forem necessários. O componente principal que faz isso é o root ou app
ao fazer listas, temos as não organizadas (ul) e as organizadas (ol). As organizadas irão enumerar seus itens, muito parecido com a função enum do Java
Consts são constantes que não serão alteradas em momento algum, usadas pra declarar endereços de API, por exemplo.
repliquei o useState sem entender muito bem como (na etapa do curso onde eu estava, foi dito que seria explicado mais tarde, passo a passo). Como gostaria de entender o que eu fiz, procurei saber mais sobre useState e useEffect e assim adquiri a noção sobre hooks e também sobre programar com classes do JavaScript ou com componentes. Aparentemente, os componentes são bem mais simples, pois possuem as classes e bibliotecas "embutidas"
aprendi sobre os snippets e não vejo a hora de ter o meu próprio com um bazilhão de atalhos!
e, por fim, aprendi que não é só react. Não é uma linguagem onde você simplesmente aplica as estrutura de dados como eu já estava acostumado. A orientação é completamente diferenta da POO e com isso descobri que não era só React: era necessário um poquinho de HTML, um pouquinho de CSS e Uma base sólida do JavaScript nativo

Agradeço de coração a oportunidade e nos vemos mais tarde!

Atualização: 8/06~10/06:
Um bom salto de progresso. Tive as primeiras interações com o Figma e extraí as cores e o logo do layout do mesmo. Adicionei o logo na NavBar.

comecei a trabalhar no CSS. Uma folha de estilo para a página e outra para os componentes. Aprendi também que você pode inserir CSS dentro do componente usando "style = {{}}", mas me parece uma prática ruim exceto para casos bem pontuais. Aprendi também que outras unidades de medida além dos pixels (px) e a porcentagem da tela/divisão e utilizei o vh e o rem. Ainda preciso estudar ambos a fundo pra entender melhor a que ou quanto equivalem cada unidade. Ainda no CSS, testei um pouco as propriedades de alinhamento como align-items, text-align, justify-content. Aprendi a usar o border-radius pra arredondar as bordas de uma divisão.
ainda preciso estudar mais a fundo a diferença entre os espaçamentos, mas, pel oque entendi, usar o display flex é o básico para responsividade: através dele, pode-se alinhar os componentes ao começo da divisão (start) ou ao centro (center), por exemplo.

trabalhei no Hero. O Hero é como chamamos o banner de destaque do site, logo abaixo do cabeçalho. Nele estão as informações do filme destaque do mês. O componente do Hero funciona com uma função, na qual passamos por parâmetro as propriedades da imagem do filme, o título, a nota e os diretor e atores principais. A função então retorna o Hero com as divs hero, englobando a imagem do hero ao fundo. Nela, apliquei um efeito de gradiente para escurecer um pouco e facilitar a leitura das informações da div hero-text e hero-info que também são retornos da função. hero-info traz o título do hero (Destaque do mês) e hero-info traz as demais informações de texto do hero (nota e artistas).

Conceitos de React importantes:
Estudei mais a fundo os conceitos já aplicados até então para entender melhor quando e como funcionam:

-Render: Creio que esse seja o conceito primordial do JavaScript. É quando o JavaScript é executado para aplicar ou modificar a estrutura da página web e/ou seus componentes. Quando o React é renderizado, toda a estrutura do React e suas bibliotecas é convertida nos elementos HTML, CSS e JavaScript para então serem renderizados na página e isso nos leva aos conceitos de DOM:
DOM: Documento Object Model. O DOM é um documento onde uma página Web de fomra que as linguagens de programação possam acessar e modificar seu conteúdo. é uma "Interface para o código"
-Virtual DOM: como pude experenciar no projeto até o momento, React engloba diversas classese e bilbiotecas JavaScript. Para que o React seja aplicado, ele então renderiza a página em um DOM Virtual, onde tudo é transformado em JavaScript puro para então ser renderizado como JavaScript no DOM real
-HOOKS: são funções especiais do React que permitem utilizar funcionalidades e componentes do React sem a necessidade de utilizar componentes de classe. Isso simplifica o código ao lidar com estados, efeitos e outras propriedades dos componentes.
-useState(): um hook utilizado para adicionar stateful-variables e o setter da mesma ao componente. Stateful-variables são variáveis que são renderizam um componente novamente sempre que seu valor muda. Dessa forma, usamos o setter para alterar o valor de estado e renderizar o valor novo
-useEffect():um Hook que rodará um certo código a cada condição de um componente sendo:
useEffect(() => {}) a cada nova renderizada
useEffect(() => {}, []) somente uma vez quando o componente é montado
useEffect(() => {} [valor]) quando o componente é montad e quando o valor da dependência é alterado
-menção honrosa para o operador ternário: um "if" simplificado (que quando vi ruby e python pela primeira vez achei que era como se faziam nessas linguagens) onde checamos rapidamente uma condição e retornamos o valor de acordo. Não é uma boa prática usá-lo para ramificações de código ou para checar mais do que duas condições de uma vez
-Isso conclui esse passo. Creio que preciso me aprofundar mais em cada conceito apresentado para poder aplicá-los em cotnextos mais diversos, mas certamente conseguirei em breve. alguns termos mantive em inglês pois estou pesquisando e fazendo cursos todos em inglês e não se existe uma tradução literal para os mesmos. Obrigado e até mais!
