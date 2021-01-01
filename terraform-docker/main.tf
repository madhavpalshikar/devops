terraform {
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
    }
  }
}

provider "docker" {
    version = "~> 2.6"
    host    = "npipe:////.//pipe//docker_engine"
}

resource "docker_container" "ubuntu" {
  name  = "foo"
  image = "dokphpmysql:latest"
  ports {
    internal = 80
    external = 8000
  }
}
