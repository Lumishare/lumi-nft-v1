import { useState, useCallback } from "react";
import Swap from "../components/Swap";
import PortalPopup from "../components/PortalPopup";
import ConnectWallet1 from "../components/ConnectWallet1";
import styles from "./Menu.module.css";
const Menu = () => {
  const [isSwapOpen, setSwapOpen] = useState(false);
  const [isConnectWalletOpen, setConnectWalletOpen] = useState(false);

  const openSwap = useCallback(() => {
    setSwapOpen(true);
  }, []);

  const closeSwap = useCallback(() => {
    setSwapOpen(false);
  }, []);

  const openConnectWallet = useCallback(() => {
    setConnectWalletOpen(true);
  }, []);

  const closeConnectWallet = useCallback(() => {
    setConnectWalletOpen(false);
  }, []);

  return (
    <>
      <div className={styles.menu}>
        <div className={styles.rate}>
          <div className={styles.div}>4.5</div>
          <img className={styles.starIcon} alt="" src="/star.svg" />
        </div>
        <div className={styles.groupParent}>
          <div className={styles.groupChild} />
          <div className={styles.menu1}>Menu</div>
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.leaderboardParent}>
            <div className={styles.leaderboard}>LeaderBoard</div>
            <img className={styles.trophyIcon} alt="" src="/trophy.svg" />
          </div>
          <div className={styles.component1311} onClick={openSwap}>
            <div className={styles.swap}>Swap</div>
            <img className={styles.trophyIcon} alt="" src="/swap.svg" />
          </div>
          <div className={styles.path38313Parent}>
            <img
              className={styles.path38313Icon}
              alt=""
              src="/path-38313.svg"
            />
            <img
              className={styles.iconlylightOutlinebuy}
              alt=""
              src="/iconlylightoutlinebuy3.svg"
            />
            <div className={styles.myCart}>My Cart</div>
          </div>
          <div className={styles.walletParent} onClick={openConnectWallet}>
            <img className={styles.walletIcon} alt="" src="/wallet1.svg" />
            <div className={styles.myWallet}>My Wallet</div>
          </div>
          <div className={styles.logOutParent}>
            <div className={styles.logOut}>Log Out</div>
            <img className={styles.logOutIcon} alt="" src="/log-out.svg" />
          </div>
        </div>
        <img
          className={styles.component11813}
          alt=""
          src="/component-118--13.svg"
        />
      </div>
      {isSwapOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSwap}
        >
          <Swap onClose={closeSwap} />
        </PortalPopup>
      )}
      {isConnectWalletOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConnectWallet}
        >
          <ConnectWallet1 onClose={closeConnectWallet} />
        </PortalPopup>
      )}
    </>
  );
};

export default Menu;
