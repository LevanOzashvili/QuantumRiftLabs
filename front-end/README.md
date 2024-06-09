# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# QuantumRiftLabs Front-end

Welcome to QuantumRiftLabs Front-end! This is the frontend for the QuantumRiftLabs project.

## Setup Instructions

### Prerequisites

Ensure you have the following installed:
- Node.js and npm
- Docker and Docker Compose

### Installing Dependencies

#### ENV Variables

Set correct env variables:
REACT_APP_API_URL=http://localhost:3000
REACT_APP_SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/42552a2127424e09a4385de050df4a65

#### Front-end

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

1. Build the Docker Image: From the front-end directory, run the following command to build the Docker image:

    ```bash
    docker build -t front-end .
    ```
2. Run the Docker Container: After building the image, run the container with the following command:

    ```bash
    docker run -p 5001:80 front-end
    ```

#### Without Docker

You can also run the front-end without Docker.

##### Running the Back-end

1. Navigate to the `front-end` directory:

    ```bash
    cd front-end
    ```

2. Start the backend server:

    ```bash
    npm run start
    ```

The backend server will run on `http://localhost:5001`.


### Main Components of the React Application

- **BlockchainStatus.js**: This component uses Web3.js to connect to an Ethereum testnet, checks the connection status, fetches the latest block number, and displays this information.

- **ItemList.js**: This component displays the list of items fetched from the backend.

- **AddItemForm.js**: This component provides a form to add a new item to the backend. It sends a POST request to the backend and updates the list of items upon successful addition.

- **App.js**: The main component that combines `BlockchainStatus`, `ItemList`, and `AddItemForm` components to provide a cohesive user interface.

### Environment Variables

Create a `.env` file in the `front-end` directory and add the following variable to specify the backend API URL and Sepolia rpc url.
