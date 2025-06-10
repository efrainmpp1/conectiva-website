# Conectiva

Plataforma para geração de leads com agentes de IA sob medida.

<!-- Badges can be added here -->

## Demonstração

![Tela inicial](src/assets/busca_empresas.jpeg)

## Funcionalidades Principais

- **Análise de Editais com IA**
- **Prospecção inteligente por descrição**
- **Sistema de créditos e planos**
- **Autenticação por e-mail/senha e Google**
- **Dashboard interativo com menu lateral**

## Instalação

```bash
git clone https://github.com/efrainmpp1/conectiva-website.git
cd conectiva-website
npm install
npm run dev
```

## Variáveis de Ambiente

Crie um arquivo `.env` seguindo o exemplo abaixo:

```bash
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Tecnologias Utilizadas

- React + Vite + TypeScript
- Firebase Authentication
- Axios
- Framer Motion
- Material UI
- Flask + Node.js (APIs)

## Estrutura de Pastas

```text
src/
├── assets/
├── libs/
│   ├── components/
│   ├── context/
│   ├── interfaces/
│   └── theme/
├── screens/
│   ├── About/
│   ├── Contact/
│   ├── Dashboard/
│   ├── Home/
│   ├── Login/
│   ├── Plans/
│   ├── Register/
│   └── Service/
├── services/
│   ├── Services/
│   ├── apiIA.ts
│   ├── apiNode.ts
│   ├── firebase.ts
│   └── mocks/
├── router.tsx
├── App.tsx
├── main.tsx
├── index.css
└── vite-env.d.ts
```

## Colaborador

- Efrain Marcelo Pulgar Pantaleon - [efrainmpp1](https://github.com/efrainmpp1)

## Licença

Este projeto ainda não possui uma licença definida.


