import { useState, useCallback } from "react";
import SelectAToken from "../components/SelectAToken";
import PortalPopup from "../components/PortalPopup";
import styles from "./SwapATokensWithPopup.module.css";
const SwapATokensWithPopup = () => {
  const [isSelectATokenOpen, setSelectATokenOpen] = useState(false);

  const openSelectAToken = useCallback(() => {
    setSelectATokenOpen(true);
  }, []);

  const closeSelectAToken = useCallback(() => {
    setSelectATokenOpen(false);
  }, []);

  return (
    <>
      <div className={styles.swapATokensWithPopup}>
        <div className={styles.groupParent}>
          <div className={styles.component473Parent}>
            <div className={styles.component473}>
              <div className={styles.component473Child} />
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
            <div className={styles.component474} onClick={openSelectAToken}>
              <div className={styles.component473Child} />
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
            <div className={styles.component592}>
              <div className={styles.component592Child} />
              <div className={styles.connectWallet}>{`Connect wallet `}</div>
            </div>
            <img
              className={styles.groupChild}
              alt=""
              src="/down-arrow-icon.svg"
            />
          </div>
          <div className={styles.swapATokens}>Swap a Tokens</div>
        </div>
      </div>
      {isSelectATokenOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSelectAToken}
        >
          <SelectAToken onClose={closeSelectAToken} />
        </PortalPopup>
      )}
    </>
  );
};

export default SwapATokensWithPopup;
