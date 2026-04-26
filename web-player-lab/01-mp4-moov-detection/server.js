const http = require('http');
const https = require('https');

const VIDEO_URL = 'https://pub-b7a20ab52a5c4b82b24ea4832b8a5b36.r2.dev/player/bigmp4-moov-first.mp4';
const VIDEO_URL = 'https://pub-b7a20ab52a5c4b82b24ea4832b8a5b36.r2.dev/player/bigmp4-moov-end.mp4';

const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.method} ${req.url} ${req.headers.range ? `Range: ${req.headers.range}` : ''}`);

  const options = new URL(VIDEO_URL);
  options.method = 'GET';
  options.headers = {};

  if (req.headers.range) {
    options.headers['Range'] = req.headers.range;
  }

  const videoReq = https.request(options, (videoRes) => {
    console.log(`Video response status: ${videoRes.statusCode}`);

    const headers = { ...videoRes.headers };
    headers['Access-Control-Allow-Origin'] = '*';

    res.writeHead(videoRes.statusCode, headers);
    videoRes.pipe(res);

  });

  videoReq.on('error', (err) => {
    console.error('Failed to fetch video:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Failed to fetch video');
  });

  videoReq.end();
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});