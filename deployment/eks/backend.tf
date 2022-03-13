terraform {
  backend "s3" {
    bucket = "s3-cruik-labs"
    key    = "eks.tfstate"
    region = "ap-southeast-2"
  }
}
