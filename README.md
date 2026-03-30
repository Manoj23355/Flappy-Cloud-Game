# Flappy Cloud 🎮

A browser-based **Flappy Bird clone** deployed on **AWS S3** with **Terraform modular infrastructure** and **CI/CD automation** using GitHub Actions.  

Play the game live here: [Website URL](http://your-bucket-name.s3-website-us-east-1.amazonaws.com)

---

## 🧩 Project Features

- Static game built with **HTML, CSS, and JavaScript**  
- **AWS S3** used for static website hosting  
- **Terraform modules** for reusable infrastructure  
- **Remote backend** (S3) with native locking for state management  
- **GitHub Actions CI/CD** pipeline for automated deployment  

---

## 🚀 Architecture

```text
Developer → GitHub → GitHub Actions → Terraform Module → S3 Static Website → Browser (Flappy Cloud)