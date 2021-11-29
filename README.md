# -- Trilha de conhecimento Frontend --
O primeiro passo para seguir com a trilha é fazer o versionamento de seus códigos e para isso siga os passos adiante:

#### Antes de você iniciar o passo a passo verifique seu sistema operacional. 
- Windows faça a [instalação do git](https://gitforwindows.org/). 
- Linux pode desconsiderar pois nativamente o terminal já é um recurso.

-------------------------------------

1 - Escolha um diretório em sua máquina e então abra o terminal (Linux) ou git bash (Windows) e execute o comando: `git clone -c http.sllVerify=false https://github.com/firminofl/trilha-front.git`

2 - Entre na pasta criada após a execução do comando de clone do repositório `cd trilha-front/`

3 - Crie um branch com seu nome `git checkout -b trilha-front-<seu nome>`
- Exemplo: `git checkout -b trilha-front-filipe-firmino`

4 - Adicione seu desafio na pasta trilha-front. Organize os desafios em pastas para uma melhor avaliação.
Para fazer o commit de alguma coisa é necessário que a branch tenha sido alterada (adicionado arquivos, criado um projeto base, removido algo ou ter feito alguma alteração em um arquivo existente).

5 - `git status` (para ver as modificações)

6 - `git add .` (adicionar as mudanças no git)

7 - `git status`

8 - Comando para commitar as mudanças com uma mensagem `git commit -m "Desafio <número do desafio>"`
- Exemplo: `git commit -m "Desafio 1"`

9 - Para fazer push na origin `git push origin trilha-front-<seu nome>`
- Exemplo: `git push origin trilha-front-filipe-firmino`
