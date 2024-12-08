@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml

Person(Buyer, "Buyer", "Buys courses and applications")
Person(Seller, "Seller", "Uploads courses and applications for sale")
Person(StandardUser, "Standard User", "Only has access to purchase courses or applications")

System_Boundary(c1, "KlowHub System") {
  Container(webApp, "KlowHub Frontend", "React + Tailwind", "User interface")
  Container(api, "KlowHub API", "Nest.js + Typescript", "Manages users, products, and purchases. Implements hexagonal architecture.")
  ContainerDb(db, "Database", "MongoDB", "Stores users, products, and transactions")
  Container(redis, "Cache", "Redis (ioredis)", "Cache for improved performance")
}

Container_Ext(PaymentGateway, "Payment Gateway", "External Service", "Processes user payments")
Container_Ext(Storage, "Storage Service", "AWS S3", "Stores product images and files")
Container_Ext(EmailService, "Nodemailer", "External Service", "Sends confirmation emails")

Rel(Buyer, webApp, "Accesses the platform using")
Rel(Seller, webApp, "Manages their products using")
Rel(StandardUser, webApp, "Browses and makes purchases using")
Rel(webApp, api, "Makes HTTP requests to")
Rel(api, db, "Reads and writes data to")
Rel(api, redis, "Uses for temporary storage")
Rel(api, PaymentGateway, "Processes payments through")
Rel(api, Storage, "Saves and retrieves files from")
Rel(api, EmailService, "Sends confirmation emails using")

note right of api
  **Backend Details:**
  - **Architecture:** Hexagonal
  - **Framework:** NestJS
  - **Languages:** TypeScript
  - **Database:** MongoDB (Mongoose)
  - **Authentication:** JWT
  - **Encryption:** Bcrypt
  - **Validation:** Class-Validator & Class-Transformer
  - **Email Service:** Nodemailer
  - **Documentation:** Swagger
  - **Security:** Helmet, Express-Mongo-Sanitize
  - **Reactive Programming:** RxJS
  - **Caching:** Redis (ioredis)
  - **Testing:** Jest & Supertest
end note
@enduml
