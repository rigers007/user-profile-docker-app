User Profile Docker App

A simple full-stack containerized web application built with Node.js, Express, MongoDB, Docker, and AWS ECR.

Project Overview

This project allows users to:

View a user profile
Edit profile information
Save profile changes into MongoDB
Track profile update history
Run the entire application using Docker containers

The application was containerized using Docker and deployed through a private AWS Elastic Container Registry (ECR).

Technologies Used
Node.js
Express.js
MongoDB
Mongo Express
Docker
Docker Compose
AWS ECR
Git & GitHub
Features
Editable user profile interface
Persistent MongoDB storage
Automatic profile update history tracking
Mongo Express database visualization
Multi-container Docker environment
AWS private container registry integration
Project Structure
user-profile-app/
│
├── Dockerfile
├── docker-compose.yml
├── my-app.yaml
├── package.json
├── server.js
├── script.js
├── style.css
├── index.html
└── .gitignore
Docker Workflow
Build Docker Image
docker build -t my-app:1.0 .
Run Containers
docker compose -f my-app.yaml up
Push Image to AWS ECR
docker push <your-ecr-repository-url>
MongoDB Collections
users

Stores the current user profile.

profile_changes

Stores all profile update history entries.

Learning Outcomes

Through this project I gained hands-on experience with:

Docker containerization
Docker Compose orchestration
AWS ECR image management
MongoDB integration
Full-stack application deployment workflows
Git & GitHub version control
Future Improvements
Add user authentication
Implement REST API validation
Add CI/CD pipeline with GitHub Actions
Deploy application on AWS EC2 or Kubernetes
Add responsive frontend design
Author

Rigers Maja

GitHub: https://github.com/rigers007
LinkedIn: https://www.linkedin.com
