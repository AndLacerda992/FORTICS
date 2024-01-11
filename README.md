**Projeto de front-end Angular 11 do sistema eProtesto**

Para correta execução, este projeto precisa estar rodando em conjunto com as aplicações "Protesto.IdentityServer" e "Cenprot.Api".

*Vamos documentar aqui guias e lembretes sobre este projeto, especificamente da parte de front-end.*

---

## Download do projeto

Este projeto está sendo versionado simultaneamente em dois repositórios. 
Um do TFS, em : 10.25.51.2\CENPROT, que contém o branch principal com a versão mais estável. 
Outro no bitcket, em: https://bitbucket.org/IRAN_FRANCA/, que contém os commits mais recentes ainda em desenvolvimento.

Como baixar a versão mais recente do projeto:

1. Acessar o site do **bitbucket** na página do repositório do projeto: https://bitbucket.org/IRAN_FRANCA/eprotesto.webapp/src/main/.
2. Clicar no botão "Clone" para exibir a linha de comando git para download do repositório para sua máquina.
3. Instalar o git na sua máquina, caso ainda não esteja instalado, para poder executar a linha de comando. https://git-scm.com/downloads
4. Criar uma pasta no seu computador onde ficarão os projetos que você quiser baixar. Ex: C:\bitbucket.
5. Abrir o terminal do windows e navegar até a pasta que você criou.
6. Executar o comando "git clone" completo que foi exibido na página do projeto no site do bitbucket. O projeto será clonado para sua máquina.

Caso não tenha certeza se já possui o git instalado na sua máquina, pode executar o comando "git --version" para verificar. 
Se o git já estiver instalado na máquina, a versão atual do git será exibida.

---

## Executar o projeto

Com o projeto já clonado na sua máquina, você pode executá-lo para testar localmente. 
O projeto Angular utiliza ferramentas desenvolvidas em NodeJs para o ambiente de desenvolvimento. Por isso, é necessários instalar o NodeJs na
sua máquina caso deseje executar o projeto de front-end localmente.

1. Instale o NodeJs na sua máquina, caso ainda não esteja instalado. https://nodejs.org/en/download/
2. No terminal do windows, navegue até a pasta da raíz do projeto (onde se encontra o arquivo **package.json**).
3. Execute o comando "**npm install**" para fazer o download das dependências do projeto. Uma pasta "node_modues" será criada na raíz do projeto para armazenar os pacotes necessárias.
3. Verifique as configurações no arquivo environments.json do projeto de front para configurar se deseja executar todos os projetos localmente ou somente excutar o projeto de front-end localmente utilizando o sso e a api publicados em homologação.
4. Execute o comando "**npm start**" para executar o projeto de front-end localmente.
5. O projeto estará rodando na sua máquina em http://localhost:4200.

Caso não tenha certeza se já possui o node instalado na sua máquina, pode executar o comando "node --version" para verificar. 
Se o node já estiver instalado na máquina, a versão atual do node será exibida.

---

## Template do projeto

Este projeto foi criado a partir do template SB Admin, [página oficial](https://startangular.com/product/sb-admin-angular-theme/). 
Muitos pacotes, exemplos de organização de pastas e rotas do projeto, serviços, ícones de font-awesome, etc.. já estão configurados pelo template.



