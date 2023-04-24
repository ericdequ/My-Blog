---
title: 'Golang and Gorilla Mux'
date: '2023-02-03'
tags: ['GO', 'Gorilla-Mux', 'Backend']
draft: false
summary: This blog post shows how to use Golang and Gorilla mux to create a simple web application. The steps are to create a new project, create a main.go file, and start the server.
---


# Introduction

Golang is a programming language that is known for its speed, simplicity, and concurrency. It is a popular choice for building web applications and APIs.

Gorilla mux is a web framework for Golang that is known for its performance, flexibility, and ease of use. It is a popular choice for building web applications and APIs.

In this blog post, we will learn how to use Golang and gorilla mux to build a simple web application.

## Prerequisites

Before we begin, we need to make sure that we have the following prerequisites installed:

- Golang: You can download Golang from the [official website](https://golang.org/dl/).
- gorilla mux: You can install gorilla mux with the following command:

```bash
go get github.com/gorilla/mux
```

Creating a new project
Once we have the prerequisites installed, we can create a new project. We can do this with the following command:

bash ```
mkdir my-golang-app

cd my-golang-app

```

This will create a new directory called my-golang-app. We will be working in this directory for the rest of the tutorial.

Creating a main.go file
Now that we have created a new project, we need to create a main.go file. This file will contain the code for our web application.

go```
package main

import (
  "fmt"
  "net/http"
  "github.com/gorilla/mux"
)

func main() {
  // Create a new mux router.
  r := mux.NewRouter()

  // Handle the "/" path.
  r.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, world!")
  })

  // Listen and serve on port 8080.
  http.ListenAndServe(":8080", r)
}
```

### This code creates a new mux router and registers a handler for the "/" path. The handler simply prints "Hello, world!" to the response writer

## Starting the server

### Now that we have created a web application, we can start the server. We can do this with the following command

bash ```
go run main.go

```

### This will start the server on port 8080. We can open a web browser and go to http://localhost:8080 to see our web application.

## Conclusion
In this blog post, we learned how to use Golang and gorilla mux to build a simple web application. We created a new project, created a main.go file, and started the server. We can now open a web browser and see our web application.
