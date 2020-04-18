const https = require('https')

let apiKey = '';
let lookupDomain = 'example.com';

const options = {
  hostname: 'api.jsonwhois.io',
  port: 443,
  path: `/whois/domain?key=${apiKey}&domain=${lookupDomain}`,
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()
