# Site Institucional - Professora Aline Reis (Aulas Particulares)

## Integrantes da dupla
* [Moisés Coelho Santos Juvenal]

## Descrição do caso escolhido
O caso selecionado trata-se da profissional autônoma Aline Reis, que atua ministrando aulas particulares de inglês focadas em conversação e propósitos profissionais específicos. O projeto foca no desenvolvimento de uma presença web estática para divulgação de seus serviços básicos.

## Necessidade identificada
A profissional enfrenta a ausência de um canal oficial consolidado para captação de novos alunos de forma independente, dependendo apenas de indicações boca a boca. O site resolve o problema fornecendo uma interface centralizada com informações claras sobre horários, didática e contato direto.

## Público-alvo
Profissionais de nível júnior/pleno que necessitam destravar a fala no idioma para processos seletivos ou reuniões corporativas, além de viajantes recorrentes buscando independência de comunicação básica. Eles buscam preços, abordagens pedagógicas e confiança rápida.

## Objetivo do site
Favorecer a ação principal de agendamento de uma aula experimental gratuita por meio do preenchimento de formulário de simulação de contato direto via aplicativo de mensagens.

## Processo de desenvolvimento
Dividi o trabalho de forma incremental ao longo de duas semanas:
1. **Semana 1:** Diagnóstico com a cliente, desenho da arquitetura de conteúdo e criação do esqueleto semântico em HTML.
2. **Semana 2:** Estilização com foco mobile-first através de CSS puro combinado com o Grid do Bootstrap para organização das colunas do Sobre/Metodologia. Inserção do script JS para o acordeão de dúvidas e testes locais de acessibilidade.

## Principais decisões do projeto
* **Estrutura HTML:** Uso restrito de tags semânticas estruturais como `<main>`, `<section>`, `<article>` e `<header>`.
* **Organização Visual:** Paleta em tons frios (Azul Escuro e Médio) gerando sensação de ambiente corporativo e educacional, mantendo alto contraste (relação superior a 4.5:1).
* **Responsividade:** Uso de regras `@media` combinadas ao grid fluido nativo do Bootstrap para realocar colunas verticalmente em dispositivos celulares.
* **Acessibilidade:** Inclusão de links de salto de cabeçalho (`.link-pular-conteudo`), tags ARIA nos botões interativos (`aria-expanded`) e imagens descritivas no atributo `alt`.

## Funcionalidade em JavaScript
Foi implementado o sistema de acordeão dinâmico na seção de Dúvidas Frequentes (FAQ). Ao clicar na pergunta, o JavaScript manipula as propriedades `aria-expanded` do botão e a visibilidade (`hidden`) do bloco de texto da resposta, promovendo uma navegação acessível via teclado.

## Uso de Bootstrap
Focamos na utilização estrita do sistema de Grid (`.row`, `.col-md-6`, `.col-md-4`) de modo introdutório e leve na folha de estilos externa para garantir o alinhamento das colunas sem inflar o código com bibliotecas pesadas.

## Testes realizados
* **Responsividade:** Testado em simulador do navegador (Chrome DevTools) nas resoluções iPhone SE, iPad e Desktop (1920px), sem quebras ou barras de rolagem horizontais.
* **Acessibilidade:** Navegação completa por teclado (tecla TAB) confirmando que o foco visual acompanha os botões e links de forma lógica.
* **Publicação:** Testado após o upload no GitHub Pages externamente por rede móvel confirmando o carregamento relativo das imagens.

## Links
* **Link do repositório:** [https://github.com/moisin/projeto](https://github.com/moisin/projeto)
* **Link do site publicado:** [https://moisin.github.io/projeto/](https://moisin.github.io/projeto/)
## Contribuição dos integrantes
* **[Moisés Coelho Santos Juvenal]:** Diagnóstico inicial da proposta, estruturação lógica do arquivo `index.htm dl`, codificaçãoo arquivo `js/script.js` e preenchimento da documentação Identidade visual no arquivo `css/style.css`, integração inicial com Grid Bootstrap, aplicação de media-queries para responsividade e validação física dos testes.
