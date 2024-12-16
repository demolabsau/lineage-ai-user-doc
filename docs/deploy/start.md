---
sidebar_position: 2
---
# Deploy on public cloud

:::info 
You need to get access to our private docker image repository by contacting our team 
before following the steps.
:::

## Deploy on Azure VMs with GCP Artifact Registry Access

This section explains how to deploy Lineage AI on Azure VMs

### 1. Set up Azure Virtual Machines

Create three VMs according to the specifications in the deployment overview:

1. **Frontend VM** (Standard_D2s_v3):
   - 2 vCPUs, 8GB RAM
   - Ubuntu Server 20.04 LTS

2. **Backend VM** (Standard_D2s_v3):
   - 2 vCPUs, 8GB RAM
   - Ubuntu Server 20.04 LTS

3. **LLM Service VM** (NC24ads_A100_v4):
   - 8+ vCPUs, 100GB+ RAM
   - Ubuntu Server 20.04 LTS
   - 8x NVIDIA A100 GPUs

### 2. Install Dependencies

On all VMs:
```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Google Cloud SDK
curl https://sdk.cloud.google.com | bash
exec -l $SHELL
gcloud init
```

On LLM Service VM, additionally:
```bash
# Install NVIDIA Container Toolkit
distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add -
curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
sudo apt-get update && sudo apt-get install -y nvidia-container-toolkit
sudo systemctl restart docker
```

### 3. Configure GCP Authentication

On each VM:
```bash
# Configure Docker with GCP credentials
gcloud auth configure-docker gcr.io
```

### 4. Deploy Containers

1. **Frontend (UI) Deployment**:
```bash
docker pull gcr.io/ivory-signer-435502-f9/lineage-frontend:latest
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_API_TOKEN=your_token \
  -e NEXT_PUBLIC_API_BASE_URL=http://backend-vm-ip:8081 \
  gcr.io/ivory-signer-435502-f9/lineage-frontend:latest
```

2. **Backend (LLM API) Deployment**:
```bash
docker pull gcr.io/ivory-signer-435502-f9/lineage-llm:latest
docker run -d -p 8081:8081 \
  -e FLASK_ENV=production \
  -e DB_HOST=your_db_host \
  -e DB_PORT=your_db_port \
  -e DB_NAME=your_db_name \
  -e DB_USER=your_db_user \
  -e DB_PASSWORD=your_db_password \
  gcr.io/ivory-signer-435502-f9/lineage-llm:latest
```

3. **LLM Service Deployment**:
```bash
docker pull gcr.io/ivory-signer-435502-f9/lineage-llm-service:latest
docker run -d --gpus all -p 8000:8000 \
  gcr.io/ivory-signer-435502-f9/lineage-llm-service:latest
```

### 5. Verify Deployment

1. Check if containers are running:
```bash
docker ps
```

2. Test frontend access:
   - Open browser: `http://frontend-vm-ip:3000`

3. Test backend health:
```bash
curl http://backend-vm-ip:8081/health
```

## Deploy on GCP Compute Engine

### 1. Set up GCP Compute Engine VMs

Create three VMs according to the specifications in the deployment overview:

1. **Frontend VM** (e2-standard-2):
   - 2 vCPUs
   - 8GB RAM
   - Ubuntu Server 20.04 LTS
   - 10GB boot disk

2. **Backend VM** (e2-standard-2):
   - 2 vCPUs
   - 8GB RAM
   - Ubuntu Server 20.04 LTS
   - 10GB boot disk

3. **LLM Service VM** (a2-highgpu-8g):
   - 12 vCPUs
   - 85GB RAM
   - Ubuntu Server 20.04 LTS
   - 200GB boot disk
   - 8x NVIDIA A100 GPUs
   - GPU memory: 40GB per GPU

### 2. Create Compute Engine Instances

1. **Create Frontend VM**:
```bash
gcloud compute instances create lineage-frontend \
  --machine-type=e2-standard-2 \
  --zone=us-central1-a \
  --image-family=ubuntu-2004-lts \
  --image-project=ubuntu-os-cloud \
  --boot-disk-size=10GB \
  --service-account=lineage-compute-sa@${PROJECT_ID}.iam.gserviceaccount.com \
  --scopes=cloud-platform
```

