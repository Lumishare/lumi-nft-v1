import styles from "./Swap.module.css";
const Swap = ({ onClose }) => {
  return (
    <div className={styles.swap}>
      <div className={styles.swapChild} />
      <div className={styles.indicatorParent}>
        <div className={styles.indicator} />
        <div className={styles.swapATokens}>Swap a Tokens</div>
      </div>
      <div className={styles.rate}>
        <div className={styles.div}>4.5</div>
        <img className={styles.starIcon} alt="" src="/star.svg" />
      </div>
      <div className={styles.component598}>
        <div className={styles.component598Child} />
        <div className={styles.connectWallet}>{`Connect Wallet `}</div>
      </div>
      <div className={styles.component477Parent}>
        <div className={styles.component477}>
          <div className={styles.component477Child} />
          <div className={styles.div1}>0.0</div>
          <div className={styles.component461}>
            <div className={styles.component461Child} />
            <div className={styles.swap1}>Swap</div>
            <div className={styles.unionWrapper}>
              <img className={styles.unionIcon} alt="" src="/union.svg" />
            </div>
            <img
              className={styles.path44516Icon}
              alt=""
              src="/path-44516.svg"
            />
          </div>
        </div>
        <div className={styles.component478}>
          <div className={styles.component477Child} />
          <div className={styles.div1}>0.0</div>
          <div className={styles.component461}>
            <div className={styles.component461Child} />
            <div className={styles.swap1}>Swap</div>
            <div className={styles.unionWrapper}>
              <img className={styles.unionIcon} alt="" src="/union.svg" />
            </div>
            <img
              className={styles.path44516Icon}
              alt=""
              src="/path-44516.svg"
            />
          </div>
        </div>
        <img
          className={styles.downArrowIcon}
          alt=""
          src="/down-arrow-icon.svg"
        />
      </div>
    </div>
  );
};

export default Swap;
