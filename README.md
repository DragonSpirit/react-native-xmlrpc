# react-native-xmlrpc
xmlrpc client for react-native
---

* Based on node-xmlrpc: https://github.com/baalexander/node-xmlrpc
* Remove server-side
* Replace http & https with superagent
* Replace sax with htmlparser2
* Deserialization response into json

# usage

```js
import xmlrpc from 'react-native-xmlrpc'
const client = new xmlrpc('YOUR_XMLRPC_URL')
client.call(method, [params], (err, value) => {
  // your handler
})
```
