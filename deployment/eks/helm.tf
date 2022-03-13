resource "helm_release" "deploy-3-replicas" {
  name  = "deploy-3-replicas"
  chart = "../deploy-3-replicas.yml"
}
