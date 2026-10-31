# Planejamento de Tarefas (Roadmap de Desenvolvimento)

Aqui está a quebra da especificação técnica em tarefas estruturadas, divididas por blocos e funcionalidades, para guiar a construção passo a passo do site do casal.

---

## Bloco 1: Infraestrutura, Setup & Estilização Base
- [ ] **TAREFA 1.1:** Inicializar o projeto front-end (React/Next.js ou Vite + Tailwind CSS) e configurar o cliente Supabase.
- [ ] **TAREFA 1.2:** Configurar o **Design System** no arquivo de estilos globais (`tailwind.config.js` ou CSS variables):
  - Paleta de cores (Rosa Bebê, Rosa Escuro, Amarelo Girassol, Verde Folha, Laranja, Azul Escuro).
  - Configuração de fontes customizadas (tipografia cursiva e limpa).
- [ ] **TAREFA 1.3:** Criar o componente de fundo (*Background*) com a animação CSS (`keyframes`) de pétalas caindo continuamente e posicionamento dos vetores/ilustrações de tulipas e girassóis nas bordas.
- [ ] **TAREFA 1.4:** Configurar o elemento de áudio global com a música *"Would you fall in love with me again"* (piano) e criar o player flutuante com botão Play/Pause e controle de volume (slider).

---

## Bloco 2: Página Principal (Home) & Menu Hambúrguer
- [ ] **TAREFA 2.1:** Desenvolver o **Menu Hambúrguer** posicionado no canto superior esquerdo em formato de **coração pulsante** (animação CSS), criando a gaveta (*Drawer*) com os links de navegação (*Home*, *Playlist*, *Meses*, *Us*, *Motivos*).
- [ ] **TAREFA 2.2:** Desenvolver o **Contador em Tempo Real** fixando a data base em **2 de Fevereiro de 2026** (`2026-02-02T00:00:00`) para calcular dinamicamente anos, meses, dias, horas, minutos e segundos.
- [ ] **TAREFA 2.3:** Desenvolver o **Coração Interativo Central** (estilo biscoito da sorte):
  - Criar tabela `fortune_messages` no Supabase.
  - Implementar o evento de clique que sorteia e exibe uma mensagem fofa em um balão de diálogo dinâmico na tela.
- [ ] **TAREFA 2.4:** Posicionar o **texto afetuoso fixo** ao redor do coração central da página inicial.

---

## Bloco 3: Aba Playlist
- [ ] **TAREFA 3.1:** Desenvolver o componente visual do **Disco de Vinil**:
  - Dividido ao meio (metade preto/rosa bebê, metade link interativo para a playlist no Spotify/YouTube).
  - Animação de rotação contínua ativada quando a música estiver tocando.
- [ ] **TAREFA 3.2:** Implementar o **Mural de Mensagens Cíclicas**:
  - Criar tabela `playlist_messages` no Supabase.
  - Criar componente de loop automático que troca a frase a cada 8 segundos utilizando animações de *
