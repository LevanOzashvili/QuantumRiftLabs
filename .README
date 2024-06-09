# QuantumRiftLabs Back-end

Welcome to QuantumRiftLabs

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
#### front-end

##### ENV Variables

Set correct env variables:
REACT_APP_API_URL=http://localhost:3000
REACT_APP_SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/42552a2127424e09a4385de050df4a65

1. Navigate to the `front-end` directory:

    ```bash
    cd front-end
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

### Running the Application

#### Using Docker Compose

1. Build & run containers using docker-compose
    ```
    docker-compose up --build
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

#### Without Docker

You can also run the front-end without Docker.

##### Running the front-end

1. Navigate to the `front-end` directory:

    ```bash
    cd front-end
    ```

2. Start the `front-end server:

    ```bash
    npm run start
    ```

The front-end server will run on `http://localhost:5001`.


### Main Components of the React Application

- **BlockchainStatus.js**: This component uses Web3.js to connect to an Ethereum testnet, checks the connection status, fetches the latest block number, and displays this information.

- **ItemList.js**: This component displays the list of items fetched from the backend.

- **AddItemForm.js**: This component provides a form to add a new item to the backend. It sends a POST request to the backend and updates the list of items upon successful addition.

- **App.js**: The main component that combines `BlockchainStatus`, `ItemList`, and `AddItemForm` components to provide a cohesive user interface.

### Environment Variables

Create a `.env` file in the `front-end` directory and add the following variable to specify the backend API URL and Sepolia rpc url.
