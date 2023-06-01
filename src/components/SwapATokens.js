import styles from "./SwapATokens.module.css";
const SwapATokens = ({ onClose }) => {
  return (
    <div className={styles.swapATokens}>
      <div className={styles.groupParent}>
        <div className={styles.component472Parent}>
          <div className={styles.component472}>
            <div className={styles.component472Child} />
            <div className={styles.div}>0.0</div>
            <div className={styles.component461}>
              <div className={styles.component461Child} />
              <div className={styles.swap}>Swap</div>
              <div className={styles.unionWrapper}>
                <img className={styles.unionIcon} alt="" src="/union.svg" />
              </div>
              <img
                className={styles.component461Item}
                alt=""
                src="/group-54774@2x.png"
              />
            </div>
          </div>
          <div className={styles.component591}>
            <div className={styles.component591Child} />
            <div className={styles.connectWallet}>{`Connect wallet `}</div>
          </div>
          <div className={styles.component471}>
            <div className={styles.component472Child} />
            <div className={styles.div}>0.0</div>
            <div className={styles.component461}>
              <div className={styles.component461Child} />
              <div className={styles.swap}>Swap</div>
              <div className={styles.unionWrapper}>
                <img className={styles.unionIcon} alt="" src="/union.svg" />
              </div>
              <img
                className={styles.component461Item}
                alt=""
                src="/group-54774@2x.png"
              />
            </div>
          </div>
          <img
            className={styles.downArrowIcon}
            alt=""
            src="/down-arrow-icon.svg"
          />
        </div>
        <div className={styles.swapATokens1}>Swap a Tokens</div>
      </div>
    </div>
  );
};

export default SwapATokens;
