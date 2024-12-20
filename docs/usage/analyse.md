---
sidebar_position: 3
---

# Quick start for Analyze Job

The Demo Labs Lineage AI platform provides powerful analysis capabilities for your code and data assets. This guide will walk you through creating analysis jobs effectively.

## Creating an Analysis Job

Demo Labs Lineage AI offers three distinct methods for submitting analysis tasks, each designed for specific use cases and requirements.

### 1. File Upload Analysis

This method allows direct file uploads for analysis of Python, SQL, code files, and JSON schema for general data lineage tracking.

#### Steps to submit:
1. Navigate to the Reports page
2. Click the "Create New Report" button
3. Select "File Upload" as the source type
4. Upload your file(s) following the supported format guidelines
5. Configure analysis parameters
6. Submit the task

#### Important Notes:
- Ensure files are in supported formats
- Maximum file size limits apply
- Multiple files can be uploaded simultaneously
- Each file will be validated before processing

### 2. GitHub Repository Analysis

This method enables analysis of code repositories hosted on GitHub, supporting Python, SQL, code files, and JSON schema for comprehensive lineage tracking.

#### Steps to submit:
  1. Navigate to the Reports page
  2. Click the "Create New Report" button
  3. Select "GitHub" as the source type
  4. Set the Report Name
  5. Provide the GitHub repository URL(Example format: ` https://github.com/[username]/[repository]`)
  6. Configure repository access settings(GitHub Token)
  7. Set repository Branch 
  8. Submit the task

#### Important Notes:
- Repository must be accessible
- Ensure correct repository URL format
- Private repositories require proper authentication
- Specify branch if needed

### 3. UFW Repository Analysis

This specialized analysis method is specifically designed for Westpac UFW Bitbucket repositories, focusing on UFW-specific XML configurations and associated scripts.

#### Steps to submit:
1. Navigate to the Reports page
2. Click the "Create New Report" button
3. Select "UFW Analysis" as the source type
4. Set the Report Name
5. Provide the UFW repository URL(Example format: ` https://[domain]/projects/[PROJECT_CODE]/repos/[reponame]`)
6. Configure repository access settings(Repository Token)
7. Set Environment Type parameters(Example : `dev`)
8. Submit the task

#### Repository Structure Requirements:
```
repository-root/
├── control-m/{ENV}/        # XML files
├── metadata/
│   ├── pipelines/         # Pipeline files
│   └── datasets/          # Metadata files
├── src/                   # Python scripts
└── sql/                   # SQL scripts
```

#### Important Notes:
- Repository must follow the standard UFW structure
- XML files must be in `control-m/{ENV}/` directory
- Pipeline files must be in `metadata/pipelines` directory
- Python scripts must be in `src/` directory
- SQL scripts must be in `sql/` directory
- Metadata files must be in `metadata/datasets` directory
- Contact Demo Labs team if directory structure differs

## Supported File Types

Demo Labs Lineage AI supports the following file types for analysis:

* **Python Files (.py)**
    - Requirements: Valid Python syntax
    - Best for: Code analysis and dependency tracking

* **SQL Files (.sql)**
    - Requirements: Standard SQL syntax
    - Best for: Database query analysis and optimization

* **JSON Schema Files**
    - Requirements: Valid JSON schema format
    - Best for: Data structure validation and documentation

* **CSV Files**
    - Requirements: Properly formatted CSV with headers
    - Best for: Data analysis and transformation tracking

* **JSON pipeline Files**
  - Requirements: Valid JSON schema format
  - Best for: Data structure validation and documentation

#### UFW-Specific File Types

In addition to the support of the above file types, the ufw task also adds support for the following file types.

* **XML Configuration Files**
  - Location: `control-m/{ENV}/` directory
  - Purpose: UFW-specific configurations and job definitions
  - Requirements: Valid XML syntax following UFW standards

* **JSON Pipeline Files**
  - Location: `metadata/pipelines` directory
  - Purpose: Pipeline definitions and flow configurations
  - Requirements: Valid JSON format with pipeline specifications

* **Project Configuration Files (.ddep)**
  - Purpose: Project-level settings and configurations
  - Requirements: Valid .ddep format following project standards
  - Important: Must follow UFW project configuration guidelines

## Monitoring Job Progress

Once created, your job will appear in the Reports table with the following information:

* **Name**: Custom name of your analysis job
* **ID**: Unique identifier for tracking
* **Status**: Current state of the job (Running, Completed, Failed)
* **Current Step**: The current phase of analysis
* **Start Time**: When the job began processing
* **Source Type**: Type of input (File Upload/GitHub)
* **Repository Details**: For GitHub sources, shows repository name and URL

## Job Status Indicators

* **Running**: Job is actively processing
* **Completed**: Analysis finished successfully
* **Failed**: Error occurred during processing
* **Pending**: Waiting to begin processing


## Error Handling

If you encounter errors:

1. Check the error message in the red notification area
2. Verify input file formats and requirements
3. Ensure all required fields are properly filled
4. Try resubmitting the job if necessary

## Best Practices

* **File Naming**: Use clear, descriptive names for your analysis jobs
* **Regular Monitoring**: Check job status periodically for progress
* **Documentation**: Add relevant comments and descriptions to your jobs
* **Format Verification**: Double-check file formats before submission

💡 **Pro Tip**: Always verify your input files meet the format requirements before submission to ensure successful analysis.
