# Lineage-AI API Documentation - User Guide

## Overview

Lineage-AI is a powerful data lineage tracking and analysis tool that helps you understand and analyze your codebase. It provides detailed insights into data flows, dependencies, and relationships within your code.

## Quick Start

### Authentication
All API endpoints require authentication using a Bearer token. Include your API key in the request headers:
```
Authorization: Bearer <token>
```
So, for example, if the API token you copied had the value eyJhbGciOi..., you would use the header:
```Authorization: Bearer eyJhbGciOi...```

## API Endpoints

### 1. UFW Report Analysis (submitting UFW repository analysis tasks) - `POST /lineage-ufw/ufwreport`

This endpoint is specifically designed for Westpac UFW Bitbucket repositories. It analyzes UFW-specific XML configurations and associated scripts to provide comprehensive lineage analysis.

**Endpoint:** `POST /lineage-ufw/ufwreport`

**Parameters:**
- `customer_id` (required): Your unique customer identifier
- `report_name` (required): Name for your analysis report
- `repo_link` (required): Bitbucket repository URL containing UFW configurations
- `repo_token` (required): Bitbucket access token for repository access
- `repo_branch` (required): Repository branch to analyze (default: "main")
- `env_type` (optional): Environment type (default: "DEV")

**Example Request:**
```curl
curl -X POST "https://api.lineageai.example.com/lineage-ufw/ufwreport" \
  -H "Authorization: Bearer your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "customer_id": "cust123",
    "report_name": "UFW Analysis Report",
    "repo_link": "https://github.com/organization/ufw-repo",
    "repo_token": "github_pat_xxx",
    "repo_branch": "main",
    "env_type": "DEV"
  }'
```

**Response Codes:**

- `200`: Success. Report creation initiated successfully
  ```json
  {
    "report": {
      "report_id": "550e8400-e29b-41d4-a716-446655440000",
      "customer_id": "cust123",
      "report_name": "Python Analysis",
      "status": "pending",
      "current_step": "files_loaded",
      "start_time": "2024-12-17T10:30:00Z",
      "load_file_status": {
        "success": [
          {
            "file_name": "script1.py",
            "file_type": "py",
            "message": "Successfully loaded Python file"
          },
          {
            "file_name": "script2.py",
            "file_type": "py",
            "message": "Successfully loaded Python file"
          }
        ],
        "failed": []
      }
    },
    "message": "Files loaded successfully, analysis started"
  }
  ```

- `400`: Bad Request. Invalid input parameters
- `401`: Unauthorized. Invalid or missing API key
- `500`: Internal Server Error

### 2. General Code Analysis - `POST /lineage-llm/report`

This endpoint handles analysis of one or more Python or SQL files, code files and json schema for general data lineage tracking. You can either upload files directly or provide a repository URL for analysis.

**Endpoint:** `POST /lineage-llm/report`

**Parameters:**
- `customer_id` (required): Your unique customer identifier
- `report_name` (required): Name for your analysis report
- `files` (optional): Array of files to analyze (Python/SQL/JSON)
- `repos` (optional): JSON string containing repository information

**Example Request (File Upload):**
```curl
curl -X POST "https://api.lineageai.example.com/lineage-llm/report" \
  -H "Authorization: Bearer your_api_key" \
  -F "customer_id=cust123" \
  -F "report_name=PythonAnalysis" \
  -F "files=@script1.py" \
  -F "files=@script2.py"
```

**Example Request (Repository Analysis):**
```curl
curl -X POST "https://api.lineageai.example.com/lineage-llm/report" \
  -H "Authorization: Bearer your_api_key" \
  -F "customer_id=cust123" \
  -F "report_name=RepoAnalysis" \
  -F 'repos=[{
    "link": "https://github.com/organization/repo",
    "token": "github_pat_xxx",
    "branch": "main"
  }]'
```

**Response Codes:**
- `200`: Success. Report creation initiated successfully

   ```json
  {
     "report": {
       "report_id": "550e8400-e29b-41d4-a716-446655440000",
       "customer_id": "cust123",
       "report_name": "Data Analysis Report",
       "status": "pending",
       "current_step": "analyzing_data",
       "start_time": "2024-12-17T04:23:24.746Z",
       "end_time": "2024-12-17T04:23:24.746Z",
       "error": "string"
     },
     "message": "Files loaded successfully and analysis started"
   }
   ```
- `400`: Bad Request. Invalid input parameters or file format
- `401`: Unauthorized. Invalid or missing API key
- `500`: Internal Server Error

### 3. Get Report Results - `GET /lineage-llm/report/{report_id}`

Retrieve the complete analysis results for a specific report.

**Endpoint:** `GET /lineage-llm/report/{report_id}`

