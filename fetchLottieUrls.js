const https = require('https');

function search(query) {
  const options = {
    hostname: 'api.github.com',
    path: `/search/code?q=${encodeURIComponent(query + ' extension:json')}`,
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
          const rawUrl = `https://raw.githubusercontent.com/${item.repository.full_name}/master/${item.path}`;
          console.log(rawUrl);
        });
      } else {
        console.log('No results for', query);
      }
    });
  });
}

search('filename:linkedin.json');
search('filename:github.json');
search('filename:instagram.json');
search('filename:email.json');
