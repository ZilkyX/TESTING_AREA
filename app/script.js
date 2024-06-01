const ws = new WebSocket('wss://https://nishoi.github.io/TESTING_AREA/');

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
