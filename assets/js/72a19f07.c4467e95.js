"use strict";(self.webpackChunklineage_ai_user_doc=self.webpackChunklineage_ai_user_doc||[]).push([[8920],{9863:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"usage/api","title":"Quick start for Lineage-AI backend API","description":"Overview","source":"@site/docs/usage/api.md","sourceDirName":"usage","slug":"/usage/api","permalink":"/lineage-ai-user-doc/docs/usage/api","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usage/api.md","tags":[],"version":"current","frontMatter":{},"sidebar":"usageSidebar","previous":{"title":"Quick start for Analyze Job","permalink":"/lineage-ai-user-doc/docs/usage/analyse"}}');var i=s(4848),l=s(8453);const t={},o="Quick start for Lineage-AI backend API",a={},c=[{value:"Overview",id:"overview",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Authentication",id:"authentication",level:3},{value:"API Endpoints",id:"api-endpoints",level:2},{value:"1. UFW Report Analysis (submitting UFW repository analysis tasks) - <code>POST /lineage-ufw/ufwreport</code>",id:"1-ufw-report-analysis-submitting-ufw-repository-analysis-tasks---post-lineage-ufwufwreport",level:3},{value:"2. General Code Analysis - <code>POST /lineage-llm/report</code>",id:"2-general-code-analysis---post-lineage-llmreport",level:3},{value:"3. Get Report Results - <code>GET /lineage-llm/report/{report_id}</code>",id:"3-get-report-results---get-lineage-llmreportreport_id",level:3},{value:"4. Get Report Status - <code>GET /lineage-llm/report/{report_id}/status</code>",id:"4-get-report-status---get-lineage-llmreportreport_idstatus",level:3},{value:"5. Delete Report - <code>DELETE /lineage-llm/report/{report_id}</code>",id:"5-delete-report---delete-lineage-llmreportreport_id",level:3},{value:"6. List Reports - <code>GET /lineage-llm/reports</code>",id:"6-list-reports---get-lineage-llmreports",level:3},{value:"7. Query Logs - <code>GET /lineage-llm/logs</code>",id:"7-query-logs---get-lineage-llmlogs",level:3},{value:"8. System Health Check - <code>GET /monitoring/health</code>",id:"8-system-health-check---get-monitoringhealth",level:3},{value:"9. System Metrics - <code>GET /monitoring/metrics</code>",id:"9-system-metrics---get-monitoringmetrics",level:3},{value:"Error Handling",id:"error-handling",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Support",id:"support",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"quick-start-for-lineage-ai-backend-api",children:"Quick start for Lineage-AI backend API"})}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Lineage-AI is a powerful data lineage tracking and analysis tool that helps you understand and analyze your codebase. It provides detailed insights into data flows, dependencies, and relationships within your code."}),"\n",(0,i.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsx)(n.h3,{id:"authentication",children:"Authentication"}),"\n",(0,i.jsx)(n.p,{children:"All API endpoints require authentication using a Bearer token. Include your API key in the request headers:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Authorization: Bearer <token>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["So, for example, if the API token you copied had the value eyJhbGciOi..., you would use the header:\n",(0,i.jsx)(n.code,{children:"Authorization: Bearer eyJhbGciOi..."})]}),"\n",(0,i.jsx)(n.h2,{id:"api-endpoints",children:"API Endpoints"}),"\n",(0,i.jsxs)(n.h3,{id:"1-ufw-report-analysis-submitting-ufw-repository-analysis-tasks---post-lineage-ufwufwreport",children:["1. UFW Report Analysis (submitting UFW repository analysis tasks) - ",(0,i.jsx)(n.code,{children:"POST /lineage-ufw/ufwreport"})]}),"\n",(0,i.jsx)(n.p,{children:"This endpoint is specifically designed for Westpac UFW Bitbucket repositories. It analyzes UFW-specific XML configurations and associated scripts to provide comprehensive lineage analysis."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Endpoint:"})," ",(0,i.jsx)(n.code,{children:"POST /lineage-ufw/ufwreport"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"customer_id"})," (required): Your unique customer identifier"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"report_name"})," (required): Name for your analysis report"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"repo_link"})," (required): Bitbucket repository URL containing UFW configurations"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"repo_token"})," (required): Bitbucket access token for repository access"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"repo_branch"}),' (required): Repository branch to analyze (default: "main")']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"env_type"}),' (optional): Environment type (default: "DEV")']}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Request:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-curl",children:'curl -X POST "https://api.lineageai.example.com/lineage-ufw/ufwreport" \\\n  -H "Authorization: Bearer your_api_key" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "customer_id": "cust123",\n    "report_name": "UFW Analysis Report",\n    "repo_link": "https://github.com/organization/ufw-repo",\n    "repo_token": "github_pat_xxx",\n    "repo_branch": "main",\n    "env_type": "DEV"\n  }\'\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Response Codes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"200"}),": Success. Report creation initiated successfully"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "report": {\n    "report_id": "550e8400-e29b-41d4-a716-446655440000",\n    "customer_id": "cust123",\n    "report_name": "Python Analysis",\n    "status": "pending",\n    "current_step": "files_loaded",\n    "start_time": "2024-12-17T10:30:00Z",\n    "load_file_status": {\n      "success": [\n        {\n          "file_name": "script1.py",\n          "file_type": "py",\n          "message": "Successfully loaded Python file"\n        },\n        {\n          "file_name": "script2.py",\n          "file_type": "py",\n          "message": "Successfully loaded Python file"\n        }\n      ],\n      "failed": []\n    }\n  },\n  "message": "Files loaded successfully, analysis started"\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"400"}),": Bad Request. Invalid input parameters"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"401"}),": Unauthorized. Invalid or missing API key"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"500"}),": Internal Server Error"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"2-general-code-analysis---post-lineage-llmreport",children:["2. General Code Analysis - ",(0,i.jsx)(n.code,{children:"POST /lineage-llm/report"})]}),"\n",(0,i.jsx)(n.p,{children:"This endpoint handles analysis of one or more Python or SQL files, code files and json schema for general data lineage tracking. You can either upload files directly or provide a repository URL for analysis."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Endpoint:"})," ",(0,i.jsx)(n.code,{children:"POST /lineage-llm/report"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"customer_id"})," (required): Your unique customer identifier"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"report_name"})," (required): Name for your analysis report"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"files"})," (optional): Array of files to analyze (Python/SQL/JSON)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"repos"})," (optional): JSON string containing repository information. Must be provided if no files are uploaded."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Request (File Upload):"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-curl",children:'curl -X POST "https://api.lineageai.example.com/lineage-llm/report" \\\n  -H "Authorization: Bearer your_api_key" \\\n  -F "customer_id=cust123" \\\n  -F "report_name=PythonAnalysis" \\\n  -F "files=@script1.py" \\\n  -F "files=@script2.py" \\\n  -F "files=@schema.json"\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Request (Repository Analysis):"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-curl",children:'curl -X POST "https://api.lineageai.example.com/lineage-llm/report" \\\n  -H "Authorization: Bearer your_api_key" \\\n  -H "Content-Type: multipart/form-data" \\\n  -F "customer_id=cust123" \\\n  -F "report_name=RepoAnalysis" \\\n  -F \'repos=[{\n      "link": "Repository URL (required)",\n      "token": "Access token for private repositories (required)",\n      "branch": "Repository branch (optional, defaults to \'main\')",\n      "state": "Environment state (optional, defaults to \'dev\')"\n    }]\'\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Response Codes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"200"}),": Success. Report creation initiated successfully"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "report": {\n    "report_id": "550e8400-e29b-41d4-a716-446655440000",\n    "customer_id": "cust123",\n    "report_name": "Data Analysis Report",\n    "status": "pending",\n    "current_step": "analyzing_data",\n    "start_time": "2024-12-17T04:23:24.746Z",\n    "end_time": "2024-12-17T04:23:24.746Z",\n    "error": "string"\n  },\n  "message": "Files loaded successfully and analysis started"\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"400"}),": Bad Request. Invalid input parameters or file format"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"401"}),": Unauthorized. Invalid or missing API key"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"500"}),": Internal Server Error"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"3-get-report-results---get-lineage-llmreportreport_id",children:["3. Get Report Results - ",(0,i.jsx)(n.code,{children:"GET /lineage-llm/report/{report_id}"})]}),"\n",(0,i.jsx)(n.p,{children:"Retrieve the complete analysis results for a specific report."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Endpoint:"})," ",(0,i.jsx)(n.code,{children:"GET /lineage-llm/report/{report_id}"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Request:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-curl",children:'curl "https://api.lineageai.example.com/lineage-llm/report/550e8400-e29b-41d4-a716-446655440000" \\\n  -H "Authorization: Bearer your_api_key"\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Response Codes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"200"}),": Success. Returns complete report details including analysis results","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "report": {\n        "report_id": "550e8400-e29b-41d4-a716-446655440000",\n        "customer_id": "cust123",\n        "report_name": "Python Analysis",\n        "status": "completed",\n        "current_step": "completed",\n        "start_time": "2024-12-17T10:30:00Z",\n        "end_time": "2024-12-17T10:32:00Z",\n        "report_result": {\n              "main_logic": [\n                  {\n                      "file_source": "script1.py",\n                      "analysis": {\n                          "dependencies": [],\n                          "data_flows": [],\n                          "functions": []\n                      }\n                  }\n              ],\n                "graph": {\n                    "nodes": [],\n                    "edges": []\n                }\n        },\n        "load_file_status": {\n            "success": [],\n            "failed": []\n        },\n        "input_token": 1500,\n        "output_token": 800,\n        "error": null\n    },\n    "logs": {\n        "log_id1": {\n            "timestamp": "2024-12-17T10:30:00.123",\n            "level": "ERROR",\n            "msg": "error msg"\n        }\n    }\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"401"}),": Unauthorized. Invalid or missing API key"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"404"}),": Not Found. Report ID does not exist"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"500"}),": Internal Server Error"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"4-get-report-status---get-lineage-llmreportreport_idstatus",children:["4. Get Report Status - ",(0,i.jsx)(n.code,{children:"GET /lineage-llm/report/{report_id}/status"})]}),"\n",(0,i.jsx)(n.p,{children:"Check the current status of a report."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Endpoint:"})," ",(0,i.jsx)(n.code,{children:"GET /lineage-llm/report/{report_id}/status"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Request:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-curl",children:'curl "https://api.lineageai.example.com/lineage-llm/report/550e8400-e29b-41d4-a716-446655440000/status" \\\n  -H "Authorization: Bearer your_api_key"\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Response Codes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"200"}),": Success. Returns current report status","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "report_id": "550e8400-e29b-41d4-a716-446655440000",\n  "status": "processing",\n  "current_step": "analyzing_data",\n  "start_time": "2024-12-17T10:30:00Z",\n  "end_time": null,\n  "error": null,\n  "input_token": 800,\n  "output_token": 400\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"401"}),": Unauthorized. Invalid or missing API key"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"404"}),": Not Found. Report ID does not exist"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"500"}),": Internal Server Error"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"5-delete-report---delete-lineage-llmreportreport_id",children:["5. Delete Report - ",(0,i.jsx)(n.code,{children:"DELETE /lineage-llm/report/{report_id}"})]}),"\n",(0,i.jsx)(n.p,{children:"Delete a specific report and its associated data."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Endpoint:"})," ",(0,i.jsx)(n.code,{children:"DELETE /lineage-llm/report/{report_id}"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Request:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-curl",children:'curl -X DELETE "https://api.lineageai.example.com/lineage-llm/report/550e8400-e29b-41d4-a716-446655440000" \\\n  -H "Authorization: Bearer your_api_key"\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Response Codes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"200"}),": Success. Report deleted successfully"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"401"}),": Unauthorized. Invalid or missing API key"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"404"}),": Not Found. Report ID does not exist"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"500"}),": Internal Server Error"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"6-list-reports---get-lineage-llmreports",children:["6. List Reports - ",(0,i.jsx)(n.code,{children:"GET /lineage-llm/reports"})]}),"\n",(0,i.jsx)(n.p,{children:"Get a paginated list of all reports."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Endpoint:"})," ",(0,i.jsx)(n.code,{children:"GET /lineage-llm/reports"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Query Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"customer_id"})," (optional): Filter reports by customer ID"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"page"})," (optional): Page number (default: 1)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"size"})," (optional): Items per page (default: 10)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Request:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-curl",children:'curl "https://api.lineageai.example.com/lineage-llm/reports?page=1&size=10" \\\n  -H "Authorization: Bearer your_api_key"\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Response Codes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"200"}),": Success. Returns list of reports","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n"reports": [\n  {\n    "report_id": "550e8400-e29b-41d4-a716-446655440000",\n    "customer_id": "cust123",\n    "report_name": "Python Analysis",\n    "status": "completed",\n    "current_step": "completed",\n    "start_time": "2024-12-17T10:30:00Z",\n    "end_time": "2024-12-17T10:32:00Z"\n  },\n  {\n    "report_id": "660e8400-e29b-41d4-a716-446655440001",\n    "customer_id": "cust123",\n    "report_name": "UFW Analysis",\n    "status": "processing",\n    "current_step": "analyzing_data",\n    "start_time": "2024-12-17T10:35:00Z",\n    "end_time": null\n  }\n],\n"page": 1,\n"size": 10,\n"total": 2\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"401"}),": Unauthorized. Invalid or missing API key"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"500"}),": Internal Server Error"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"7-query-logs---get-lineage-llmlogs",children:["7. Query Logs - ",(0,i.jsx)(n.code,{children:"GET /lineage-llm/logs"})]}),"\n",(0,i.jsx)(n.p,{children:"Search and retrieve system logs with various filters."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Endpoint:"})," ",(0,i.jsx)(n.code,{children:"GET /lineage-llm/logs"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Query Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"start_time"})," (optional): Start time for log range (ISO format: YYYY-MM-DD HH:MM",":SS",")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"end_time"})," (optional): End time for log range (ISO format: YYYY-MM-DD HH:MM",":SS",")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"min_level"})," (optional): Minimum log level (DEBUG, INFO, WARNING, ERROR, CRITICAL)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"report_id"})," (optional): Filter logs by report ID"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"error_type"})," (optional): Filter by error type (e.g., 'ReportError', 'SystemError')"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"additional_info_key"})," (optional): Search for specific key in additional_info field"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"additional_info_value"})," (optional): Match value for the specified additional_info_key"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"page"})," (optional): Page number (default: 1)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"size"})," (optional): Items per page (default: 20)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Request:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-curl",children:'curl "https://api.lineageai.example.com/lineage-llm/logs?min_level=ERROR&page=1&size=20" \\\n  -H "Authorization: Bearer your_api_key"\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Response Codes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"200"}),": Success. Returns filtered logs","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "logs": [\n    {\n      "log_id": "log123",\n      "timestamp": "2024-12-17T10:30:00.123",\n      "level": "ERROR",\n      "msg": "Failed to process file",\n      "logger": "analysis_service",\n      "hostname": "server-01",\n      "module": "analysis_service",\n      "function": "process_file",\n      "line_number": 123,\n      "report_id": "550e8400-e29b-41d4-a716-446655440000",\n      "error_type": "ProcessingError",\n      "additional_info": {\n        "file_name": "script1.py",\n        "error_details": "Invalid syntax"\n      }\n    }\n  ],\n  "page": 1,\n  "size": 20,\n  "total": 1,\n  "total_pages": 1\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"400"}),": Bad Request. Invalid parameters"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"401"}),": Unauthorized. Invalid or missing API key"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"500"}),": Internal Server Error"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"8-system-health-check---get-monitoringhealth",children:["8. System Health Check - ",(0,i.jsx)(n.code,{children:"GET /monitoring/health"})]}),"\n",(0,i.jsx)(n.p,{children:"Check the health status of various system components."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Endpoint:"})," ",(0,i.jsx)(n.code,{children:"GET /monitoring/health"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Request:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-curl",children:'curl "https://api.lineageai.example.com/monitoring/health" \\\n  -H "Authorization: Bearer your_api_key"\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Response Codes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"200"}),": Success. All services are healthy"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "service_type": "frontend",\n    "status": "healthy",\n    "check_time": "2024-12-17T10:30:00Z",\n    "response_time": 150.5,\n    "error_message": null\n  },\n  {\n    "service_type": "backend",\n    "status": "healthy",\n    "check_time": "2024-12-17T10:30:00Z",\n    "response_time": 85.2,\n    "error_message": null\n  },\n  {\n    "service_type": "llm",\n    "status": "healthy",\n    "check_time": "2024-12-17T10:30:00Z",\n    "response_time": 250.8,\n    "error_message": null\n  },\n  {\n    "service_type": "database",\n    "status": "healthy",\n    "check_time": "2024-12-17T10:30:00Z",\n    "response_time": 45.3,\n    "error_message": null\n  }\n]\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"401"}),": Unauthorized. Invalid or missing API key"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"500"}),": Internal Server Error. One or more services unhealthy"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"9-system-metrics---get-monitoringmetrics",children:["9. System Metrics - ",(0,i.jsx)(n.code,{children:"GET /monitoring/metrics"})]}),"\n",(0,i.jsx)(n.p,{children:"Get detailed metrics about system performance and reliability."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Endpoint:"})," ",(0,i.jsx)(n.code,{children:"GET /monitoring/metrics"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Query Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"start_date"})," (optional): Start date for metrics calculation (ISO format)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"end_date"})," (optional): End date for metrics calculation (ISO format)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Request:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-curl",children:'curl "https://api.lineageai.example.com/monitoring/metrics" \\\n  -H "Authorization: Bearer your_api_key"\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Response Codes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"200"}),": Success. Returns system metrics"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "service_type": "frontend",\n    "total_checks": 5760,\n    "healthy_checks": 5750,\n    "total_downtime": 15.5,\n    "healthy_time": 1424.5,\n    "average_response_time": 145.8,\n    "uptime_percentage": 99.85,\n    "last_check_time": "2024-12-17T10:30:00Z",\n    "last_status": "healthy"\n  },\n  {\n    "service_type": "backend",\n    "total_checks": 5760,\n    "healthy_checks": 5758,\n    "total_downtime": 5.2,\n    "healthy_time": 1434.8,\n    "average_response_time": 82.5,\n    "uptime_percentage": 99.92,\n    "last_check_time": "2024-12-17T10:30:00Z",\n    "last_status": "healthy"\n  }\n]\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"401"}),": Unauthorized. Invalid or missing API key"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"500"}),": Internal Server Error"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,i.jsx)(n.p,{children:"All endpoints return standardized error responses in the following format:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "message": "Detailed error description",\n  "code": 400, // HTTP status code\n  "details": {\n    // Additional error context, varies by error type\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"UFW Repository Structure:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ensure your UFW repository follows the standard structure with Control-M configurations in the correct locations (If the directory structure does not match the following or has been updated, please contact the Demo Labs team for modification)"}),"\n",(0,i.jsxs)(n.li,{children:["XML files should be in the ",(0,i.jsx)(n.code,{children:"control-m/{ENV}/"})," directory"]}),"\n",(0,i.jsxs)(n.li,{children:["Pipeline files should be in the ",(0,i.jsx)(n.code,{children:"metadata/pipelines"})," directory"]}),"\n",(0,i.jsxs)(n.li,{children:["Python scripts should be in the ",(0,i.jsx)(n.code,{children:"scr/"})," directory"]}),"\n",(0,i.jsxs)(n.li,{children:["Sql scripts should be in the ",(0,i.jsx)(n.code,{children:"sql/"})," directory"]}),"\n",(0,i.jsxs)(n.li,{children:["Metadata files should be in the ",(0,i.jsx)(n.code,{children:"metadata/datasets"})," directory"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"GitHub/Bitbucket Access:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use a GitHub/Bitbucket token with appropriate read permissions"}),"\n",(0,i.jsx)(n.li,{children:"For private repositories, ensure the token has repository access"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Error Handling:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Always check the report status after submission"}),"\n",(0,i.jsx)(n.li,{children:"If a report fails, check the error message in the report details or you also can check logs by report id"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"support",children:"Support"}),"\n",(0,i.jsx)(n.p,{children:"This guide covers the basic features and usage of the Data Lineage Analysis System.\nFor more detailed information about specific features or advanced usage, please contact the Demo Labs team."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var r=s(6540);const i={},l=r.createContext(i);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);