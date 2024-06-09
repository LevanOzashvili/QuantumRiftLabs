import React from 'react'
import styles from './Header.module.scss'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img
          src="/logo.svg"
          alt="Quantum Rift Labs Logo"
          className={styles.headerLogo}
        />
        <h1 className={styles.headerTitle}>Quantum Rift Labs</h1>
      </div>
    </header>
  )
}

export default Header
