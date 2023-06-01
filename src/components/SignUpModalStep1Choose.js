import { useState, useCallback } from "react";
import SignUpModalStep2Investo from "./SignUpModalStep2Investo";
import PortalPopup from "./PortalPopup";
import styles from "./SignUpModalStep1Choose.module.css";
const SignUpModalStep1Choose = ({ onClose }) => {
  const [isSignUpModalStep2InvestoOpen, setSignUpModalStep2InvestoOpen] =
    useState(false);

  const openSignUpModalStep2Investo = useCallback(() => {
    setSignUpModalStep2InvestoOpen(true);
  }, []);

  const closeSignUpModalStep2Investo = useCallback(() => {
    setSignUpModalStep2InvestoOpen(false);
  }, []);

  return (
    <>
      <div className={styles.signUpModalStep1Choose}>
        <div className={styles.signUpModalStep1ChooseChild} />
        <div className={styles.letsCreateYourAccountParent}>
          <div className={styles.letsCreateYour}>Let's create your account</div>
          <div className={styles.chooseYourProfile}>
            Choose your profile type
          </div>
          <div className={styles.alreadyAMemberContainer}>
            <span>{`Already a member? `}</span>
            <b>Login</b>
          </div>
          <div className={styles.component1393}>
            <div className={styles.component1393Child} />
            <b className={styles.creator}>Creator</b>
          </div>
          <div className={styles.component1394}>
            <div className={styles.component1393Child} />
            <b className={styles.investor}>Investor</b>
          </div>
          <div
            className={styles.nextWrapper}
            onClick={openSignUpModalStep2Investo}
          >
            <div className={styles.next}>Next</div>
          </div>
          <div className={styles.lineParent}>
            <div className={styles.groupChild} />
            <div className={styles.profileTypeParent}>
              <div className={styles.profileType}>profile type</div>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.groupItem}
                  alt=""
                  src="/ellipse-2027.svg"
                />
                <div className={styles.div}>1</div>
              </div>
            </div>
            <div className={styles.signUpParent}>
              <div className={styles.signUp}>Sign Up</div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.groupItem}
                  alt=""
                  src="/ellipse-20271.svg"
                />
                <div className={styles.div1}>2</div>
              </div>
            </div>
          </div>
          <img
            className={styles.iconlylightOutlinecloseSqu}
            alt=""
            src="/iconlylightoutlineclosesquare.svg"
          />
        </div>
      </div>
      {isSignUpModalStep2InvestoOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignUpModalStep2Investo}
        >
          <SignUpModalStep2Investo onClose={closeSignUpModalStep2Investo} />
        </PortalPopup>
      )}
    </>
  );
};

export default SignUpModalStep1Choose;
