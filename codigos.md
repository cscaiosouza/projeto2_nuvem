# Operações no Git
Faça na área de trabalho para poupar sua vida
- `git bash here`  comando do botão direito na pasta escolhida
- `git init`  iniciar o repositório
- `git add .`  adicionar arquivos existentes (se quiser um específico coloque `git add (nome do arquivo).(extensão)`
- `git status` lista mudanças que estão no hold
- `git commit -m "(texto da versão)"` adicionar ao git

- `git add -A` atualiza todos os arquivos alterados

## Clonar um repositório
- Abra o terminal e navegue até a pasta onde deseja clonar o repositório (usando o `cd` e o caminho do diretório)
- `git clone (caminho do repositório)` o caminho do repositório pode ser também um link do github
Exemplo: se você estiver clonando um repositório local em uma pasta chamada "meu-repositorio" que está dentro da sua pasta de usuário, o comando seria: `git clone ~/meu-repositorio`

## Recuperar uma versão a partir de um commit específico
- `git log` ver o histórico
- `git checkout (código)` para voltar para alguma versão específica, precisa colocar linha de referência do commit usando o histórico

# AWS
## Configuração do EC2
- Coloque um nome para a instância
- Tipo de instância: nível gratuito
- Par de chaves: prosseguir sem um par de chaves
- Configuração de rede: permitir tráfego SSH, HTTPS e HTTP
- Confirme as configurações
- Dentro da instância, vá para a aba de segurança e selecione para editar as regras de entrada
- Adicione uma regra de entrada com:
	- Intervalo de portas: 3000
	- Tipo de origem: Qualquer local IPv4
- Salve as regras e conecte-se na instância

## Configuração da máquina linux
### Node
- `sudo su` administrador
- `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash` instalar nvm
- `. ~/.nvm/nvm.sh` ativar o nvm
- `nvm install --lts` instalar a versão mais recente do node
- `node -v` verificar se foi instalado
### Git
- `sudo yum install git -y` instalar git
- `git --version` verificar se foi instalado
- `git clone (link github)` clonar repositório
- Usei o meu repositório de exemplo: 
### Iniciar a máquina
- Navegue até o diretório onde está o index.js
- `git clone https://github.com/aliciasouzan/desenvolvimento-de-software-em-nuvem.git`
- `ls desenvolvimento-de-software-em-nuvem/02/` para ir até a pasta que está com o index
- `ls` pra entrar na pasta
- `sudo su`
- `npm init` aperte enter para prosseguir
- `sudo su`
- `npm install express --save`
- `node index.js` iniciar o servidor

## Teste (Exemplos)
- Selecione o PublicIP e acrescente a porta criada. O IP usado no exemplo pode mudar.
	- IP:3000
- Para acessar as três portas acrescente a rota
	- IP:3000/rota1
	- IP:3000/rota2
	- IP:3000/rota3

- Desligue a máquina após finalizar
