import styles from "./ConnectWallet.module.css";
const ConnectWallet = ({ onClose }) => {
  return (
    <div className={styles.connectWallet}>
      <div className={styles.connectWalletParent}>
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
              src="/mask-group-109@2x.png"
            />
          </div>
          <b className={styles.metamask}>MetaMask</b>
          <div className={styles.ellipseParent}>
            <img className={styles.groupChild} alt="" src="/ellipse-1557.svg" />
          </div>
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.ellipseParent}>
            <img className={styles.groupChild} alt="" src="/ellipse-1557.svg" />
            <img
              className={styles.maskGroup109}
              alt=""
              src="/mask-group-109@2x.png"
            />
          </div>
          <b className={styles.metamask}>WalletConnect</b>
        </div>
        <div className={styles.showMoreWrapper}>
          <div className={styles.showMore}>Show more</div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
