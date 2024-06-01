const ws = new WebSocket('wss://your-heroku-app-name.herokuapp.com');

ws.onopen = () => {
    console.log('Connected to WebSocket server');
    ws.send('Hello Server!');
};

ws.onmessage = (event) => {
    console.log(`Received: ${event.data}`);
};

ws.onclose = () => {
    console.log('Disconnected from WebSocket server');
};