**Example Request:**
```curl
curl "https://api.lineageai.example.com/lineage-llm/report/550e8400-e29b-41d4-a716-446655440000" \
  -H "Authorization: Bearer your_api_key"
```

**Response Codes:**
- `200`: Success. Returns complete report details including analysis results
  ```json
  {
      "report": {
          "report_id": "550e8400-e29b-41d4-a716-446655440000",
          "customer_id": "cust123",
          "report_name": "Python Analysis",
          "status": "completed",
          "current_step": "completed",
          "start_time": "2024-12-17T10:30:00Z",
          "end_time": "2024-12-17T10:32:00Z",
          "report_result": {
                "main_logic": [
                    {
                        "file_source": "script1.py",
                        "analysis": {
                            "dependencies": [],
                            "data_flows": [],
                            "functions": []
                        }
                    }
                ],
                  "graph": {
                      "nodes": [],
                      "edges": []
                  }
          },
          "load_file_status": {
              "success": [],
              "failed": []
          },
          "input_token": 1500,
          "output_token": 800,
          "error": null
      },
      "logs": {
          "log_id1": {
              "timestamp": "2024-12-17T10:30:00.123",
              "level": "ERROR",
              "msg": "error msg"
          }
      }
  }
  ```
- `401`: Unauthorized. Invalid or missing API key
- `404`: Not Found. Report ID does not exist
- `500`: Internal Server Error

### 4. Get Report Status - `GET /lineage-llm/report/{report_id}/status`

Check the current status of a report.

**Endpoint:** `GET /lineage-llm/report/{report_id}/status`

**Example Request:**
```curl
curl "https://api.lineageai.example.com/lineage-llm/report/550e8400-e29b-41d4-a716-446655440000/status" \
  -H "Authorization: Bearer your_api_key"
```

**Response Codes:**
- `200`: Success. Returns current report status
  ```json
  {
    "report_id": "550e8400-e29b-41d4-a716-446655440000",
    "status": "processing",
    "current_step": "analyzing_data",
    "start_time": "2024-12-17T10:30:00Z",
    "end_time": null,
    "error": null,
    "input_token": 800,
    "output_token": 400
  }
  ```
- `401`: Unauthorized. Invalid or missing API key
- `404`: Not Found. Report ID does not exist
- `500`: Internal Server Error

### 5. Delete Report - `DELETE /lineage-llm/report/{report_id}`

Delete a specific report and its associated data.

**Endpoint:** `DELETE /lineage-llm/report/{report_id}`

**Example Request:**
```curl
curl -X DELETE "https://api.lineageai.example.com/lineage-llm/report/550e8400-e29b-41d4-a716-446655440000" \
  -H "Authorization: Bearer your_api_key"
```

**Response Codes:**
- `200`: Success. Report deleted successfully
- `401`: Unauthorized. Invalid or missing API key
- `404`: Not Found. Report ID does not exist
- `500`: Internal Server Error

### 6. List Reports - `GET /lineage-llm/reports`

Get a paginated list of all reports.

**Endpoint:** `GET /lineage-llm/reports`

**Query Parameters:**
- `customer_id` (optional): Filter reports by customer ID
- `page` (optional): Page number (default: 1)
- `size` (optional): Items per page (default: 10)

**Example Request:**
```curl
curl "https://api.lineageai.example.com/lineage-llm/reports?page=1&size=10" \
  -H "Authorization: Bearer your_api_key"
```

**Response Codes:**
- `200`: Success. Returns list of reports
    ```json
  {
    "reports": [
      {
        "report_id": "550e8400-e29b-41d4-a716-446655440000",
        "customer_id": "cust123",
        "report_name": "Python Analysis",
        "status": "completed",
        "current_step": "completed",
        "start_time": "2024-12-17T10:30:00Z",
        "end_time": "2024-12-17T10:32:00Z"
      },
      {
        "report_id": "660e8400-e29b-41d4-a716-446655440001",
        "customer_id": "cust123",
        "report_name": "UFW Analysis",
        "status": "processing",
        "current_step": "analyzing_data",
        "start_time": "2024-12-17T10:35:00Z",
        "end_time": null
      }
    ],
    "page": 1,
    "size": 10,
    "total": 2
  }
  ```
- `401`: Unauthorized. Invalid or missing API key
- `500`: Internal Server Error

### 7. Query Logs - `GET /lineage-llm/logs`

Search and retrieve system logs with various filters.

**Endpoint:** `GET /lineage-llm/logs`

**Query Parameters:**
- `start_time`(optional): Start time for log range (ISO format)
- `end_time`(optional): End time for log range (ISO format)
- `min_level`(optional): Minimum log level (DEBUG, INFO, WARNING, ERROR, CRITICAL)
- `report_id`(optional): Filter logs by report ID
- `page`(optional): Page number (default: 1)
- `size`(optional): Items per page (default: 20)

