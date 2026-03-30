output "website_url" {
  value = module.flappy_site.website_url
}

output "bucket_name" {
value = aws_s3_bucket.s3_bucket.bucket
}
