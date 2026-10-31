# Sistema de Namoro (Nosso Refúgio)

## Cenário

Um site web romântico e interativo, desenvolvido para fortalecer a conexão e celebrar a história de um casal. A aplicação une momentos de nostalgia, interatividade e carinho diário em um ambiente visual acolhedor, com tema em rosa bebê, pétalas caindo, detalhes de tulipas e girassol, e som ambiente tocando o arranjo de piano de *"Would you fall in love with me again"* do musical. Tudo isso conectado em tempo real através do Supabase para garantir que mensagens e recordações atualizadas de um apareçam instantaneamente para o outro.

---

## Problema a ser resolvido

| # | Problema / Necessidade | Impacto na Experiência |
| - | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 1 | **Falta de um espaço digital exclusivo:** Conversas em apps comuns se perdem no meio do cotidiano e tarefas. | Perda de um local dedicado a celebrar a individualidade e o afeto do casal. |
| 2 | **Distância ou correria do dia a dia:** Dificuldade em manter surpresas românticas e carinhos frequentes. | Sensação de rotina mecânica, perdendo pequenos toques de surpresa. |
| 3 | **Falta de registro unificado de memórias:** Fotos, planos e datas importantes ficam espalhados em galerias e notas soltas. | Dificuldade para reviver momentos especiais ou acompanhar metas conjuntas. |
| 4 | **Ausência de interatividade em tempo real:** Mudanças em bilhetes ou notas de um lado não refletem imediatamente para o outro. | Sensação de desconexão ou necessidade de recarregar a página constantemente. |

---

## Escopo

Desenvolver um **sistema web romântico e responsivo**, cobrindo:

- **Trilha sonora ambiente** com controle de volume e player discreto;
- **Contador em tempo real** desde 2 de Fevereiro de 2026 com coração pulsante;
- **Coração interativo** estilo biscoito da sorte com mensagens fofas aleatórias;
- **Menu lateral (Hambúrguer)** em formato de coração pulsante com abas dedicadas;
- **Aba Playlist** com vinil interativo, link externo e mensagens em *loop* automático a cada 8 segundos;
- **Aba Meses** com filtro cronológico por mês/ano e mensagens comemorativas;
- **Aba Us** com galeria de casais de desenho, RPG e planos futuros com gerenciamento dinâmico;
- **Aba Motivos (Potinho de Vidro)** com sorteio aleatório de bilhetes coloridos e adição de novas notas;
- **Sincronização instantânea** com Supabase Realtime para que todas as alterações apareçam em tempo real nos dois dispositivos.

### Requisitos: O que a solução precisa fazer?

### 4.1. Interface Visual e Estética (Design System)
- **RF-001:** O fundo do site deve exibir animação contínua de pétalas de rosa caindo e elementos visuais estáticos (tulipas e girassol) nas bordas.
- **RF-002:** A paleta de cores principal deve ser baseada em **rosa bebê**, com destaques em **rosa escuro / magenta suave** para botões de ação e interatividade.
- **RF-003:** O sistema deve manter tipografia limpa e legível, combinada com fontes manuscritas para as mensagens e cartões românticos.

### 4.2. Trilha Sonora & Controles de Áudio
- **RF-004:** O site deve reproduzir em segundo plano a música *"Would you fall in love with me again"* (versão de piano).
- **RF-005:** Um botão flutuante em rosa escuro destacado deve permitir ao usuário **pausar/reproduzir a música** e **ajustar o volume** através de um slider deslizante.
- **RF-006:** O áudio deve respeitar as diretrizes de autoplay dos navegadores, iniciando com um gatilho de interação inicial se necessário.

### 4.3. Página Principal (Home)
- **RF-007:** Exibir um **contador em tempo real** calculando anos, meses, dias, horas, minutos e segundos desde **2 de Fevereiro de 2026** (`2026-02-02T00:00:00`).
- **RF-008:** Exibir um **coração pulsante** no canto superior esquerdo que funciona como **Menu Hambúrguer**.
- **RF-009:** Exibir um **coração interativo central**: ao ser clicado, sorteia e exibe uma mensagem fofa estilo "biscoito da sorte chinês" em um balão de diálogo dinâmico.
- **RF-010:** Exibir um texto afetuoso fixo ao redor do coração central da página inicial.

### 4.4. Navegação por Menu Lateral (Gaveta / Drawer)
- **RF-011:** Ao clicar no menu hambúrguer (coração superior esquerdo), uma gaveta desliza revelando as abas de navegação: **Home**, **Playlist**, **Meses**, **Us** e **Motivos**.

### 4.5. Aba: Playlist
- **RF-012:** Exibir um **disco de vinil estilizado** no centro da tela, dividido ao meio (metade preto e rosa bebê, metade link direto para a playlist do casal no Spotify/YouTube). O disco deve girar enquanto a música estiver ativa.
- **RF-013:** Um componente de texto deve exibir mensagens fofas em **loop automático a cada 8 segundos**, aplicando animação de *fade-in/fade-out* ao substituir a frase anterior.

### 4.6. Aba: Meses
- **RF-014:** Disponibilizar um **filtro cronológico** por Mês e Ano (a partir de Fevereiro de 2026).
- **RF-015:** Renderizar dinamicamente as mensagens comemorativas de "Feliz Mêsversário" ou marcos anuais correspond
