import { useState, useCallback } from "react";
import ConnectWallet from "../components/ConnectWallet";
import PortalPopup from "../components/PortalPopup";
import SwapATokens from "../components/SwapATokens";
import SignUpModalStep1Choose from "../components/SignUpModalStep1Choose";
import { useNavigate } from "react-router-dom";
import styles from "./InvestorWizard.module.css";
const InvestorWizard = () => {
  const [isConnectWalletOpen, setConnectWalletOpen] = useState(false);
  const [isSwapATokensOpen, setSwapATokensOpen] = useState(false);
  const [isSignUpModalStep1ChooseOpen, setSignUpModalStep1ChooseOpen] =
    useState(false);
  const navigate = useNavigate();

  const openConnectWallet = useCallback(() => {
    setConnectWalletOpen(true);
  }, []);

  const closeConnectWallet = useCallback(() => {
    setConnectWalletOpen(false);
  }, []);

  const openSwapATokens = useCallback(() => {
    setSwapATokensOpen(true);
  }, []);

  const closeSwapATokens = useCallback(() => {
    setSwapATokensOpen(false);
  }, []);

  const openSignUpModalStep1Choose = useCallback(() => {
    setSignUpModalStep1ChooseOpen(true);
  }, []);

  const closeSignUpModalStep1Choose = useCallback(() => {
    setSignUpModalStep1ChooseOpen(false);
  }, []);

  const onComponent91230Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91231Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onGroupContainer70Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onComponent91211Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent912111Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent912112Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91232Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent912321Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent912322Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91234Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent912341Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent912342Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91233Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent912331Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent912332Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91213Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent912131Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent912132Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCartIconClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  const onLightningIconClick = useCallback(() => {
    navigate("/your-favorite");
  }, [navigate]);

  const onLeaderBoardTextClick = useCallback(() => {
    navigate("/leaderboard");
  }, [navigate]);

  return (
    <>
      <div className={styles.investorWizard}>
        <div className={styles.scrollGroup10}>
          <div className={styles.repeatGrid15}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-19931@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseGroup}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-19932@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseContainer}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-19933@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupDiv}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-19934@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseParent1}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-19935@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseParent2}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-19936@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseParent3}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-19937@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseParent4}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-19938@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseParent5}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-19939@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseParent6}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-199310@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseParent7}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-199311@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseParent8}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-199312@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseParent9}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-199313@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseParent10}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-199314@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseParent11}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-19931@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseParent12}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-19932@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseParent13}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-19933@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseParent14}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-19934@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseParent15}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-19935@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseParent16}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-19936@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseParent17}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-19937@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseParent18}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-19938@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseParent19}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-19939@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseParent20}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-199310@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseParent21}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-199311@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseParent22}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-199312@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.ellipseParent23}>
              <img
                className={styles.groupChild}
                alt=""
                src="/ellipse-199313@2x.png"
              />
              <img
                className={styles.path44454Icon}
                alt=""
                src="/path-444541.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
          </div>
        </div>
        <img
          className={styles.investorWizardChild}
          alt=""
          src="/group-54745.svg"
        />
        <div className={styles.stories}>Stories</div>
        <div className={styles.groupParent}>
          <div className={styles.component903Parent}>
            <div className={styles.component903}>
              <div className={styles.component903Child} />
              <div className={styles.yourEmailAddressWrapper}>
                <div className={styles.yourEmailAddress}>
                  Your email address
                </div>
              </div>
              <div className={styles.stayInThe}>Stay in the loop</div>
              <div className={styles.marketplaceParent}>
                <div className={styles.marketplace}>Marketplace</div>
                <div className={styles.storiesParent}>
                  <div className={styles.trending}>Stories</div>
                  <div className={styles.trending}>Top 10</div>
                  <div className={styles.trending}>Trending</div>
                  <div className={styles.trending}>Videos</div>
                  <div className={styles.trending}>Based on Your Interest</div>
                  <div className={styles.recommendedForYou}>
                    Recommended for you
                  </div>
                  <div className={styles.recommendedForYou}>Articles</div>
                </div>
              </div>
              <div className={styles.linksParent}>
                <div className={styles.marketplace}>Links</div>
                <div className={styles.storiesParent}>
                  <div className={styles.trending}>Stories</div>
                  <div className={styles.trending}>Top 10</div>
                  <div className={styles.trending}>Trending</div>
                  <div className={styles.trending}>Videos</div>
                  <div className={styles.trending}>Based on Your Interest</div>
                  <div className={styles.recommendedForYou}>
                    Recommended for you
                  </div>
                  <div className={styles.recommendedForYou}>Articles</div>
                </div>
              </div>
              <div className={styles.joinUsParent}>
                <div className={styles.joinUs}>Join us</div>
                <div className={styles.storiesParent}>
                  <div className={styles.trending}>Stories</div>
                  <div className={styles.trending}>Top 10</div>
                  <div className={styles.trending}>Trending</div>
                  <div className={styles.trending}>Videos</div>
                  <div className={styles.trending}>Based on Your Interest</div>
                  <div className={styles.recommendedForYou}>
                    Recommended for you
                  </div>
                  <div className={styles.recommendedForYou}>Articles</div>
                </div>
              </div>
              <div className={styles.marketplaceGroup}>
                <div className={styles.marketplace}>Marketplace</div>
                <div className={styles.storiesParent}>
                  <div className={styles.trending}>Stories</div>
                  <div className={styles.trending}>Top 10</div>
                  <div className={styles.trending}>Trending</div>
                  <div className={styles.trending}>Videos</div>
                  <div className={styles.trending}>Based on Your Interest</div>
                  <div className={styles.recommendedForYou}>
                    Recommended for you
                  </div>
                  <div className={styles.recommendedForYou}>Articles</div>
                </div>
              </div>
              <div className={styles.joinTheCommunity}>Join the community</div>
              <div className={styles.joinOurMailing}>
                Join our mailing list to stay in the loop with our newest
                feature releases, NFT drops, and tips and tricks for navigating
                LUMI.
              </div>
              <div className={styles.component682}>
                <div className={styles.signUpWrapper}>
                  <div className={styles.signUp}>sign up</div>
                </div>
              </div>
              <img className={styles.logoIcon} alt="" src="/logo7@2x.png" />
              <div className={styles.drivingFinancialOpportunitie}>
                Driving financial opportunities for billions of people in a
                trustworthy monetary framework.
              </div>
              <div className={styles.component903Item} />
              <img
                className={styles.maskGroup193}
                alt=""
                src="/mask-group-193.svg"
              />
              <div className={styles.component10820Parent}>
                <img
                  className={styles.component10820}
                  alt=""
                  src="/component-108--20.svg"
                />
                <img
                  className={styles.component10820}
                  alt=""
                  src="/component-108--19.svg"
                />
                <img
                  className={styles.component10820}
                  alt=""
                  src="/component-108--18.svg"
                />
                <img
                  className={styles.component10820}
                  alt=""
                  src="/component-108--17.svg"
                />
                <img
                  className={styles.component10820}
                  alt=""
                  src="/component-108--16.svg"
                />
              </div>
            </div>
            <img
              className={styles.groupChild24}
              alt=""
              src="/ellipse-1999.svg"
            />
            <img
              className={styles.groupChild25}
              alt=""
              src="/ellipse-1998.svg"
            />
            <img
              className={styles.groupChild26}
              alt=""
              src="/ellipse-1997.svg"
            />
          </div>
          <div className={styles.top5LeaderboardParent}>
            <div className={styles.top5Leaderboard}>Top 5 Leaderboard</div>
            <div className={styles.investors}>Investors</div>
            <div className={styles.creators}>Creators</div>
            <div className={styles.repeatGrid17}>
              <div className={styles.component958Wrapper}>
                <div className={styles.path44461Parent}>
                  <div className={styles.component958Child} />
                  <img
                    className={styles.component958Item}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div className={styles.div}>1</div>
                  <div className={styles.investorName1}>Investor name 1</div>
                  <img
                    className={styles.component958Inner}
                    alt=""
                    src="/group-548081.svg"
                  />
                  <div className={styles.div1}>(1.8)</div>
                </div>
              </div>
              <div className={styles.component959Wrapper}>
                <div className={styles.path44461Parent}>
                  <div className={styles.component958Child} />
                  <img
                    className={styles.component958Item}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div className={styles.div}>2</div>
                  <div className={styles.investorName1}>Investor name 1</div>
                  <img
                    className={styles.component958Inner}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div className={styles.div1}>(1.8)</div>
                </div>
              </div>
              <div className={styles.component9510Wrapper}>
                <div className={styles.path44461Parent}>
                  <div className={styles.component958Child} />
                  <img
                    className={styles.component958Item}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div className={styles.div}>3</div>
                  <div className={styles.investorName1}>Investor name 1</div>
                  <img
                    className={styles.component958Inner}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div className={styles.div1}>(1.8)</div>
                </div>
              </div>
              <div className={styles.component9511Wrapper}>
                <div className={styles.path44461Parent}>
                  <div className={styles.component958Child} />
                  <img
                    className={styles.component958Item}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div className={styles.div}>4</div>
                  <div className={styles.investorName1}>Investor name 1</div>
                  <img
                    className={styles.component958Inner}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div className={styles.div1}>(1.8)</div>
                </div>
              </div>
              <div className={styles.component9512Wrapper}>
                <div className={styles.path44461Parent}>
                  <div className={styles.component958Child} />
                  <img
                    className={styles.component958Item}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div className={styles.div}>5</div>
                  <div className={styles.investorName1}>Investor name 1</div>
                  <img
                    className={styles.component958Inner}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div className={styles.div1}>(1.8)</div>
                </div>
              </div>
              <div className={styles.component9513Wrapper}>
                <div className={styles.path44461Parent}>
                  <div className={styles.component958Child} />
                  <img
                    className={styles.component958Item}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div className={styles.div}>1</div>
                  <div className={styles.investorName1}>Investor name 1</div>
                  <img
                    className={styles.component958Inner}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div className={styles.div1}>(1.8)</div>
                </div>
              </div>
            </div>
            <div className={styles.repeatGrid18}>
              <div className={styles.component958Wrapper}>
                <div className={styles.path44461Parent}>
                  <div className={styles.component958Child} />
                  <img
                    className={styles.component958Item}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div className={styles.div}>1</div>
                  <div className={styles.investorName1}>Investor name 1</div>
                  <img
                    className={styles.component958Inner}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div className={styles.div1}>(1.8)</div>
                </div>
              </div>
              <div className={styles.component959Wrapper}>
                <div className={styles.path44461Parent}>
                  <div className={styles.component958Child} />
                  <img
                    className={styles.component958Item}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div className={styles.div}>1</div>
                  <div className={styles.investorName1}>Investor name 1</div>
                  <img
                    className={styles.component958Inner}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div className={styles.div1}>(1.8)</div>
                </div>
              </div>
              <div className={styles.component9510Wrapper}>
                <div className={styles.path44461Parent}>
                  <div className={styles.component958Child} />
                  <img
                    className={styles.component958Item}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div className={styles.div}>1</div>
                  <div className={styles.investorName1}>Investor name 1</div>
                  <img
                    className={styles.component958Inner}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div className={styles.div1}>(1.8)</div>
                </div>
              </div>
              <div className={styles.component9511Wrapper}>
                <div className={styles.path44461Parent}>
                  <div className={styles.component958Child} />
                  <img
                    className={styles.component958Item}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div className={styles.div}>1</div>
                  <div className={styles.investorName1}>Investor name 1</div>
                  <img
                    className={styles.component958Inner}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div className={styles.div1}>(1.8)</div>
                </div>
              </div>
              <div className={styles.component9512Wrapper}>
                <div className={styles.path44461Parent}>
                  <div className={styles.component958Child} />
                  <img
                    className={styles.component958Item}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div className={styles.div}>1</div>
                  <div className={styles.investorName1}>Investor name 1</div>
                  <img
                    className={styles.component958Inner}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div className={styles.div1}>(1.8)</div>
                </div>
              </div>
              <div className={styles.component9513Wrapper}>
                <div className={styles.path44461Parent}>
                  <div className={styles.component958Child} />
                  <img
                    className={styles.component958Item}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div className={styles.div}>1</div>
                  <div className={styles.investorName1}>Investor name 1</div>
                  <img
                    className={styles.component958Inner}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div className={styles.div1}>(1.8)</div>
                </div>
              </div>
            </div>
            <div className={styles.groupWrapper}>
              <div className={styles.path44461Parent}>
                <img
                  className={styles.path44461Icon}
                  alt=""
                  src="/path-44461.svg"
                />
                <img
                  className={styles.path44463Icon}
                  alt=""
                  src="/path-44463.svg"
                />
                <img
                  className={styles.path44464Icon}
                  alt=""
                  src="/path-44464.svg"
                />
                <img
                  className={styles.path44465Icon}
                  alt=""
                  src="/path-44465.svg"
                />
                <b className={styles.b}>1</b>
              </div>
            </div>
            <div className={styles.groupContainer}>
              <div className={styles.path44461Parent}>
                <img
                  className={styles.path44461Icon}
                  alt=""
                  src="/path-44461.svg"
                />
                <img
                  className={styles.path44463Icon}
                  alt=""
                  src="/path-44463.svg"
                />
                <img
                  className={styles.path44464Icon}
                  alt=""
                  src="/path-44464.svg"
                />
                <img
                  className={styles.path44465Icon}
                  alt=""
                  src="/path-44465.svg"
                />
                <b className={styles.b}>1</b>
              </div>
            </div>
            <div className={styles.groupFrame}>
              <div className={styles.path44461Parent}>
                <img
                  className={styles.path44461Icon}
                  alt=""
                  src="/path-444611.svg"
                />
                <img
                  className={styles.path44463Icon}
                  alt=""
                  src="/path-444631.svg"
                />
                <img
                  className={styles.path44464Icon}
                  alt=""
                  src="/path-444641.svg"
                />
                <img
                  className={styles.path44465Icon}
                  alt=""
                  src="/path-444651.svg"
                />
                <b className={styles.b2}>2</b>
              </div>
            </div>
            <div className={styles.groupWrapper1}>
              <div className={styles.path44461Parent}>
                <img
                  className={styles.path44461Icon}
                  alt=""
                  src="/path-444611.svg"
                />
                <img
                  className={styles.path44463Icon}
                  alt=""
                  src="/path-444631.svg"
                />
                <img
                  className={styles.path44464Icon}
                  alt=""
                  src="/path-444641.svg"
                />
                <img
                  className={styles.path44465Icon}
                  alt=""
                  src="/path-444651.svg"
                />
                <b className={styles.b2}>2</b>
              </div>
            </div>
            <div className={styles.groupWrapper2}>
              <div className={styles.path44461Parent}>
                <img
                  className={styles.path44461Icon}
                  alt=""
                  src="/path-444612.svg"
                />
                <img
                  className={styles.path44463Icon}
                  alt=""
                  src="/path-444632.svg"
                />
                <img
                  className={styles.path44464Icon}
                  alt=""
                  src="/path-444642.svg"
                />
                <img
                  className={styles.path44465Icon}
                  alt=""
                  src="/path-444652.svg"
                />
                <b className={styles.b2}>3</b>
              </div>
            </div>
            <div className={styles.groupWrapper3}>
              <div className={styles.path44461Parent}>
                <img
                  className={styles.path44461Icon}
                  alt=""
                  src="/path-444612.svg"
                />
                <img
                  className={styles.path44463Icon}
                  alt=""
                  src="/path-444632.svg"
                />
                <img
                  className={styles.path44464Icon}
                  alt=""
                  src="/path-444642.svg"
                />
                <img
                  className={styles.path44465Icon}
                  alt=""
                  src="/path-444652.svg"
                />
                <b className={styles.b2}>3</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.investorWizardInner}>
          <div className={styles.scrollGroup15Parent}>
            <div className={styles.scrollGroup15}>
              <div className={styles.component91230Parent}>
                <div
                  className={styles.component91230}
                  onClick={onComponent91230Click}
                >
                  <div className={styles.component91230Child} />
                  <div className={styles.component1071}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.div24}>16/3/2023</div>
                  <div className={styles.starIconParent}>
                    <img
                      className={styles.starIcon}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={styles.iconAwesomeStar}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={styles.iconAwesomeStar1}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={styles.iconAwesomeStar2}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={styles.iconAwesomeStar3}
                      alt=""
                      src="/icon-awesomestar1.svg"
                    />
                    <div className={styles.div25}>(1.8)</div>
                  </div>
                  <div className={styles.component91230Item} />
                  <div className={styles.buyNow}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.readMore}>Read More</div>
                  </div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/mask-group-197@2x.png"
                  />
                  <div className={styles.component91230Inner} />
                  <div className={styles.eiusSuntVoluptate}>
                    Eius sunt voluptate quo esse magnam rem nulla dolorem optio.
                    Ratione quaerat qui accusantium sunt fugit quas sed dolorem.
                    Sint nostrum non eos nisi nihil voluptate. Natus ut unde
                    dolor nesciunt blanditiis et cum. Sed iste inventore
                    reprehenderit incidunt ipsa et. Eius sunt voluptate quo esse
                    magnam rem nulla dolorem optio. Ratione quaerat qui
                  </div>
                  <div className={styles.article}>Article</div>
                  <img
                    className={styles.component942}
                    alt=""
                    src="/component-94--1.svg"
                  />
                  <div className={styles.rectangleDiv} />
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-54848.svg"
                  />
                  <div className={styles.lineDiv} />
                  <div className={styles.farmName}>Farm name</div>
                  <div className={styles.farmLocation}>Farm location</div>
                  <div className={styles.starIconGroup}>
                    <img
                      className={styles.starIcon}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={styles.iconAwesomeStar}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={styles.iconAwesomeStar1}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={styles.iconAwesomeStar2}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={styles.iconAwesomeStar3}
                      alt=""
                      src="/icon-awesomestar1.svg"
                    />
                    <div className={styles.div25}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component91230}
                  onClick={onComponent91231Click}
                >
                  <div className={styles.component91230Child} />
                  <div className={styles.component1071}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.div24}>16/3/2023</div>
                  <div className={styles.starIconParent}>
                    <img
                      className={styles.starIcon}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={styles.iconAwesomeStar}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={styles.iconAwesomeStar1}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={styles.iconAwesomeStar2}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={styles.iconAwesomeStar3}
                      alt=""
                      src="/icon-awesomestar1.svg"
                    />
                    <div className={styles.div25}>(1.8)</div>
                  </div>
                  <div className={styles.component91230Item} />
                  <div className={styles.buyNow}>
                    <div className={styles.buyNowItem} />
                    <div className={styles.readMore}>Read More</div>
                  </div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/mask-group-1974@2x.png"
                  />
                  <div className={styles.component91230Inner} />
                  <div className={styles.eiusSuntVoluptate}>
                    Eius sunt voluptate quo esse magnam rem nulla dolorem optio.
                    Ratione quaerat qui accusantium sunt fugit quas sed dolorem.
                    Sint nostrum non eos nisi nihil voluptate. Natus ut unde
                    dolor nesciunt blanditiis et cum. Sed iste inventore
                    reprehenderit incidunt ipsa et. Eius sunt voluptate quo esse
                    magnam rem nulla dolorem optio. Ratione quaerat qui
                  </div>
                  <div className={styles.article}>Article</div>
                  <img
                    className={styles.component942}
                    alt=""
                    src="/component-94--1.svg"
                  />
                  <div className={styles.rectangleDiv} />
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-54848.svg"
                  />
                  <div className={styles.lineDiv} />
                  <div className={styles.farmName}>Farm name</div>
                  <div className={styles.farmLocation}>Farm location</div>
                  <div className={styles.starIconGroup}>
                    <img
                      className={styles.starIcon}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={styles.iconAwesomeStar}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={styles.iconAwesomeStar1}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={styles.iconAwesomeStar2}
                      alt=""
                      src="/star-icon1.svg"
                    />
                    <img
                      className={styles.iconAwesomeStar3}
                      alt=""
                      src="/icon-awesomestar1.svg"
                    />
                    <div className={styles.div25}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
              </div>
            </div>
            <div className={styles.articles4}>Articles</div>
            <img
              className={styles.groupChild27}
              alt=""
              src="/group-54749.svg"
            />
            <div
              className={styles.rectangleParent}
              onClick={onGroupContainer70Click}
            >
              <div className={styles.groupChild28} />
              <img
                className={styles.groupChild29}
                alt=""
                src="/ellipse-512.svg"
              />
            </div>
            <div className={styles.investorWizard1}>Investor Wizard</div>
            <div className={styles.top104}>Top 10</div>
            <div className={styles.recommendedForYou4}>Recommended for you</div>
            <div className={styles.trending4}>Trending</div>
            <div className={styles.basedOnYourInterest4}>
              Based on Your Interest
            </div>
            <div className={styles.videos4}>Videos</div>
            <div className={styles.scrollGroup13}>
              <div className={styles.repeatGrid19}>
                <div className={styles.div30}>
                  <div
                    className={styles.component91211}
                    onClick={onComponent91211Click}
                  >
                    <div className={styles.component91230Child} />
                    <div className={styles.component1071}>
                      <div className={styles.farmOwnerName}>
                        Farm owner name
                      </div>
                    </div>
                    <div className={styles.div24}>16/3/2023</div>
                    <img
                      className={styles.agricultureImageIcon}
                      alt=""
                      src="/agriculture-image12@2x.png"
                    />
                    <div className={styles.parent}>
                      <div className={styles.div32}>{`80$ | 12 `}</div>
                      <div className={styles.price}>Price</div>
                      <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                    </div>
                    <div className={styles.div33}>+0.87 %</div>
                    <div className={styles.groupParent1}>
                      <div className={styles.rectangleWrapper}>
                        <div className={styles.groupChild30} />
                      </div>
                      <div className={styles.m}>255M$</div>
                      <div className={styles.averageRevenue}>
                        Average revenue
                      </div>
                    </div>
                    <div className={styles.starIconParent}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <div className={styles.yield}>Yield</div>
                    <div className={styles.component91230Item} />
                    <div className={styles.addToCart}>
                      <div className={styles.addToCartChild} />
                      <img
                        className={styles.iconlylightOutlinebuy}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div className={styles.addToCart1}>Add to cart</div>
                    </div>
                    <div className={styles.buyNow2}>
                      <div className={styles.buyNowItem} />
                      <div className={styles.buyNow3}>Buy Now</div>
                    </div>
                    <div className={styles.component91211Inner} />
                    <div className={styles.component91211Child1} />
                    <img
                      className={styles.component91211Child2}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={styles.component942}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div className={styles.farmName}>Farm name</div>
                    <div className={styles.farmLocation}>Farm location</div>
                    <div className={styles.starIconGroup}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <img className={styles.shareIcon} alt="" src="/share.svg" />
                  </div>
                </div>
                <div className={styles.div36}>
                  <div
                    className={styles.component91211}
                    onClick={onComponent912111Click}
                  >
                    <div className={styles.component91230Child} />
                    <div className={styles.component1071}>
                      <div className={styles.farmOwnerName}>
                        Farm owner name
                      </div>
                    </div>
                    <div className={styles.div24}>16/3/2023</div>
                    <img
                      className={styles.agricultureImageIcon}
                      alt=""
                      src="/agriculture-image13@2x.png"
                    />
                    <div className={styles.parent}>
                      <div className={styles.div32}>{`80$ | 12 `}</div>
                      <div className={styles.price}>Price</div>
                      <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                    </div>
                    <div className={styles.div33}>+0.87 %</div>
                    <div className={styles.groupParent1}>
                      <div className={styles.rectangleWrapper}>
                        <div className={styles.groupChild30} />
                      </div>
                      <div className={styles.m}>255M$</div>
                      <div className={styles.averageRevenue}>
                        Average revenue
                      </div>
                    </div>
                    <div className={styles.starIconParent}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <div className={styles.yield}>Yield</div>
                    <div className={styles.component91230Item} />
                    <div className={styles.addToCart}>
                      <div className={styles.addToCartChild} />
                      <img
                        className={styles.iconlylightOutlinebuy}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div className={styles.addToCart1}>Add to cart</div>
                    </div>
                    <div className={styles.buyNow2}>
                      <div className={styles.buyNowItem} />
                      <div className={styles.buyNow3}>Buy Now</div>
                    </div>
                    <div className={styles.component91211Inner} />
                    <div className={styles.component91211Child1} />
                    <img
                      className={styles.component91211Child2}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={styles.component942}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div className={styles.farmName}>Farm name</div>
                    <div className={styles.farmLocation}>Farm location</div>
                    <div className={styles.starIconGroup}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <img className={styles.shareIcon} alt="" src="/share.svg" />
                  </div>
                </div>
                <div className={styles.div42}>
                  <div
                    className={styles.component91211}
                    onClick={onComponent912112Click}
                  >
                    <div className={styles.component91230Child} />
                    <div className={styles.component1071}>
                      <div className={styles.farmOwnerName}>
                        Farm owner name
                      </div>
                    </div>
                    <div className={styles.div24}>16/3/2023</div>
                    <img
                      className={styles.agricultureImageIcon}
                      alt=""
                      src="/agriculture-image13@2x.png"
                    />
                    <div className={styles.parent}>
                      <div className={styles.div32}>{`80$ | 12 `}</div>
                      <div className={styles.price}>Price</div>
                      <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                    </div>
                    <div className={styles.div33}>+0.87 %</div>
                    <div className={styles.groupParent1}>
                      <div className={styles.rectangleWrapper}>
                        <div className={styles.groupChild30} />
                      </div>
                      <div className={styles.m}>255M$</div>
                      <div className={styles.averageRevenue}>
                        Average revenue
                      </div>
                    </div>
                    <div className={styles.starIconParent}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <div className={styles.yield}>Yield</div>
                    <div className={styles.component91230Item} />
                    <div className={styles.addToCart}>
                      <div className={styles.addToCartChild} />
                      <img
                        className={styles.iconlylightOutlinebuy}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div className={styles.addToCart1}>Add to cart</div>
                    </div>
                    <div className={styles.buyNow2}>
                      <div className={styles.buyNowItem} />
                      <div className={styles.buyNow3}>Buy Now</div>
                    </div>
                    <div className={styles.component91211Inner} />
                    <div className={styles.component91211Child1} />
                    <img
                      className={styles.component91211Child2}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={styles.component942}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div className={styles.farmName}>Farm name</div>
                    <div className={styles.farmLocation}>Farm location</div>
                    <div className={styles.starIconGroup}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <img className={styles.shareIcon} alt="" src="/share.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.scrollGroup19}>
              <div className={styles.repeatGrid19}>
                <div className={styles.div30}>
                  <div
                    className={styles.component91211}
                    onClick={onComponent91232Click}
                  >
                    <div className={styles.component91230Child} />
                    <div className={styles.component1071}>
                      <div className={styles.farmOwnerName}>
                        Farm owner name
                      </div>
                    </div>
                    <div className={styles.div24}>16/3/2023</div>
                    <img
                      className={styles.agricultureImageIcon}
                      alt=""
                      src="/agriculture-image14@2x.png"
                    />
                    <div className={styles.parent}>
                      <div className={styles.div32}>{`80$ | 12 `}</div>
                      <div className={styles.price}>Price</div>
                      <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                    </div>
                    <div className={styles.div33}>+0.87 %</div>
                    <div className={styles.groupParent1}>
                      <div className={styles.rectangleWrapper}>
                        <div className={styles.groupChild30} />
                      </div>
                      <div className={styles.m}>255M$</div>
                      <div className={styles.averageRevenue}>
                        Average revenue
                      </div>
                    </div>
                    <div className={styles.starIconParent}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <div className={styles.yield}>Yield</div>
                    <div className={styles.component91230Item} />
                    <div className={styles.addToCart}>
                      <div className={styles.addToCartChild} />
                      <img
                        className={styles.iconlylightOutlinebuy}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div className={styles.addToCart1}>Add to cart</div>
                    </div>
                    <div className={styles.buyNow2}>
                      <div className={styles.buyNowItem} />
                      <div className={styles.buyNow3}>Buy Now</div>
                    </div>
                    <div className={styles.component91211Inner} />
                    <div className={styles.component91211Child1} />
                    <img
                      className={styles.component91211Child2}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={styles.component942}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div className={styles.farmName}>Farm name</div>
                    <div className={styles.farmLocation}>Farm location</div>
                    <div className={styles.starIconGroup}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <img className={styles.shareIcon} alt="" src="/share.svg" />
                  </div>
                </div>
                <div className={styles.div36}>
                  <div
                    className={styles.component91211}
                    onClick={onComponent912321Click}
                  >
                    <div className={styles.component91230Child} />
                    <div className={styles.component1071}>
                      <div className={styles.farmOwnerName}>
                        Farm owner name
                      </div>
                    </div>
                    <div className={styles.div24}>16/3/2023</div>
                    <img
                      className={styles.agricultureImageIcon}
                      alt=""
                      src="/agriculture-image14@2x.png"
                    />
                    <div className={styles.parent}>
                      <div className={styles.div32}>{`80$ | 12 `}</div>
                      <div className={styles.price}>Price</div>
                      <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                    </div>
                    <div className={styles.div33}>+0.87 %</div>
                    <div className={styles.groupParent1}>
                      <div className={styles.rectangleWrapper}>
                        <div className={styles.groupChild30} />
                      </div>
                      <div className={styles.m}>255M$</div>
                      <div className={styles.averageRevenue}>
                        Average revenue
                      </div>
                    </div>
                    <div className={styles.starIconParent}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <div className={styles.yield}>Yield</div>
                    <div className={styles.component91230Item} />
                    <div className={styles.addToCart}>
                      <div className={styles.addToCartChild} />
                      <img
                        className={styles.iconlylightOutlinebuy}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div className={styles.addToCart1}>Add to cart</div>
                    </div>
                    <div className={styles.buyNow2}>
                      <div className={styles.buyNowItem} />
                      <div className={styles.buyNow3}>Buy Now</div>
                    </div>
                    <div className={styles.component91211Inner} />
                    <div className={styles.component91211Child1} />
                    <img
                      className={styles.component91211Child2}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={styles.component942}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div className={styles.farmName}>Farm name</div>
                    <div className={styles.farmLocation}>Farm location</div>
                    <div className={styles.starIconGroup}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <img className={styles.shareIcon} alt="" src="/share.svg" />
                  </div>
                </div>
                <div className={styles.div42}>
                  <div
                    className={styles.component91211}
                    onClick={onComponent912322Click}
                  >
                    <div className={styles.component91230Child} />
                    <div className={styles.component1071}>
                      <div className={styles.farmOwnerName}>
                        Farm owner name
                      </div>
                    </div>
                    <div className={styles.div24}>16/3/2023</div>
                    <img
                      className={styles.agricultureImageIcon}
                      alt=""
                      src="/agriculture-image14@2x.png"
                    />
                    <div className={styles.parent}>
                      <div className={styles.div32}>{`80$ | 12 `}</div>
                      <div className={styles.price}>Price</div>
                      <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                    </div>
                    <div className={styles.div33}>+0.87 %</div>
                    <div className={styles.groupParent1}>
                      <div className={styles.rectangleWrapper}>
                        <div className={styles.groupChild30} />
                      </div>
                      <div className={styles.m}>255M$</div>
                      <div className={styles.averageRevenue}>
                        Average revenue
                      </div>
                    </div>
                    <div className={styles.starIconParent}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <div className={styles.yield}>Yield</div>
                    <div className={styles.component91230Item} />
                    <div className={styles.addToCart}>
                      <div className={styles.addToCartChild} />
                      <img
                        className={styles.iconlylightOutlinebuy}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div className={styles.addToCart1}>Add to cart</div>
                    </div>
                    <div className={styles.buyNow2}>
                      <div className={styles.buyNowItem} />
                      <div className={styles.buyNow3}>Buy Now</div>
                    </div>
                    <div className={styles.component91211Inner} />
                    <div className={styles.component91211Child1} />
                    <img
                      className={styles.component91211Child2}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={styles.component942}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div className={styles.farmName}>Farm name</div>
                    <div className={styles.farmLocation}>Farm location</div>
                    <div className={styles.starIconGroup}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <img className={styles.shareIcon} alt="" src="/share.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.scrollGroup16}>
              <div className={styles.repeatGrid19}>
                <div className={styles.div66}>
                  <div
                    className={styles.component91211}
                    onClick={onComponent91234Click}
                  >
                    <div className={styles.component91230Child} />
                    <div className={styles.component1071}>
                      <div className={styles.farmOwnerName}>
                        Farm owner name
                      </div>
                    </div>
                    <div className={styles.div24}>16/3/2023</div>
                    <img
                      className={styles.agricultureImageIcon}
                      alt=""
                      src="/agriculture-image6@2x.png"
                    />
                    <div className={styles.parent}>
                      <div className={styles.div32}>{`80$ | 12 `}</div>
                      <div className={styles.price}>Price</div>
                      <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                    </div>
                    <div className={styles.div33}>+0.87 %</div>
                    <div className={styles.groupParent1}>
                      <div className={styles.rectangleWrapper}>
                        <div className={styles.groupChild30} />
                      </div>
                      <div className={styles.m}>255M$</div>
                      <div className={styles.averageRevenue}>
                        Average revenue
                      </div>
                    </div>
                    <div className={styles.starIconParent}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <div className={styles.yield}>Yield</div>
                    <div className={styles.component91230Item} />
                    <div className={styles.addToCart}>
                      <div className={styles.addToCartChild} />
                      <img
                        className={styles.iconlylightOutlinebuy}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div className={styles.addToCart1}>Add to cart</div>
                    </div>
                    <div className={styles.buyNow2}>
                      <div className={styles.buyNowItem} />
                      <div className={styles.buyNow3}>Buy Now</div>
                    </div>
                    <div className={styles.component91211Inner} />
                    <div className={styles.component91211Child1} />
                    <img
                      className={styles.component91211Child2}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={styles.component942}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div className={styles.farmName}>Farm name</div>
                    <div className={styles.farmLocation}>Farm location</div>
                    <div className={styles.starIconGroup}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <img className={styles.shareIcon} alt="" src="/share.svg" />
                  </div>
                </div>
                <div className={styles.div72}>
                  <div
                    className={styles.component91211}
                    onClick={onComponent912341Click}
                  >
                    <div className={styles.component91230Child} />
                    <div className={styles.component1071}>
                      <div className={styles.farmOwnerName}>
                        Farm owner name
                      </div>
                    </div>
                    <div className={styles.div24}>16/3/2023</div>
                    <img
                      className={styles.agricultureImageIcon}
                      alt=""
                      src="/agriculture-image6@2x.png"
                    />
                    <div className={styles.parent}>
                      <div className={styles.div32}>{`80$ | 12 `}</div>
                      <div className={styles.price}>Price</div>
                      <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                    </div>
                    <div className={styles.div33}>+0.87 %</div>
                    <div className={styles.groupParent1}>
                      <div className={styles.rectangleWrapper}>
                        <div className={styles.groupChild30} />
                      </div>
                      <div className={styles.m}>255M$</div>
                      <div className={styles.averageRevenue}>
                        Average revenue
                      </div>
                    </div>
                    <div className={styles.starIconParent}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <div className={styles.yield}>Yield</div>
                    <div className={styles.component91230Item} />
                    <div className={styles.addToCart}>
                      <div className={styles.addToCartChild} />
                      <img
                        className={styles.iconlylightOutlinebuy}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div className={styles.addToCart1}>Add to cart</div>
                    </div>
                    <div className={styles.buyNow2}>
                      <div className={styles.buyNowItem} />
                      <div className={styles.buyNow3}>Buy Now</div>
                    </div>
                    <div className={styles.component91211Inner} />
                    <div className={styles.component91211Child1} />
                    <img
                      className={styles.component91211Child2}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={styles.component942}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div className={styles.farmName}>Farm name</div>
                    <div className={styles.farmLocation}>Farm location</div>
                    <div className={styles.starIconGroup}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <img className={styles.shareIcon} alt="" src="/share.svg" />
                  </div>
                </div>
                <div className={styles.div78}>
                  <div
                    className={styles.component91211}
                    onClick={onComponent912342Click}
                  >
                    <div className={styles.component91230Child} />
                    <div className={styles.component1071}>
                      <div className={styles.farmOwnerName}>
                        Farm owner name
                      </div>
                    </div>
                    <div className={styles.div24}>16/3/2023</div>
                    <img
                      className={styles.agricultureImageIcon}
                      alt=""
                      src="/agriculture-image6@2x.png"
                    />
                    <div className={styles.parent}>
                      <div className={styles.div32}>{`80$ | 12 `}</div>
                      <div className={styles.price}>Price</div>
                      <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                    </div>
                    <div className={styles.div33}>+0.87 %</div>
                    <div className={styles.groupParent1}>
                      <div className={styles.rectangleWrapper}>
                        <div className={styles.groupChild30} />
                      </div>
                      <div className={styles.m}>255M$</div>
                      <div className={styles.averageRevenue}>
                        Average revenue
                      </div>
                    </div>
                    <div className={styles.starIconParent}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <div className={styles.yield}>Yield</div>
                    <div className={styles.component91230Item} />
                    <div className={styles.addToCart}>
                      <div className={styles.addToCartChild} />
                      <img
                        className={styles.iconlylightOutlinebuy}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div className={styles.addToCart1}>Add to cart</div>
                    </div>
                    <div className={styles.buyNow2}>
                      <div className={styles.buyNowItem} />
                      <div className={styles.buyNow3}>Buy Now</div>
                    </div>
                    <div className={styles.component91211Inner} />
                    <div className={styles.component91211Child1} />
                    <img
                      className={styles.component91211Child2}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={styles.component942}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div className={styles.farmName}>Farm name</div>
                    <div className={styles.farmLocation}>Farm location</div>
                    <div className={styles.starIconGroup}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <img className={styles.shareIcon} alt="" src="/share.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.scrollGroup18}>
              <div className={styles.repeatGrid19}>
                <div className={styles.div84}>
                  <div
                    className={styles.component91211}
                    onClick={onComponent91233Click}
                  >
                    <div className={styles.component91230Child} />
                    <div className={styles.component1071}>
                      <div className={styles.farmOwnerName}>
                        Farm owner name
                      </div>
                    </div>
                    <div className={styles.div24}>16/3/2023</div>
                    <img
                      className={styles.agricultureImageIcon}
                      alt=""
                      src="/agriculture-image4@2x.png"
                    />
                    <div className={styles.parent}>
                      <div className={styles.div32}>{`80$ | 12 `}</div>
                      <div className={styles.price}>Price</div>
                      <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                    </div>
                    <div className={styles.div33}>+0.87 %</div>
                    <div className={styles.groupParent1}>
                      <div className={styles.rectangleWrapper}>
                        <div className={styles.groupChild30} />
                      </div>
                      <div className={styles.m}>255M$</div>
                      <div className={styles.averageRevenue}>
                        Average revenue
                      </div>
                    </div>
                    <div className={styles.starIconParent}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <div className={styles.yield}>Yield</div>
                    <div className={styles.component91230Item} />
                    <div className={styles.addToCart}>
                      <div className={styles.addToCartChild} />
                      <img
                        className={styles.iconlylightOutlinebuy}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div className={styles.addToCart1}>Add to cart</div>
                    </div>
                    <div className={styles.buyNow2}>
                      <div className={styles.buyNowItem} />
                      <div className={styles.buyNow3}>Buy Now</div>
                    </div>
                    <div className={styles.component91211Inner} />
                    <div className={styles.component91211Child1} />
                    <img
                      className={styles.component91211Child2}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={styles.component942}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div className={styles.farmName}>Farm name</div>
                    <div className={styles.farmLocation}>Farm location</div>
                    <div className={styles.starIconGroup}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <img className={styles.shareIcon} alt="" src="/share.svg" />
                  </div>
                </div>
                <div className={styles.div90}>
                  <div
                    className={styles.component91211}
                    onClick={onComponent912331Click}
                  >
                    <div className={styles.component91230Child} />
                    <div className={styles.component1071}>
                      <div className={styles.farmOwnerName}>
                        Farm owner name
                      </div>
                    </div>
                    <div className={styles.div24}>16/3/2023</div>
                    <img
                      className={styles.agricultureImageIcon}
                      alt=""
                      src="/agriculture-image4@2x.png"
                    />
                    <div className={styles.parent}>
                      <div className={styles.div32}>{`80$ | 12 `}</div>
                      <div className={styles.price}>Price</div>
                      <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                    </div>
                    <div className={styles.div33}>+0.87 %</div>
                    <div className={styles.groupParent1}>
                      <div className={styles.rectangleWrapper}>
                        <div className={styles.groupChild30} />
                      </div>
                      <div className={styles.m}>255M$</div>
                      <div className={styles.averageRevenue}>
                        Average revenue
                      </div>
                    </div>
                    <div className={styles.starIconParent}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <div className={styles.yield}>Yield</div>
                    <div className={styles.component91230Item} />
                    <div className={styles.addToCart}>
                      <div className={styles.addToCartChild} />
                      <img
                        className={styles.iconlylightOutlinebuy}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div className={styles.addToCart1}>Add to cart</div>
                    </div>
                    <div className={styles.buyNow2}>
                      <div className={styles.buyNowItem} />
                      <div className={styles.buyNow3}>Buy Now</div>
                    </div>
                    <div className={styles.component91211Inner} />
                    <div className={styles.component91211Child1} />
                    <img
                      className={styles.component91211Child2}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={styles.component942}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div className={styles.farmName}>Farm name</div>
                    <div className={styles.farmLocation}>Farm location</div>
                    <div className={styles.starIconGroup}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <img className={styles.shareIcon} alt="" src="/share.svg" />
                  </div>
                </div>
                <div className={styles.div96}>
                  <div
                    className={styles.component91211}
                    onClick={onComponent912332Click}
                  >
                    <div className={styles.component91230Child} />
                    <div className={styles.component1071}>
                      <div className={styles.farmOwnerName}>
                        Farm owner name
                      </div>
                    </div>
                    <div className={styles.div24}>16/3/2023</div>
                    <img
                      className={styles.agricultureImageIcon}
                      alt=""
                      src="/agriculture-image4@2x.png"
                    />
                    <div className={styles.parent}>
                      <div className={styles.div32}>{`80$ | 12 `}</div>
                      <div className={styles.price}>Price</div>
                      <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                    </div>
                    <div className={styles.div33}>+0.87 %</div>
                    <div className={styles.groupParent1}>
                      <div className={styles.rectangleWrapper}>
                        <div className={styles.groupChild30} />
                      </div>
                      <div className={styles.m}>255M$</div>
                      <div className={styles.averageRevenue}>
                        Average revenue
                      </div>
                    </div>
                    <div className={styles.starIconParent}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <div className={styles.yield}>Yield</div>
                    <div className={styles.component91230Item} />
                    <div className={styles.addToCart}>
                      <div className={styles.addToCartChild} />
                      <img
                        className={styles.iconlylightOutlinebuy}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div className={styles.addToCart1}>Add to cart</div>
                    </div>
                    <div className={styles.buyNow2}>
                      <div className={styles.buyNowItem} />
                      <div className={styles.buyNow3}>Buy Now</div>
                    </div>
                    <div className={styles.component91211Inner} />
                    <div className={styles.component91211Child1} />
                    <img
                      className={styles.component91211Child2}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={styles.component942}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div className={styles.farmName}>Farm name</div>
                    <div className={styles.farmLocation}>Farm location</div>
                    <div className={styles.starIconGroup}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <img className={styles.shareIcon} alt="" src="/share.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.scrollGroup17}>
              <div className={styles.repeatGrid21}>
                <div className={styles.div102}>
                  <div
                    className={styles.component91213}
                    onClick={onComponent91213Click}
                  >
                    <div className={styles.component91230Child} />
                    <div className={styles.component107114}>
                      <div className={styles.farmOwnerName}>
                        Farm owner name
                      </div>
                    </div>
                    <div className={styles.agricultureImage}>
                      <div className={styles.video} />
                      <div className={styles.agricultureImageChild} />
                    </div>
                    <div className={styles.starIconParent26}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar1.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <div className={styles.component91230Item} />
                    <div className={styles.lineDiv} />
                    <div className={styles.farmOwnerName15}>
                      Farm owner name
                    </div>
                    <div className={styles.farmLocation14}>Farm location</div>
                    <img
                      className={styles.component91213Child1}
                      alt=""
                      src="/group-54848.svg"
                    />
                    <img
                      className={styles.expandIcon}
                      alt=""
                      src="/group-54869.svg"
                    />
                    <img
                      className={styles.component91213Child2}
                      alt=""
                      src="/group-54864.svg"
                    />
                    <div className={styles.playParent}>
                      <img
                        className={styles.playIcon}
                        alt=""
                        src="/icon-awesomeplay.svg"
                      />
                      <img
                        className={styles.groupChild42}
                        alt=""
                        src="/group-54867.svg"
                      />
                      <div className={styles.div104}>0:25 / 3:17</div>
                    </div>
                    <div className={styles.farmName14}>Farm name</div>
                    <div className={styles.farmLocation15}>Farm location</div>
                    <img
                      className={styles.chromecastIcon}
                      alt=""
                      src="/icon-awesomechromecast.svg"
                    />
                    <img
                      className={styles.component942}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div className={styles.starIconParent27}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar1.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <img className={styles.shareIcon} alt="" src="/share.svg" />
                  </div>
                </div>
                <div className={styles.div106}>
                  <div
                    className={styles.component91213}
                    onClick={onComponent912131Click}
                  >
                    <div className={styles.component91230Child} />
                    <div className={styles.component107114}>
                      <div className={styles.farmOwnerName}>
                        Farm owner name
                      </div>
                    </div>
                    <div className={styles.agricultureImage}>
                      <div className={styles.video} />
                      <div className={styles.agricultureImageChild} />
                    </div>
                    <div className={styles.starIconParent26}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar1.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <div className={styles.component91230Item} />
                    <div className={styles.lineDiv} />
                    <div className={styles.farmOwnerName15}>
                      Farm owner name
                    </div>
                    <div className={styles.farmLocation14}>Farm location</div>
                    <img
                      className={styles.component91213Child1}
                      alt=""
                      src="/group-54848.svg"
                    />
                    <img
                      className={styles.expandIcon}
                      alt=""
                      src="/group-54869.svg"
                    />
                    <img
                      className={styles.component91213Child2}
                      alt=""
                      src="/group-54864.svg"
                    />
                    <div className={styles.playParent}>
                      <img
                        className={styles.playIcon}
                        alt=""
                        src="/icon-awesomeplay.svg"
                      />
                      <img
                        className={styles.groupChild42}
                        alt=""
                        src="/group-54867.svg"
                      />
                      <div className={styles.div104}>0:25 / 3:17</div>
                    </div>
                    <div className={styles.farmName14}>Farm name</div>
                    <div className={styles.farmLocation15}>Farm location</div>
                    <img
                      className={styles.chromecastIcon}
                      alt=""
                      src="/icon-awesomechromecast.svg"
                    />
                    <img
                      className={styles.component942}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div className={styles.starIconParent27}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar1.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <img className={styles.shareIcon} alt="" src="/share.svg" />
                  </div>
                </div>
                <div className={styles.div110}>
                  <div
                    className={styles.component91213}
                    onClick={onComponent912132Click}
                  >
                    <div className={styles.component91230Child} />
                    <div className={styles.component107114}>
                      <div className={styles.farmOwnerName}>
                        Farm owner name
                      </div>
                    </div>
                    <div className={styles.agricultureImage}>
                      <div className={styles.video} />
                      <div className={styles.agricultureImageChild} />
                    </div>
                    <div className={styles.starIconParent26}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar1.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <div className={styles.component91230Item} />
                    <div className={styles.lineDiv} />
                    <div className={styles.farmOwnerName15}>
                      Farm owner name
                    </div>
                    <div className={styles.farmLocation14}>Farm location</div>
                    <img
                      className={styles.component91213Child1}
                      alt=""
                      src="/group-54848.svg"
                    />
                    <img
                      className={styles.expandIcon}
                      alt=""
                      src="/group-54869.svg"
                    />
                    <img
                      className={styles.component91213Child2}
                      alt=""
                      src="/group-54864.svg"
                    />
                    <div className={styles.playParent}>
                      <img
                        className={styles.playIcon}
                        alt=""
                        src="/icon-awesomeplay.svg"
                      />
                      <img
                        className={styles.groupChild42}
                        alt=""
                        src="/group-54867.svg"
                      />
                      <div className={styles.div104}>0:25 / 3:17</div>
                    </div>
                    <div className={styles.farmName14}>Farm name</div>
                    <div className={styles.farmLocation15}>Farm location</div>
                    <img
                      className={styles.chromecastIcon}
                      alt=""
                      src="/icon-awesomechromecast.svg"
                    />
                    <img
                      className={styles.component942}
                      alt=""
                      src="/component-94--1.svg"
                    />
                    <div className={styles.starIconParent31}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar1}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar2}
                        alt=""
                        src="/star-icon1.svg"
                      />
                      <img
                        className={styles.iconAwesomeStar3}
                        alt=""
                        src="/icon-awesomestar1.svg"
                      />
                      <div className={styles.div25}>(1.8)</div>
                    </div>
                    <img className={styles.shareIcon} alt="" src="/share.svg" />
                  </div>
                </div>
              </div>
            </div>
            <img
              className={styles.groupChild45}
              alt=""
              src="/group-54843.svg"
            />
            <img
              className={styles.groupChild46}
              alt=""
              src="/group-54843.svg"
            />
            <img
              className={styles.groupChild47}
              alt=""
              src="/group-54843.svg"
            />
            <img
              className={styles.groupChild48}
              alt=""
              src="/group-54843.svg"
            />
            <img
              className={styles.groupChild49}
              alt=""
              src="/group-54843.svg"
            />
            <img
              className={styles.groupChild50}
              alt=""
              src="/group-54888.svg"
            />
            <img
              className={styles.groupChild51}
              alt=""
              src="/group-54888.svg"
            />
            <img
              className={styles.groupChild52}
              alt=""
              src="/group-54888.svg"
            />
            <img
              className={styles.groupChild53}
              alt=""
              src="/group-54888.svg"
            />
            <img
              className={styles.groupChild54}
              alt=""
              src="/group-54888.svg"
            />
            <img
              className={styles.groupChild55}
              alt=""
              src="/group-54843.svg"
            />
            <img
              className={styles.groupChild56}
              alt=""
              src="/group-54888.svg"
            />
            <img
              className={styles.image220Icon}
              alt=""
              src="/image-220@2x.png"
            />
          </div>
        </div>
        <div className={styles.component1032}>
          <div className={styles.component1032Child} />
          <div className={styles.filtersParent}>
            <div className={styles.filters}>Filters</div>
            <img className={styles.filterIcon} alt="" src="/filter.svg" />
          </div>
        </div>
        <div className={styles.navigationBar}>
          <div className={styles.navigationBarChild} />
          <img
            className={styles.logoIcon1}
            alt=""
            src="/logo8@2x.png"
            onClick={onLogoImageClick}
          />
          <div className={styles.userParent}>
            <img className={styles.userIcon} alt="" src="/user.svg" />
            <img
              className={styles.cartIcon}
              alt=""
              src="/cart.svg"
              onClick={onCartIconClick}
            />
            <img
              className={styles.walletIcon}
              alt=""
              src="/wallet.svg"
              onClick={openConnectWallet}
            />
            <img
              className={styles.lightningIcon}
              alt=""
              src="/lightning.svg"
              onClick={onLightningIconClick}
            />
          </div>
          <div className={styles.searchParent}>
            <div className={styles.search}>Search</div>
            <img className={styles.searchIcon} alt="" src="/search1.svg" />
          </div>
          <div className={styles.leaderboardParent}>
            <div
              className={styles.leaderboard}
              onClick={onLeaderBoardTextClick}
            >
              LeaderBoard
            </div>
            <div className={styles.leaderboard} onClick={openSwapATokens}>
              Swap
            </div>
            <div className={styles.login}>Login</div>
            <div
              className={styles.leaderboard}
              onClick={openSignUpModalStep1Choose}
            >
              Sign Up
            </div>
          </div>
        </div>
      </div>
      {isConnectWalletOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConnectWallet}
        >
          <ConnectWallet onClose={closeConnectWallet} />
        </PortalPopup>
      )}
      {isSwapATokensOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSwapATokens}
        >
          <SwapATokens onClose={closeSwapATokens} />
        </PortalPopup>
      )}
      {isSignUpModalStep1ChooseOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignUpModalStep1Choose}
        >
          <SignUpModalStep1Choose onClose={closeSignUpModalStep1Choose} />
        </PortalPopup>
      )}
    </>
  );
};

export default InvestorWizard;
