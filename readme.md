
---

# Projeto Happy Birthday - Contador e Animações Personalizadas

## Descrição

Este projeto é uma página interativa e animada para celebrar o aniversário da sua esposa com contagem regressiva, céu estrelado, lua romântica, casal animado e efeitos de confete. Além disso, contém uma caixa de presente animada com mensagens especiais.

A página foi feita com HTML5, CSS3 e JavaScript puro, usando bibliotecas como GSAP para animações e confetti.js para efeitos festivos.

Site ao vivo: [https://debsday.netlify.app/](https://debsday.netlify.app/)

---

## Funcionalidades

- Contagem regressiva dinâmica até o aniversário
- Céu estrelado animado
- Lua com animação romântica
- Casal animado desenhado em canvas
- Efeito confete que dispara ao abrir a caixa
- Caixa de presente com mensagem surpresa
- Atualização automática do ano no rodapé
- Mensagens personalizadas com fotos e texto carinhoso
- Design responsivo e compatível com dispositivos móveis

---

## Tecnologias usadas

- HTML5 & CSS3
- JavaScript ES6+
- Canvas API para animações desenhadas
- [GSAP](https://greensock.com/gsap/) para animações complexas e suavizadas
- [confetti.js](https://github.com/mathusummut/confetti.js) para efeitos de confetes
- Netlify para hospedagem

---

## Como usar localmente

1. Clone este repositório:  
   git clone https://github.com/seuusuario/happy-birthday.git


2. Entre na pasta:

   cd happy-birthday
   
3. Abra o arquivo `index.html` no navegador (recomendo usar Live Server ou similar para evitar problemas de CORS).

---

## Regras importantes para o projeto

* Não modifique diretamente os IDs dos elementos HTML que são usados pelo JavaScript (`#yearauto`, `#confetti`, `#starry-sky`, `#c`, etc.), para evitar erros nas animações.
* Os arquivos de script (`index.js`, `confetti.min.js`) e estilos (`style.css`) devem estar no caminho correto conforme referenciado no HTML.
* Para adicionar novas fotos ou mensagens na galeria, mantenha a estrutura HTML das divs `.note` e `.love-notes` para garantir a animação funcione corretamente.
* Evite rodar as animações (como confete) em loop contínuo para não sobrecarregar o navegador; prefira ativar apenas em eventos (ex: ao abrir a caixa).
* Atualize o ano automaticamente usando a função JS já incluída, para que o rodapé fique sempre correto.
* Mantenha as camadas dos canvas com `z-index` controlados no CSS para que as animações apareçam em ordem correta.

---

## Personalização

Você pode alterar facilmente:

* Datas no script para mudar a contagem regressiva
* Textos e fotos dentro das notas para personalizar as mensagens
* Cores e estilos no CSS para adequar ao seu gosto
* Velocidade e estilo das animações no JS

---

## Contato

Desenvolvido por Diego Lins
GitHub: [https://github.com/diegolins](https://github.com/diegolins)
Site do projeto: [https://debsday.netlify.app/](https://debsday.netlify.app/)
E-mail: [diegolins@example.com](mailto:diegolins@example.com)

---

## Licença

Este projeto está aberto para uso pessoal e não comercial.
Por favor, não remova os créditos do autor nas versões públicas.

---

### Obrigado por visitar!

🎉 Que este projeto traga muita alegria e amor! 💖

```
