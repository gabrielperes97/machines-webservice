# Machines Webservice

Contém o webservice com a api para o Machines. O Webservice foi desenvolvido em Node com express. Este projeto contém também o simulador de maquinas o qual se comunica pela api do machines.

## Uso

Executa-se o comando ```npm install``` para resolver as dependências. Após isso pode se executar o webservice e o simulador.

### Webservice 

Para utlizá-lo é necessário definir a porta onde o servidor será executado e o endereço do banco MongoDB no arquivo dev.json na pasta configs.
Após o servidor é executado com ```npm start```.

### Simulador

Para executar o simulador é necessário executar ```npm run simulator```. O endereço da api e a taxa de atualização dos status das máquinas (em milisegundos) podem ser passados como parâmetro, como ```npm run simulator -- -u 127.0.0.1:3000 -t 1000``` ou ainda ```node simulator.js -u 127.0.0.1 -t 1000```. Se não especificados, o host 127.0.0.1:3000 e a taxa de atualização de 1000ms serão usados como padrão.


