const https = require('https');

function search() {
  const options = {
    hostname: 'api.github.com',
    path: `/search/repositories?q=lottie+icons`,
    headers: {
      'User-Agent': 'Node.js',
      'Accept': 'application/vnd.github.v3+json'
    }
  };

  https.get(options, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const parsed = JSON.parse(data);
      if (parsed.items && parsed.items.length > 0) {
        parsed.items.slice(0, 5).forEach(item => {
          console.log(item.full_name);
        });
      } else {
        console.log('No results');
      }
    });
  });
}

search();
