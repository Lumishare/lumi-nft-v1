import styles from "./ConnectWallet1.module.css";
const ConnectWallet1 = ({ onClose }) => {
  return (
    <div className={styles.connectWallet}>
      <div className={styles.connectWalletChild} />
      <div className={styles.indicatorParent}>
        <div className={styles.indicator} />
        <div className={styles.connectWallet1}>Connect wallet</div>
        <div className={styles.chooseHowYou}>
          Choose how you want to connect. There are several wallet providers.
        </div>
        <div className={styles.groupParent}>
          <div className={styles.ellipseParent}>
            <img className={styles.groupChild} alt="" src="/ellipse-1557.svg" />
            <img
              className={styles.maskGroup109}
              alt=""
              src="/mask-group-1091@2x.png"
            />
          </div>
          <b className={styles.metamask}>MetaMask</b>
          <div className={styles.ellipseParent}>
            <img className={styles.groupChild} alt="" src="/ellipse-1557.svg" />
          </div>
        </div>
        <div className={styles.walletConnectParent}>
          <div className={styles.walletConnect}>
            <img className={styles.groupChild} alt="" src="/ellipse-1557.svg" />
            <img
              className={styles.maskGroup109}
              alt=""
              src="/mask-group-1091@2x.png"
            />
          </div>
          <b className={styles.walletconnect}>WalletConnect</b>
        </div>
        <div className={styles.component5910}>
          <div className={styles.component5910Child} />
          <div className={styles.showMore}>Show More</div>
        </div>
      </div>
      <div className={styles.rate}>
        <div className={styles.div}>4.5</div>
        <img className={styles.starIcon} alt="" src="/star.svg" />
      </div>
    </div>
  );
};

export default ConnectWallet1;
