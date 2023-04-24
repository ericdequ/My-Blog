---
title: 'Mermaid Markdown'
date: '2023-04-13'
tags: ['Markdown', 'Documentation', 'Mermaid']
draft: false
summary: Using ChatGPT and Mermaid to Create System Architecture Diagrams
---


## Tutorial: Using ChatGPT and Mermaid to Create System Architecture Diagrams

## Introduction 📚

System architecture diagrams are a powerful tool for visualizing the components of a system and how they interact with each other. They can be used to communicate complex ideas to stakeholders, developers, and other technical teams.

Mermaid is a popular tool for creating system architecture diagrams. It is a lightweight markup language that can be used to create diagrams in a variety of formats, including HTML, SVG, and PNG.

ChatGPT is a large language model from Google AI, trained on a massive dataset of text and code. It can be used to generate text, translate languages, write different kinds of creative content, and answer your questions in an informative way. but did you know you can get it to make system architectures, You can feed in Data from your projects or Class diagrams and it will generate a system architecture diagram for you in mermaid markdown.

This can be usefull to collaborate with your team Present your work to stake holders or just to get a better understanding of your own project!

## Lets see Some examples

## Generate a diagram of a web application

```mermaid
graph TD
  A[Web Application]
  B[Database]
  C[API]
  A-->B
  A-->C
```

### Here are some more complex examples

## Flowchart

```mermaid  

graph LR;
  A[Start] --> B{Decision};
  B -->|Yes| C[Action 1];
  B -->|No| D[Action 2];
  C --> E[End];
  D --> E;

```

## Sequence Diagram

```mermaid

sequenceDiagram;
  participant Alice;
  participant Bob;
  Alice->>Bob: Hello Bob, how are you?;
  alt is fine
    Bob->>Alice: I am good, thanks!;
  else is not fine
    Bob->>Alice: Not so good :(
  end

```

## Gantt Chart

```mermaid
gantt
    dateFormat  YYYY-MM-DD
    title CRM Web App Development Timeline

    section Design
    UI Design           :done, des1, 2022-11-01, 2022-11-15
    Backend Design      :done, des2, 2022-11-10, 2022-11-25

    section Development
    Frontend Development :done, dev1, 2022-11-26, 2023-02-28
    Backend Development  :done, dev2, 2022-11-26, 2023-02-28

    section Testing
    Testing & QA         :active, test1, 2023-03-01, 2023-03-31

    section Deployment
    Deployment           : dep1, 2023-04-01, 2023-04-15

```

```mermaid
classDiagram
class User {
  -id: int
  -username: string
  -email: string
  +getId(): int
  +getUsername(): string
  +getEmail(): string
  +setUsername(username: string): void
  +setEmail(email: string): void
}

class Order {
  -orderId: int
  -userId: int
  -productId: int
  -quantity: int
  +getOrderId(): int
  +getUserId(): int
  +getProductId(): int
  +getQuantity(): int
  +setQuantity(quantity: int): void
}

class Product {
  -productId: int
  -name: string
  -price: float
  +getProductId(): int
  +getName(): string
  +getPrice(): float
  +setName(name: string): void
  +setPrice(price: float): void
}

class Payment {
  -paymentId: int
  -orderId: int
  -amount: float
  -status: string
  +getPaymentId(): int
  +getOrderId(): int
  +getAmount(): float
  +getStatus(): string
  +setStatus(status: string): void
}

class Address {
  -addressId: int
  -userId: int
  -street: string
  -city: string
  -state: string
  -zipCode: string
  +getAddressId(): int
  +getUserId(): int
  +getStreet(): string
  +getCity(): string
  +getState(): string
  +getZipCode(): string
  +setStreet(street: string): void
  +setCity(city: string): void
  +setState(state: string): void
  +setZipCode(zipCode: string): void
}

class Review {
  -reviewId: int
  -productId: int
  -userId: int
  -rating: int
  -comment: string
  +getReviewId(): int
  +getProductId(): int
  +getUserId(): int
  +getRating(): int
  +getComment(): string
  +setRating(rating: int): void
  +setComment(comment: string): void
}

User --|> Order
User --|> Payment
User --|> Address
Order --|> Payment
Order --|> Product
Product --|> Review
```
