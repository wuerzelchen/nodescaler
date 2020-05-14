const msrest = require('ms-rest');
const msRestAzure = require('ms-rest-azure');
const AzureServiceClient = msRestAzure.AzureServiceClient;
const clientId = process.env['CLIENT_ID'];
const secret = process.env['SECRET'];
const domain = process.env['TENANT_ID']; 
const subscriptionId = process.env['SUBSCRIPTION_ID'];
var rgName =  process.env.RESOURCE_GROUP_NAME;
var aksName = process.env.AKS_NAME;
var aksPoolName = process.env.AKS_POOL_NAME;
var nodeCount = process.env.NODE_COUNT;
const url = `https://management.azure.com/subscriptions/${subscriptionId}/resourceGroups/${rgName}/providers/Microsoft.ContainerService/managedClusters/${aksName}/agentPools/${aksPoolName}?api-version=2020-03-01`;
var client;
 
msRestAzure.loginWithServicePrincipalSecret(clientId, secret, domain).then((creds) => {
  client = new AzureServiceClient(creds);
  let options = {
    method: 'PUT',
    url: url,
    headers: {
      'user-agent': 'Nodescaler/1.0'
    },
    body: {
      'properties.count': nodeCount
    }
  }
  return client.sendRequest(options);
}).then((result) => {
  console.dir(result, {depth: null, colors: true});
}).catch((err) => {
  console.dir(err, {depth: null, colors: true});
});