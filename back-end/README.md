# QuantumRiftLabs Back-end

Welcome to QuantumRiftLabs Back-end! This is the backend server for the QuantumRiftLabs project.

## Setup Instructions

### Prerequisites

Ensure you have the following installed:
- Node.js and npm
- Docker and Docker Compose

### Installing Dependencies

#### Back-end

1. Navigate to the `back-end` directory:

    ```bash
    cd back-end
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

### Running the Application

#### Using Docker Compose

1. Build the Docker Image: From the back-end directory, run the following command to build the Docker image:

    ```bash
    docker build -t back-end .
    ```
2. Run the Docker Container: After building the image, run the container with the following command:

    ```bash
    docker run -p 3000:3000 back-end
    ```

#### Without Docker

You can also run the back-end without Docker.

##### Running the Back-end

1. Navigate to the `back-end` directory:

    ```bash
    cd back-end
    ```

2. Start the backend server:

    ```bash
    npm run build
    npm run start
    ```

The backend server will run on `http://localhost:3000`.

### Testing API Endpoints

You can test the back-end API endpoints using tools like Postman or curl.
Swagger url: http://localhost:3000/api-docs

#### Get Items

- **Endpoint**: `GET /items`
- **Description**: Returns a list of items.
- **Example Request**:

    ```bash
    curl http://localhost:3000/api/items
    ```

- **Example Response**:

    ```json
    [
        { "name": "Item 1", "price": 100 },
        { "name": "Item 2", "price": 150 }
    ]
    ```

#### Add Item

- **Endpoint**: `POST /items`
- **Description**: Adds a new item.
- **Example Request**:

    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"name": "NewItem", "price": 200}' http://localhost:3000/api/items
    ```

- **Example Response**:

    ```json
    { "name": "NewItem", "price": 200 }
    ```

### Functionality of the API Endpoints

- **GET /items**: This endpoint retrieves the list of items stored in the back-end.
- **POST /items**: This endpoint accepts a JSON object with `name` and `price`, adds the new item to the list, and returns the added item.

## Testing

To run tests:
npm test