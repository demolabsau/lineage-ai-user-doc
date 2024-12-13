---
sidebar_position: 1
---

# Deployment Overview

This document provides an overview of the deployment process for **Demo Labs Lineage AI**. The deployment involves setting up three containers that host different components of the application.

## Overview

Our platform consists of the following containers:

- **`lineage-ui`**: The frontend application.
- **`lineage-llm`**: The backend API.
- **`lineage-llm-service`**: The Large Language Model (LLM) instance.

## Minimum hardware requirements

| Service Name          | Machine Type/Service Type | CPU | RAM (GB) | GPU           | GPU Memory (GB) | STORAGE (GB) | Amount |
|-----------------------|---------------------------|-----|----------|---------------|------------|--------------|--------|
| Database Service      | Standard VM               | 2   | 8        | NA            | NA         | 10          | 1      |
| Frontend/Backend Host | Standard VM               | 2   | 8        | NA            | NA         | 10           | 1      |
| LLM Inference Host    | GPU Accelerated VM     | 8  | 100+      | 8 x A100-40GB or similar | 192        | 200          | 1      |


## Deployment Process Overview

To deploy the application on your cloud infrastructure, follow these high-level steps:

1. **Obtain Docker Images**

   - The Docker images for each component are stored in our private docker image repository.
   - Contact our support team to grant you access to our image repository

> Please following cloud vendor specific steps to finsh deploy process

2. **Configure Access Permissions**

   - Set up Workload Identity Pools to authenticate your cloud services with our Artifact Registry.
   - Ensure that your services have authorization to read and pull the Docker images.

> We only offer access permission to our images to customers with contract relationship. Please contact us to grant your environment with image access.

3. **Deploy Containers**

   - Use your preferred on-premise server instance solution (e.g., AWS EC2, Azure Virtual Machines, GCP Compute Instances) to deploy the containers.
   - Deploy the three containers (`lineage-ui`, `lineage-llm`, `lineage-llm-service`) within your cloud environment.

4. **Set Up Networking**

   - Configure networking to allow communication between the containers.
   - Expose the necessary ports and endpoints for internal communication and external access.

## Next Steps

For detailed instructions and assistance with the deployment process, please refer to cloud vendor specific deployment documentation. Or you can contact our support team.

---
