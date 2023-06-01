import styles from "./SignUpModalStep2Investo.module.css";
const SignUpModalStep2Investo = ({ onClose }) => {
  return (
    <div className={styles.signUpModalStep2Investo}>
      <div className={styles.signUpModalStep2InvestoChild} />
      <div className={styles.letsCreateYourAccountParent}>
        <div className={styles.letsCreateYour}>Let's create your account</div>
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
                src="/ellipse-2027.svg"
              />
              <div className={styles.div1}>2</div>
            </div>
          </div>
        </div>
        <div className={styles.scrollGroup37}>
          <div className={styles.groupParent}>
            <div className={styles.signUpWrapper}>
              <div className={styles.signUp1}>Sign Up</div>
            </div>
            <div className={styles.component1408Parent}>
              <div className={styles.component1406Parent}>
                <div className={styles.component1408Child} />
                <div className={styles.fullName}>Full name</div>
              </div>
              <div className={styles.component1406Parent}>
                <div className={styles.component1406}>
                  <div className={styles.component1408Child} />
                  <div className={styles.fullName}>Verify Email</div>
                </div>
                <div className={styles.component1407}>
                  <div className={styles.component1408Child} />
                  <div className={styles.fullName}>Email</div>
                </div>
              </div>
              <div className={styles.genderParent}>
                <div className={styles.gender}>Gender</div>
                <div className={styles.unionWrapper}>
                  <img className={styles.unionIcon} alt="" src="/union.svg" />
                </div>
                <div className={styles.chooseYourGender}>
                  Choose your gender
                </div>
              </div>
              <div className={styles.genderParent}>
                <div className={styles.country}>{`Country `}</div>
                <div className={styles.unionWrapper}>
                  <img className={styles.unionIcon} alt="" src="/union.svg" />
                </div>
                <div className={styles.chooseYourGender}>
                  Choose your country
                </div>
              </div>
              <div className={styles.component1406Parent}>
                <div className={styles.component1408Child} />
                <div className={styles.fullName}>Government ID Number</div>
              </div>
              <div className={styles.component1404}>
                <div className={styles.governmentIdPicture}>
                  Government ID Picture
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.groupChild1} />
                  <div className={styles.uploadWrapper}>
                    <div className={styles.upload}>Upload</div>
                  </div>
                  <div className={styles.iconlylightOutlinecameraWrapper}>
                    <img
                      className={styles.iconlylightOutlinecamera}
                      alt=""
                      src="/iconlylightoutlinecamera.svg"
                    />
                  </div>
                  <img
                    className={styles.iconlylightOutlineimage2}
                    alt=""
                    src="/iconlylightoutlineimage2.svg"
                  />
                </div>
              </div>
              <div className={styles.component1404}>
                <div className={styles.governmentIdPicture}>
                  Profile Picture
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.groupChild1} />
                  <div className={styles.uploadWrapper}>
                    <div className={styles.upload}>Upload</div>
                  </div>
                  <div className={styles.iconlylightOutlinecameraWrapper}>
                    <img
                      className={styles.iconlylightOutlinecamera}
                      alt=""
                      src="/iconlylightoutlinecamera1.svg"
                    />
                  </div>
                  <img
                    className={styles.iconlylightOutlineimage2}
                    alt=""
                    src="/iconlylightoutlineimage2.svg"
                  />
                </div>
              </div>
              <div className={styles.component1404}>
                <div className={styles.governmentIdPicture}>Cover Picture</div>
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.groupChild1} />
                  <div className={styles.uploadWrapper}>
                    <div className={styles.upload}>Upload</div>
                  </div>
                  <div className={styles.iconlylightOutlinecameraWrapper}>
                    <img
                      className={styles.iconlylightOutlinecamera}
                      alt=""
                      src="/iconlylightoutlinecamera1.svg"
                    />
                  </div>
                  <img
                    className={styles.iconlylightOutlineimage2}
                    alt=""
                    src="/iconlylightoutlineimage2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.iconlylightOutlinecloseSqu}
          alt=""
          src="/iconlylightoutlineclosesquare1.svg"
        />
      </div>
    </div>
  );
};

export default SignUpModalStep2Investo;
