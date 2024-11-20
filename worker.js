// public/baremux/worker.js
import { BareMux } from '@mercuryworkshop/bare-mux';

const worker = new BareMux();

self.onmessage = (event) => {
    worker.handleMessage(event);
};

worker.addEventListener('message', (event) => {
    self.postMessage(event.data);
});
