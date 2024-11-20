import express from 'express';
import { createServer } from 'http';
import { runBare } from '@tomphttp/bare-server-node';
import { createWispServer } from 'wisp-server-node';
import { initializeUV } from '@titaniumnetwork-dev/ultraviolet';

const app = express();
const server = createServer(app);

// Serve static files from the public directory
app.use(express.static('public'));

(async () => {
    const wispServer = createWispServer();
    const bareServer = await runBare({ port: 8081 });

    // Initialize Ultraviolet
    initializeUV(server, {
        wisp: wispServer,
        bare: bareServer,
    });

    // Start server
    server.listen(8080, () => {
        console.log('Ultraviolet Proxy is running on http://localhost:8080');
    });
})();
