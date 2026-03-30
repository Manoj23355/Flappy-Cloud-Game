provider "aws" {
  region = "us-east-1"
}

module "flappy_site" {
  source      = "./modules/s3-static-site"
  bucket_name = var.bucket_name
}