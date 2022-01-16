# Data Design and Retrieval

---

## Install and Run

```sh
  git clone ...
  cd backend-test-task2
```

![]()

### By Native NodeJS and local MySQL server

- Make sure `MySQL Server` and `NodeJS` is installed.

```sh
  npm install
  npm start
```

Server is starting at http://127.0.0.1:8080/

![]()

### Run as Composed Docker Container

Make sure docker engine is installed in your work environment.

```sh
  docker build
```

Server is starting at http://127.0.0.1:8081/

![]()

---

## Use the API

Use `curl` or `postman` to make request to endpoints below with body as desbribed:

  1. `GET` - http://127.0.0.1:8081/cafes?location=[LOCATION_STRING]
    <br />- return only `cafes` that is within the area given `LOCATION_STRING`
    <br />- return `empty array` given invalid string

      ```json
      [
        // ...
        {
          "name": "John Cena",
          "description": "",
          "employees": 30,
          "logo": "some_url",
          "location": "some_address",
          "id": 3102
        },
        // ...
      ]

      ```
    

  2. `GET` - http://127.0.0.1:8081/cafes/employees
    <br />- return list of employee, sorted by `working_day` in `desc` order

      ```json
      [
        // ...
        {
          "name": "John Cena",
          "days_worked": 42,
          "cafe": "Starbucks"
        },
        // ...
      ]

      ```

  3. `POST` - http://127.0.0.1:8081/cafe

      ```json
      {
        "cafe": "Starbucks"
      }
      ```

  4. `POST` - http://127.0.0.1:8081/cafe/employee

      ```json
      {
        "name": "John Cena",
        "cafe": "Starbucks"
      }
      ```
