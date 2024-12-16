---
sidebar_position: 8
---
# Environment Variables Reference

This document describes the environment variables required for the Data Lineage API backend.

## Critical Variables (Required)

These variables must be configured for the system to function properly:

| Variable | Description                                                | Default |
|----------|------------------------------------------------------------|---------|
| API_KEY | Authentication key for accessing the API endpoints         | preset |
| DB_HOST | PostgreSQL database host address                           | None |
| DB_NAME | PostgreSQL database name                                   | None |
| DB_USER | PostgreSQL database user                                   | None |
| DB_PASSWORD | PostgreSQL database password                               | None |
| DB_PORT | PostgreSQL database port                                   | `5432` |
| LINEAGEAI_MODEL_NAME | Name of the LINEAGEAI LLM model to use                     | preset |
| LINEAGEAI_API_KEY | API key for accessing the LINEAGEAI LLM service            | preset |
| VM_PUBLIC_IP | IP address of the LINEAGEAI LLM service hoster   | None |
| FRONTEND_HOST | Frontend application host URL for service health monitoring | `https://lineageai.demolabs.com.au/Register` |
| BACKEND_HOST | Backend service host URL for service health monitoring     | `https://lineage-llm-185230470468.us-central1.run.app` |

## Optional Variables

These variables can be configured to customize the system behavior:

### General Configuration
| Variable | Description | Default |
|----------|-------------|---------|
| FLASK_ENV | Environment type (development/production) | `development` |
| ENVIRONMENT | Environment type (production) | `production` |

### Logging Configuration
| Variable | Description | Default |
|----------|-------------|---------|
| LOG_LEVEL | Logging level (DEBUG/INFO/WARNING/ERROR/CRITICAL) | `INFO` |
| LOG_CONSOLE_ENABLED | Enable console logging (true/false) | `true` |
| LOG_FILE_ENABLED | Enable file logging (true/false) | `true` |
| LOG_DIR | Directory for log files | `logs` |
| LOG_FILENAME | Name of the log file | `app.log` |
| LOG_ROTATION_BACKUP_COUNT | Number of backup log files to keep | `5` |
| LOG_ROTATION_MAX_BYTES | Maximum size of each log file | `10485760` (10MB) |
| LOG_ROTATION_COMPRESS | Enable log file compression (true/false) | `true` |

### Splunk Integration
| Variable | Description | Default |
|----------|-------------|---------|
| LOG_SPLUNK_ENABLED | Enable Splunk logging integration | `false` |
| LOG_SPLUNK_HOST | Splunk server host address | None |
| LOG_SPLUNK_TOKEN | Authentication token for Splunk | None |
| LOG_SPLUNK_INDEX | Splunk index name | None |
| LOG_SPLUNK_SOURCE | Source identifier for Splunk logs | None |

## Environment Check

The system performs a validation of environment variables during startup:
- Missing critical variables will trigger CRITICAL level error messages
- Missing optional variables will trigger WARNING level messages
- In development environment, the system will log the values of configured variables for verification