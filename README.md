# Repositório Web do projeto RCECAD 💻  
# Projeto Web com Next.js, TypeScript, TailwindCSS, BiomeJS e RadixUI

Este repositório contém algumas das tecnologias mais modernas para desenvolvimento front-end: **Next.js**, **TypeScript**, **TailwindCSS**, **BiomeJS** e **RadixUI**. A seguir, explicamos o que são essas ferramentas, o motivo de usá-las neste projeto e links úteis para a documentação.

* Lembrando que qualquer dificuldade/dúvida etc, estou amplamente disponível para ensinar e ajudar, se for algo que eu não tenho conhecimento o suficiente, posso estudar e voltar com uma resposta pro problema blz?
* Ao longo do desenvolvimento, talvez seja necessário adicionar mais recursos, se isso acontecer, eu vou atualizar este readme com todas as infos necessárias

## 📐 Tecnologias Utilizadas

### 1. [Next.js](https://nextjs.org/)
**Next.js** é um framework de React para a criação de aplicações web escaláveis e otimizadas, com foco em performance e experiência do desenvolvedor. Ele permite renderização tanto no lado do servidor (SSR) quanto no lado do cliente (CSR), além de oferecer suporte a rotas automáticas, pré-carregamento de páginas e muito mais.

- **Por que usar?**: Facilita o desenvolvimento de aplicações React, proporcionando funcionalidades como roteamento, renderização no servidor, otimização automática de imagens, etc.
- **Documentação**: [Next.js Documentation](https://nextjs.org/docs)
- **Vídeo de introdução ao Next**: [O que é Next.js, na prática, em 15 minutos!](https://www.youtube.com/watch?v=QsSUbuYeEFk)
- **Curso de Next (Opcional)**: [Curso de Next.js](https://www.youtube.com/watch?v=XHrbg2iYNCg&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft)

### 2. [TypeScript](https://www.typescriptlang.org/)
**TypeScript** é uma linguagem que se baseia em JavaScript, adicionando tipagem estática e outros recursos, como classes e interfaces, para melhorar a manutenção e escalabilidade do código. Ele é amplamente utilizado para melhorar a qualidade do código e aumentar a produtividade.

- **Por que usar?**: Ajuda a evitar erros comuns de código, melhorando a robustez do projeto e facilitando a colaboração em equipe.
- **Documentação**: [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- **Vídeo de introdução ao TypeScript**: [TypeScript // Dicionário do Programador](https://www.youtube.com/watch?v=gmupEp468lY&pp=ygUaaW50cm9kdcOnw6NvIGFvIHR5cGVzY3JpcHQ%3D)
- **Mini-Curso de TypeScript (Opcional)**: [TypeScript, o início, de forma prática | MasterClass #07](https://www.youtube.com/watch?v=0mYq5LrQN1s)

### 3. [TailwindCSS](https://tailwindcss.com/)
**TailwindCSS** é um framework de CSS que permite construir interfaces de usuário e responsivas sem a necessidade de escrever CSS personalizado. Isso economiza muito tempo.

- **Por que usar?**: Facilita o design responsivo e modular, promovendo a reutilização de estilos através de classes utilitárias.
- **Documentação**: [TailwindCSS Documentation](https://tailwindcss.com/docs)
- **Vídeo de introdução ao TailwindCSS**: [TailwindCSS // Dicionário do Programador](https://www.youtube.com/watch?v=i_EKstz3x04&pp=ygUYaW50cm9kdcOnw6NvIGFvIHRhaWx3aW5k)
- **Aprenda TailwindCSS em 13 minutos**: [Vídeo](https://www.youtube.com/watch?v=dHwY5lRfkoQ&pp=ygUYaW50cm9kdcOnw6NvIGFvIHRhaWx3aW5k)

### 4. [BiomeJS](https://biomejs.org/)
**BiomeJS** é uma ferramenta de linting e formatação de código para JavaScript, TypeScript e outros. Ele permite configurar regras para garantir que o código siga um estilo consistente e que seja livre de erros.

- **Por que usar?**: Automatiza a formatação de código e garante que os padrões de qualidade sejam seguidos em toda o código.
- **Instalação**: Para utilizar o Biome, instale a extensão "Biome" e reinicie seu VSCode, se der algum problema me avise.
- **Documentação**: [BiomeJS Documentation](https://biomejs.org/)
- **Vídeo sobre o BiomeJS**: [BiomeJS - O sucessor do ESLint](https://www.youtube.com/watch?v=wrbKoQt3_dE)

### 5. [RadixUI](https://www.radix-ui.com/)
**RadixUI** é uma biblioteca de componentes de UI com foco em acessibilidade e customização. Ele fornece componentes prontos para uso, como sliders, diálogos e menus, que são acessíveis e podem ser facilmente estilizados.

**Observação**:  a princípio, vou conversar com o professor se é permitido usar.
- **Por que usar?**: Permite construir interfaces de usuário acessíveis sem se preocupar com a implementação de comportamentos complexos e específicos, como manipulação de teclado e foco, vai salvar um tempo tremendo.
- **Documentação**: [RadixUI Documentation](https://www.radix-ui.com/docs/primitives/overview)


// to-do: add zod & react-hook-form

## ▶️ Como Rodar o Projeto

### 1. Clonar o Repositório
Para começar, clone o repositório no pc:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2. Instalar as Dependências
Navegue até a pasta do projeto e instale as deps:

```bash
cd rcecad-web
npm install
```

### 3. Rodar o Projeto
Inicie o servidor:

```bash
npm run dev
```

Acesse a aplicação em seu navegador através de `http://localhost:3000`.

## Como Contribuir
(Caso não saiba como utilizar as branchs do git, só me chamar que eu ensino suave)
1. Crie uma branch para suas modificações (`git checkout -b feature/nova-funcionalidade`).
2. Faça suas alterações e envie um pull request.