2. **Create Backend VM**:
```bash
gcloud compute instances create lineage-backend \
  --machine-type=e2-standard-2 \
  --zone=us-central1-a \
  --image-family=ubuntu-2004-lts \
  --image-project=ubuntu-os-cloud \
  --boot-disk-size=10GB \
  --service-account=lineage-compute-sa@${PROJECT_ID}.iam.gserviceaccount.com \
  --scopes=cloud-platform
```

3. **Create LLM Service VM**:
```bash
gcloud compute instances create lineage-llm-service \
  --machine-type=a2-highgpu-8g \
  --zone=us-central1-a \
  --image-family=ubuntu-2004-lts \
  --image-project=ubuntu-os-cloud \
  --boot-disk-size=200GB \
  --maintenance-policy=TERMINATE \
  --accelerator="type=nvidia-tesla-a100,count=8" \
  --metadata="install-nvidia-driver=True" \
  --service-account=lineage-compute-sa@${PROJECT_ID}.iam.gserviceaccount.com \
  --scopes=cloud-platform
```

### 3. Install Dependencies

Connect to each instance:
```bash
gcloud compute ssh INSTANCE_NAME --zone=us-central1-a
```

On all instances:
```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

On LLM Service instance, additionally:
```bash
# Install NVIDIA Container Toolkit
distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add -
curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
sudo apt-get update && sudo apt-get install -y nvidia-container-toolkit
sudo systemctl restart docker
```

### 4. Configure Docker Authentication

On each instance:
```bash
# Configure Docker credential helper
sudo apt-get install -y google-cloud-sdk-docker-credential-gcr

# Configure Docker
mkdir -p ~/.docker
echo '{
  "credHelpers": {
    "gcr.io": "gcr"
  }
}' > ~/.docker/config.json

# The service account credentials will be automatically used
```

### 5. Deploy Containers

1. **Frontend (UI) Deployment**:
```bash
docker pull gcr.io/ivory-signer-435502-f9/lineage-frontend:latest
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_API_TOKEN=your_token \
  -e NEXT_PUBLIC_API_BASE_URL=http://BACKEND_INTERNAL_IP:8081 \
  gcr.io/ivory-signer-435502-f9/lineage-frontend:latest
```

2. **Backend (LLM API) Deployment**:
```bash
docker pull gcr.io/ivory-signer-435502-f9/lineage-llm:latest
docker run -d -p 8081:8081 \
  -e FLASK_ENV=production \
  -e DB_HOST=your_db_host \
  -e DB_PORT=your_db_port \
  -e DB_NAME=your_db_name \
  -e DB_USER=your_db_user \
  -e DB_PASSWORD=your_db_password \
  gcr.io/ivory-signer-435502-f9/lineage-llm:latest
```

3. **LLM Service Deployment**:
```bash
docker pull gcr.io/ivory-signer-435502-f9/lineage-llm-service:latest
docker run -d --gpus all -p 8000:8000 \
  gcr.io/ivory-signer-435502-f9/lineage-llm-service:latest
```

### 6. Configure Firewall Rules

```bash
# Allow incoming traffic to frontend
gcloud compute firewall-rules create allow-frontend \
  --allow tcp:3000 \
  --target-tags=lineage-frontend

# Allow incoming traffic to backend
gcloud compute firewall-rules create allow-backend \
  --allow tcp:8081 \
  --target-tags=lineage-backend

# Allow incoming traffic to LLM service
gcloud compute firewall-rules create allow-llm-service \
  --allow tcp:8000 \
  --target-tags=lineage-llm-service
```

### 7. Verify Deployment

1. Check container status on each instance:
```bash
docker ps
```

2. Test frontend access:
   - Open browser: `http://FRONTEND_EXTERNAL_IP:3000`

3. Test backend health:
```bash
curl http://BACKEND_EXTERNAL_IP:8081/health
```

## Deploy on AWS EC2

### 1. Set up AWS EC2 Instances

Create three instances according to the specifications in the deployment overview:

1. **Frontend Instance** (t3.medium):
   - 2 vCPUs
   - 4GB RAM
   - Ubuntu Server 20.04 LTS AMI
   - 10GB EBS volume

