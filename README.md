# Nodescaler

This Docker image helps to scale the AKS user node pool down to 0.
Currently it's not possible to do that via the azure-cli, nor the autoscaler.
The API somehow does not work with scaling it up. So this is explicitly to scale down to 0.

## How to run
```bash
docker container run -e CLIENT_ID=<armClientId> -e SECRET=<armClientSecret> -e TENANT_ID=<tenantId> -e SUBSCRIPTION_ID=<subscriptionId> -e RESOURCE_GROUP_NAME=<rgName> -e AKS_NAME=<aksName> -e AKS_POOL_NAME=gpupool -e NODE_COUNT=0 nodescaler
```