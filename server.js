const WebSocket = require('ws');

// Cria o servidor WebSocket na porta 8080
const wss = new WebSocket.Server({ port: 8080 });

console.log('Servidor WebSocket iniciado na porta 8080.');

wss.on('connection', (ws) => {
  console.log('Novo cliente conectado.');

  // Evento de mensagem recebida do cliente
  ws.on('message', (message) => {
    console.log(`Mensagem recebida do cliente: ${message}`);

    // Envia uma resposta para o cliente
    ws.send(`Echo do servidor: ${message}`);
  });

  // Evento de desconexão
  ws.on('close', () => {
    console.log('Cliente desconectado.');
  });
});