2. **Backend Instance** (t3.medium):
   - 2 vCPUs
   - 4GB RAM
   - Ubuntu Server 20.04 LTS AMI
   - 10GB EBS volume

3. **LLM Service Instance** (p4d.24xlarge):
   - 96 vCPUs
   - 1,152GB RAM
   - Ubuntu Server 20.04 LTS AMI
   - 200GB EBS volume
   - 8x NVIDIA A100 GPUs
   - GPU memory: 40GB per GPU

### 2. Launch EC2 Instances

1. **Frontend Instance**:
```bash
aws ec2 run-instances \
  --image-id ami-0c7217cdde317cfec \
  --instance-type t3.medium \
  --key-name your-key-pair \
  --security-group-ids your-security-group \
  --subnet-id your-subnet \
  --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=lineage-frontend}]' \
  --count 1
```

2. **Backend Instance**:
```bash
aws ec2 run-instances \
  --image-id ami-0c7217cdde317cfec \
  --instance-type t3.medium \
  --key-name your-key-pair \
  --security-group-ids your-security-group \
  --subnet-id your-subnet \
  --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=lineage-backend}]' \
  --count 1
```

3. **LLM Service Instance**:
```bash
aws ec2 run-instances \
  --image-id ami-0c7217cdde317cfec \
  --instance-type p4d.24xlarge \
  --key-name your-key-pair \
  --security-group-ids your-security-group \
  --subnet-id your-subnet \
  --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=lineage-llm}]' \
  --count 1
```

### 3. Configure Security Groups

```bash
# Create security group
aws ec2 create-security-group \
  --group-name lineage-sg \
  --description "Security group for Lineage AI"

# Allow frontend access
aws ec2 authorize-security-group-ingress \
  --group-name lineage-sg \
  --protocol tcp \
  --port 3000 \
  --cidr 0.0.0.0/0

# Allow backend access
aws ec2 authorize-security-group-ingress \
  --group-name lineage-sg \
  --protocol tcp \
  --port 8081 \
  --cidr 0.0.0.0/0

# Allow LLM service access
aws ec2 authorize-security-group-ingress \
  --group-name lineage-sg \
  --protocol tcp \
  --port 8000 \
  --cidr 0.0.0.0/0
```

### 4. Install Dependencies

Connect to each instance:
```bash
ssh -i "your-key.pem" ubuntu@INSTANCE_PUBLIC_DNS
```

On all instances:
```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

On LLM Service instance:
```bash
# Install NVIDIA drivers and toolkit
sudo apt-get update
sudo apt-get install -y nvidia-driver-470
distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add -
curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
sudo apt-get update && sudo apt-get install -y nvidia-container-toolkit
sudo systemctl restart docker
```

### 5. Deploy Containers

1. **Frontend (UI) Deployment**:
```bash
docker pull gcr.io/ivory-signer-435502-f9/lineage-frontend:latest
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_API_TOKEN=your_token \
  -e NEXT_PUBLIC_API_BASE_URL=http://BACKEND_PRIVATE_IP:8081 \
  gcr.io/ivory-signer-435502-f9/lineage-frontend:latest
```

2. **Backend (LLM API) Deployment**:
```bash
docker pull gcr.io/ivory-signer-435502-f9/lineage-llm:latest
docker run -d -p 8081:8081 \
  -e FLASK_ENV=production \
  -e DB_HOST=your_db_host \
  -e DB_PORT=your_db_port \
  -e DB_NAME=your_db_name \
  -e DB_USER=your_db_user \
  -e DB_PASSWORD=your_db_password \
  gcr.io/ivory-signer-435502-f9/lineage-llm:latest
```

3. **LLM Service Deployment**:
```bash
docker pull gcr.io/ivory-signer-435502-f9/lineage-llm-service:latest
docker run -d --gpus all -p 8000:8000 \
  gcr.io/ivory-signer-435502-f9/lineage-llm-service:latest
```

### 6. Verify Deployment

1. Check container status:
```bash
docker ps
```

2. Test frontend access:
   - Open browser: `http://FRONTEND_PUBLIC_DNS:3000`

3. Test backend health:
```bash
curl http://BACKEND_PUBLIC_DNS:8081/health
```

