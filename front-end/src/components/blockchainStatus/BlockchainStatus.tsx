import React, { useState, useEffect } from 'react'
import Web3 from 'web3'
import styles from './BlockchainStatus.module.scss'

const BlockchainStatus: React.FC = () => {
  const [networkStatus, setNetworkStatus] = useState<string>('Disconnected')
  const [latestBlock, setLatestBlock] = useState<string>('')

  useEffect(() => {
    const connectToBlockchain = async () => {
      try {
        const rpcUrl = process.env.REACT_APP_SEPOLIA_RPC_URL
        const web3Instance = new Web3(rpcUrl)
        setNetworkStatus('Connected')
        // Fetch initial latest block number
        updateLatestBlock(web3Instance)

        // Start interval to update latest block number periodically
        const intervalId = setInterval(
          () => updateLatestBlock(web3Instance),
          10000,
        ) // Update every 5 seconds
        return () => clearInterval(intervalId) // Cleanup interval on unmount
      } catch (error) {
        console.error('Error connecting to blockchain:', error)
        setNetworkStatus('Disconnected')
      }
    }

    const updateLatestBlock = async (web3: Web3) => {
      if (!web3) return

      try {
        // Get latest block number
        const latestBlockNumber = await web3.eth.getBlockNumber()
        console.log(latestBlockNumber)
        setLatestBlock(latestBlockNumber.toString())
      } catch (error) {
        console.error('Error fetching latest block number:', error)
      }
    }

    connectToBlockchain()
  }, [])

  return (
    <div className={styles.blockchainStatusCard}>
      <div className={styles.blockchainStatusCardBody}>
        <h5 className={styles.blockchainStatusCardTitle}>Blockchain Status</h5>
        <p className={styles.BlockchainStatusCardText}>
          Network Status:{' '}
          <span
            className={
              networkStatus === 'Connected' ? 'text-success' : 'text-danger'
            }
          >
            {networkStatus}
          </span>
        </p>
        <p className={styles.blockchainStatusCardText}>
          Latest Block Number: {latestBlock}
        </p>
      </div>
    </div>
  )
}

export default BlockchainStatus