**Example Request:**
```curl
curl "https://api.lineageai.example.com/lineage-llm/logs?min_level=ERROR&page=1&size=20" \
  -H "Authorization: Bearer your_api_key"
```

**Response Codes:**
- `200`: Success. Returns filtered logs
  ```json
  {
    "logs": [
      {
        "log_id": "log123",
        "timestamp": "2024-12-17T10:30:00.123",
        "level": "ERROR",
        "msg": "Failed to process file",
        "logger": "analysis_service",
        "hostname": "server-01",
        "module": "analysis_service",
        "function": "process_file",
        "line_number": 123,
        "report_id": "550e8400-e29b-41d4-a716-446655440000",
        "error_type": "ProcessingError",
        "additional_info": {
          "file_name": "script1.py",
          "error_details": "Invalid syntax"
        }
      }
    ],
    "page": 1,
    "size": 20,
    "total": 1,
    "total_pages": 1
  }
  ```
- `400`: Bad Request. Invalid parameters
- `401`: Unauthorized. Invalid or missing API key
- `500`: Internal Server Error

### 8. System Health Check - `GET /monitoring/health`

Check the health status of various system components.

**Endpoint:** `GET /monitoring/health`

**Example Request:**
```curl
curl "https://api.lineageai.example.com/monitoring/health" \
  -H "Authorization: Bearer your_api_key"
```

**Response Codes:**
- `200`: Success. All services are healthy
  ```json
  [
    {
      "service_type": "frontend",
      "status": "healthy",
      "check_time": "2024-12-17T10:30:00Z",
      "response_time": 150.5,
      "error_message": null
    },
    {
      "service_type": "backend",
      "status": "healthy",
      "check_time": "2024-12-17T10:30:00Z",
      "response_time": 85.2,
      "error_message": null
    },
    {
      "service_type": "llm",
      "status": "healthy",
      "check_time": "2024-12-17T10:30:00Z",
      "response_time": 250.8,
      "error_message": null
    },
    {
      "service_type": "database",
      "status": "healthy",
      "check_time": "2024-12-17T10:30:00Z",
      "response_time": 45.3,
      "error_message": null
    }
  ]
  ```

- `401`: Unauthorized. Invalid or missing API key
- `500`: Internal Server Error. One or more services unhealthy

### 9. System Metrics - `GET /monitoring/metrics`

Get detailed metrics about system performance and reliability.

**Endpoint:** `GET /monitoring/metrics`

**Query Parameters:**
- `start_date` (optional): Start date for metrics calculation (ISO format)
- `end_date` (optional): End date for metrics calculation (ISO format)

**Example Request:**
```curl
curl "https://api.lineageai.example.com/monitoring/metrics" \
  -H "Authorization: Bearer your_api_key"
```

**Response Codes:**
- `200`: Success. Returns system metrics
  ```json
  [
    {
      "service_type": "frontend",
      "total_checks": 5760,
      "healthy_checks": 5750,
      "total_downtime": 15.5,
      "healthy_time": 1424.5,
      "average_response_time": 145.8,
      "uptime_percentage": 99.85,
      "last_check_time": "2024-12-17T10:30:00Z",
      "last_status": "healthy"
    },
    {
      "service_type": "backend",
      "total_checks": 5760,
      "healthy_checks": 5758,
      "total_downtime": 5.2,
      "healthy_time": 1434.8,
      "average_response_time": 82.5,
      "uptime_percentage": 99.92,
      "last_check_time": "2024-12-17T10:30:00Z",
      "last_status": "healthy"
    }
  ]
  ```

- `401`: Unauthorized. Invalid or missing API key
- `500`: Internal Server Error


## Error Handling

All endpoints return standardized error responses in the following format:

```json
{
  "message": "Error description",
  "code": 400,
  "details": {
    "additional": "error details"
  }
}
```

## Best Practices

1. **UFW Repository Structure:**
    - Ensure your UFW repository follows the standard structure with Control-M configurations in the correct locations (If the directory structure does not match the following or has been updated, please contact the Demo Labs team for modification)
    - XML files should be in the `control-m/{ENV}/` directory
    - Pipeline files should be in the `metadata/pipelines` directory
    - Python scripts should be in the `scr/` directory
    - Sql scripts should be in the `sql/` directory
    - Metadata files should be in the `metadata/datasets` directory

2. **GitHub/Bitbucket Access:**
    - Use a GitHub/Bitbucket token with appropriate read permissions
    - For private repositories, ensure the token has repository access

3. **Error Handling:**
    - Always check the report status after submission
    - If a report fails, check the error message in the report details or you also can check logs by report id

## Support

This guide covers the basic features and usage of the Data Lineage Analysis System. 
For more detailed information about specific features or advanced usage, please contact the Demo Labs team.



