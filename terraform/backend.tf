terraform {
  backend "s3" {
    bucket = "terraform-state-sampleproject-nginx"
    key    = "flappy-cloud/terraform.tfstate"
    region = "us-east-1"

    use_lockfile = true
  }
}