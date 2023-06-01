import { useState, useCallback } from "react";
import Stories from "../components/Stories";
import PortalPopup from "../components/PortalPopup";
import ConnectWallet from "../components/ConnectWallet";
import SwapATokens from "../components/SwapATokens";
import SignUpModalStep1Choose from "../components/SignUpModalStep1Choose";
import { useNavigate } from "react-router-dom";
import styles from "./NewMarketPlace.module.css";
const NewMarketPlace = () => {
  const [isStoriesOpen, setStoriesOpen] = useState(false);
  const [isConnectWalletOpen, setConnectWalletOpen] = useState(false);
  const [isSwapATokensOpen, setSwapATokensOpen] = useState(false);
  const [isSignUpModalStep1ChooseOpen, setSignUpModalStep1ChooseOpen] =
    useState(false);
  const navigate = useNavigate();

  const openStories = useCallback(() => {
    setStoriesOpen(true);
  }, []);

  const closeStories = useCallback(() => {
    setStoriesOpen(false);
  }, []);

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

  const onComponent951Click = useCallback(() => {
    navigate("/investor-profile");
  }, [navigate]);

  const onComponent9511Click = useCallback(() => {
    navigate("/investor-profile");
  }, [navigate]);

  const onComponent9512Click = useCallback(() => {
    navigate("/investor-profile");
  }, [navigate]);

  const onComponent9513Click = useCallback(() => {
    navigate("/investor-profile");
  }, [navigate]);

  const onComponent9514Click = useCallback(() => {
    navigate("/investor-profile");
  }, [navigate]);

  const onComponent9515Click = useCallback(() => {
    navigate("/investor-profile");
  }, [navigate]);

  const onGroupContainer62Click = useCallback(() => {
    navigate("/investor-wizard");
  }, [navigate]);

  const onComponent9176Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent9173Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent9182Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent9183Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent9171Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent9190Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91204Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91120Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91205Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91208Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91207Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91206Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91209Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91210Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91121Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent9181Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91122Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91212Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91216Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91218Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91217Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91215Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91219Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91220Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91214Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91226Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91227Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91223Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91225Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91224Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91222Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91221Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91105Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91112Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91111Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91228Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91229Click = useCallback(() => {
    navigate("/farm-profile");
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
      <div className={styles.newMarketPlace}>
        <div className={styles.scrollGroup10}>
          <div className={styles.repeatGrid15}>
            <div className={styles.groupParent}>
              <img
                className={styles.groupChild}
                alt=""
                src="/group-54995.svg"
                onClick={openStories}
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupContainer}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-549951.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupDiv}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-549952.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent1}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-549953.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent2}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-549954.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent3}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-549955.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent4}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-549956.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent5}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-549957.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent6}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-549958.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent7}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-549959.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent8}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499510.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent9}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499511.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent10}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499512.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent11}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499513.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent12}>
              <img className={styles.groupItem} alt="" src="/group-54995.svg" />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent13}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-549951.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent14}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-549952.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent15}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-549953.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent16}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-549954.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent17}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-549955.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent18}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-549956.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent19}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-549957.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent20}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-549958.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent21}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-549959.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent22}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499510.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent23}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499511.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent24}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499512.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
          </div>
        </div>
        <img
          className={styles.newMarketPlaceChild}
          alt=""
          src="/group-54745.svg"
        />
        <div className={styles.stories}>Stories</div>
        <div className={styles.groupParent25}>
          <div className={styles.component901Parent}>
            <div className={styles.component901}>
              <div className={styles.component901Child} />
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
              <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
              <div className={styles.drivingFinancialOpportunitie}>
                Driving financial opportunities for billions of people in a
                trustworthy monetary framework.
              </div>
              <div className={styles.component901Item} />
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
              className={styles.yellowCircle1}
              alt=""
              src="/yellow-circle-1.svg"
            />
          </div>
          <div className={styles.top5LeaderboardParent}>
            <div className={styles.top5Leaderboard}>Top 5 Leaderboard</div>
            <div className={styles.investors}>Investors</div>
            <div className={styles.creators}>Creators</div>
            <div className={styles.repeatGrid17}>
              <div className={styles.component951Wrapper}>
                <div
                  className={styles.component951}
                  onClick={onComponent951Click}
                >
                  <div className={styles.component951Child} />
                  <img
                    className={styles.component951Item}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div className={styles.div}>1</div>
                  <div className={styles.investorName1}>Investor name 1</div>
                  <img
                    className={styles.component951Inner}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div className={styles.div1}>(1.8)</div>
                </div>
              </div>
              <div className={styles.component951Container}>
                <div
                  className={styles.component951}
                  onClick={onComponent9511Click}
                >
                  <div className={styles.component951Child} />
                  <img
                    className={styles.component951Item}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div className={styles.div}>1</div>
                  <div className={styles.investorName1}>Investor name 1</div>
                  <img
                    className={styles.component951Inner}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div className={styles.div1}>(1.8)</div>
                </div>
              </div>
              <div className={styles.component951Frame}>
                <div
                  className={styles.component951}
                  onClick={onComponent9512Click}
                >
                  <div className={styles.component951Child} />
                  <img
                    className={styles.component951Item}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div className={styles.div}>1</div>
                  <div className={styles.investorName1}>Investor name 1</div>
                  <img
                    className={styles.component951Inner}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div className={styles.div1}>(1.8)</div>
                </div>
              </div>
              <div className={styles.component955Wrapper}>
                <div
                  className={styles.component951}
                  onClick={onComponent9513Click}
                >
                  <div className={styles.component951Child} />
                  <img
                    className={styles.component951Item}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div className={styles.div}>1</div>
                  <div className={styles.investorName1}>Investor name 1</div>
                  <img
                    className={styles.component951Inner}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div className={styles.div1}>(1.8)</div>
                </div>
              </div>
              <div className={styles.component956Wrapper}>
                <div
                  className={styles.component951}
                  onClick={onComponent9514Click}
                >
                  <div className={styles.component951Child} />
                  <img
                    className={styles.component951Item}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div className={styles.div}>1</div>
                  <div className={styles.investorName1}>Investor name 1</div>
                  <img
                    className={styles.component951Inner}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div className={styles.div1}>(1.8)</div>
                </div>
              </div>
              <div className={styles.component957Wrapper}>
                <div
                  className={styles.component951}
                  onClick={onComponent9515Click}
                >
                  <div className={styles.component951Child} />
                  <img
                    className={styles.component951Item}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div className={styles.div}>1</div>
                  <div className={styles.investorName1}>Investor name 1</div>
                  <img
                    className={styles.component951Inner}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div className={styles.div1}>(1.8)</div>
                </div>
              </div>
            </div>
            <div className={styles.repeatGrid18}>
              <div className={styles.component951Wrapper}>
                <div className={styles.path44461Parent}>
                  <div className={styles.component952Child} />
                  <img
                    className={styles.component951Item}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div className={styles.div}>1</div>
                  <div className={styles.investorName1}>Investor name 1</div>
                  <img
                    className={styles.component951Inner}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div className={styles.div1}>(1.8)</div>
                </div>
              </div>
              <div className={styles.component951Container}>
                <div className={styles.path44461Parent}>
                  <div className={styles.component952Child} />
                  <img
                    className={styles.component951Item}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div className={styles.div}>1</div>
                  <div className={styles.investorName1}>Investor name 1</div>
                  <img
                    className={styles.component951Inner}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div className={styles.div1}>(1.8)</div>
                </div>
              </div>
              <div className={styles.component951Frame}>
                <div className={styles.path44461Parent}>
                  <div className={styles.component952Child} />
                  <img
                    className={styles.component951Item}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div className={styles.div}>1</div>
                  <div className={styles.investorName1}>Investor name 1</div>
                  <img
                    className={styles.component951Inner}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div className={styles.div1}>(1.8)</div>
                </div>
              </div>
              <div className={styles.component955Wrapper}>
                <div className={styles.path44461Parent}>
                  <div className={styles.component952Child} />
                  <img
                    className={styles.component951Item}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div className={styles.div}>1</div>
                  <div className={styles.investorName1}>Investor name 1</div>
                  <img
                    className={styles.component951Inner}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div className={styles.div1}>(1.8)</div>
                </div>
              </div>
              <div className={styles.component956Wrapper}>
                <div className={styles.path44461Parent}>
                  <div className={styles.component952Child} />
                  <img
                    className={styles.component951Item}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div className={styles.div}>1</div>
                  <div className={styles.investorName1}>Investor name 1</div>
                  <img
                    className={styles.component951Inner}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div className={styles.div1}>(1.8)</div>
                </div>
              </div>
              <div className={styles.component957Wrapper}>
                <div className={styles.path44461Parent}>
                  <div className={styles.component952Child} />
                  <img
                    className={styles.component951Item}
                    alt=""
                    src="/group-54807.svg"
                  />
                  <div className={styles.div}>1</div>
                  <div className={styles.investorName1}>Investor name 1</div>
                  <img
                    className={styles.component951Inner}
                    alt=""
                    src="/group-54808.svg"
                  />
                  <div className={styles.div1}>(1.8)</div>
                </div>
              </div>
            </div>
            <div className={styles.place}>
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
            <div className={styles.place1}>
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
            <div className={styles.place2}>
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
            <div className={styles.groupWrapper1}>
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
        <div className={styles.groupParent26}>
          <div className={styles.groupParent27}>
            <div
              className={styles.rectangleParent}
              onClick={onGroupContainer62Click}
            >
              <div className={styles.groupChild24} />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="/ellipse-512.svg"
              />
            </div>
            <div className={styles.investorWizard}>Investor Wizard</div>
            <div className={styles.top10Parent}>
              <div className={styles.top104}>Top 10</div>
              <div className={styles.scrollGroup12}>
                <div className={styles.component9176Parent}>
                  <div
                    className={styles.component9176}
                    onClick={onComponent9176Click}
                  >
                    <div className={styles.component951Child} />
                    <div className={styles.component1071}>
                      <div className={styles.farmOwnerName}>
                        Farm owner name
                      </div>
                    </div>
                    <div className={styles.div24}>16/3/2023</div>
                    <img
                      className={styles.agricultureImageIcon}
                      alt=""
                      src="/agriculture-image@2x.png"
                    />
                    <div className={styles.parent}>
                      <div className={styles.div25}>{`80$ | 12 `}</div>
                      <div className={styles.price}>Price</div>
                      <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                    </div>
                    <div className={styles.div26}>+0.87 %</div>
                    <div className={styles.groupParent28}>
                      <div className={styles.rectangleWrapper}>
                        <div className={styles.groupChild25} />
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
                      <div className={styles.div27}>(1.8)</div>
                    </div>
                    <div className={styles.yield}>Yield</div>
                    <div className={styles.component9176Item} />
                    <div className={styles.addToCart}>
                      <div className={styles.addToCartChild} />
                      <img
                        className={styles.iconlylightOutlinebuy}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div className={styles.addToCart1}>Add to cart</div>
                    </div>
                    <div className={styles.buyNow}>
                      <div className={styles.buyNowChild} />
                      <div className={styles.buyNow1}>Buy Now</div>
                    </div>
                    <div className={styles.component9176Inner} />
                    <div className={styles.lineDiv} />
                    <img
                      className={styles.component9176Child1}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={styles.component941}
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
                      <div className={styles.div27}>(1.8)</div>
                    </div>
                    <img className={styles.shareIcon} alt="" src="/share.svg" />
                  </div>
                  <div
                    className={styles.component9176}
                    onClick={onComponent9173Click}
                  >
                    <div className={styles.component951Child} />
                    <div className={styles.component1071}>
                      <div className={styles.farmOwnerName}>
                        Farm owner name
                      </div>
                    </div>
                    <div className={styles.div24}>16/3/2023</div>
                    <img
                      className={styles.agricultureImageIcon}
                      alt=""
                      src="/agriculture-image1@2x.png"
                    />
                    <div className={styles.parent}>
                      <div className={styles.div25}>{`80$ | 12 `}</div>
                      <div className={styles.price}>Price</div>
                      <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                    </div>
                    <div className={styles.div26}>+0.87 %</div>
                    <div className={styles.groupParent29}>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.groupChild26} />
                      </div>
                      <div className={styles.m1}>255M$</div>
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
                      <div className={styles.div27}>(1.8)</div>
                    </div>
                    <div className={styles.yield}>Yield</div>
                    <div className={styles.component9176Item} />
                    <div className={styles.addToCart}>
                      <div className={styles.addToCartChild} />
                      <img
                        className={styles.iconlylightOutlinebuy}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div className={styles.addToCart1}>Add to cart</div>
                    </div>
                    <div className={styles.buyNow}>
                      <div className={styles.buyNowChild} />
                      <div className={styles.buyNow1}>Buy Now</div>
                    </div>
                    <div className={styles.component9176Inner} />
                    <div className={styles.lineDiv} />
                    <img
                      className={styles.component9176Child1}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={styles.component941}
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
                      <div className={styles.div27}>(1.8)</div>
                    </div>
                    <img className={styles.shareIcon} alt="" src="/share.svg" />
                  </div>
                  <div
                    className={styles.component9176}
                    onClick={onComponent9182Click}
                  >
                    <div className={styles.component951Child} />
                    <div className={styles.component1071}>
                      <div className={styles.farmOwnerName}>
                        Farm owner name
                      </div>
                    </div>
                    <div className={styles.div24}>16/3/2023</div>
                    <img
                      className={styles.agricultureImageIcon}
                      alt=""
                      src="/agriculture-image2@2x.png"
                    />
                    <div className={styles.parent}>
                      <div className={styles.div25}>{`80$ | 12 `}</div>
                      <div className={styles.price}>Price</div>
                      <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                    </div>
                    <div className={styles.div26}>+0.87 %</div>
                    <div className={styles.groupParent29}>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.groupChild26} />
                      </div>
                      <div className={styles.m1}>255M$</div>
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
                      <div className={styles.div27}>(1.8)</div>
                    </div>
                    <div className={styles.yield}>Yield</div>
                    <div className={styles.component9176Item} />
                    <div className={styles.addToCart}>
                      <div className={styles.addToCartChild} />
                      <img
                        className={styles.iconlylightOutlinebuy}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div className={styles.addToCart1}>Add to cart</div>
                    </div>
                    <div className={styles.buyNow}>
                      <div className={styles.buyNowChild} />
                      <div className={styles.buyNow1}>Buy Now</div>
                    </div>
                    <div className={styles.component9176Inner} />
                    <div className={styles.lineDiv} />
                    <img
                      className={styles.component9176Child1}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={styles.component941}
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
                      <div className={styles.div27}>(1.8)</div>
                    </div>
                    <img className={styles.shareIcon} alt="" src="/share.svg" />
                  </div>
                  <div
                    className={styles.component9176}
                    onClick={onComponent9183Click}
                  >
                    <div className={styles.component951Child} />
                    <div className={styles.component1071}>
                      <div className={styles.farmOwnerName}>
                        Farm owner name
                      </div>
                    </div>
                    <div className={styles.div24}>16/3/2023</div>
                    <img
                      className={styles.agricultureImageIcon}
                      alt=""
                      src="/agriculture-image3@2x.png"
                    />
                    <div className={styles.parent}>
                      <div className={styles.div25}>{`80$ | 12 `}</div>
                      <div className={styles.price}>Price</div>
                      <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                    </div>
                    <div className={styles.div26}>+0.87 %</div>
                    <div className={styles.groupParent29}>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.groupChild26} />
                      </div>
                      <div className={styles.m1}>255M$</div>
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
                      <div className={styles.div27}>(1.8)</div>
                    </div>
                    <div className={styles.yield}>Yield</div>
                    <div className={styles.component9176Item} />
                    <div className={styles.addToCart}>
                      <div className={styles.addToCartChild} />
                      <img
                        className={styles.iconlylightOutlinebuy}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div className={styles.addToCart1}>Add to cart</div>
                    </div>
                    <div className={styles.buyNow}>
                      <div className={styles.buyNowChild} />
                      <div className={styles.buyNow1}>Buy Now</div>
                    </div>
                    <div className={styles.component9176Inner} />
                    <div className={styles.lineDiv} />
                    <img
                      className={styles.component9176Child1}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={styles.component941}
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
                      <div className={styles.div27}>(1.8)</div>
                    </div>
                    <img className={styles.shareIcon} alt="" src="/share.svg" />
                  </div>
                  <div
                    className={styles.component9176}
                    onClick={onComponent9171Click}
                  >
                    <div className={styles.component951Child} />
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
                      <div className={styles.div25}>{`80$ | 12 `}</div>
                      <div className={styles.price}>Price</div>
                      <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                    </div>
                    <div className={styles.div26}>+0.87 %</div>
                    <div className={styles.groupParent29}>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.groupChild26} />
                      </div>
                      <div className={styles.m1}>255M$</div>
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
                      <div className={styles.div27}>(1.8)</div>
                    </div>
                    <div className={styles.yield}>Yield</div>
                    <div className={styles.component9176Item} />
                    <div className={styles.addToCart}>
                      <div className={styles.addToCartChild} />
                      <img
                        className={styles.iconlylightOutlinebuy}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div className={styles.addToCart1}>Add to cart</div>
                    </div>
                    <div className={styles.buyNow}>
                      <div className={styles.buyNowChild} />
                      <div className={styles.buyNow1}>Buy Now</div>
                    </div>
                    <div className={styles.component9176Inner} />
                    <div className={styles.lineDiv} />
                    <img
                      className={styles.component9176Child1}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={styles.component941}
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
                      <div className={styles.div27}>(1.8)</div>
                    </div>
                    <img className={styles.shareIcon} alt="" src="/share.svg" />
                  </div>
                  <div
                    className={styles.component9176}
                    onClick={onComponent9190Click}
                  >
                    <div className={styles.component951Child} />
                    <div className={styles.component1071}>
                      <div className={styles.farmOwnerName}>
                        Farm owner name
                      </div>
                    </div>
                    <div className={styles.div24}>16/3/2023</div>
                    <img
                      className={styles.agricultureImageIcon}
                      alt=""
                      src="/agriculture-image5@2x.png"
                    />
                    <div className={styles.parent}>
                      <div className={styles.div25}>{`80$ | 12 `}</div>
                      <div className={styles.price}>Price</div>
                      <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                    </div>
                    <div className={styles.div26}>+0.87 %</div>
                    <div className={styles.groupParent29}>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.groupChild26} />
                      </div>
                      <div className={styles.m1}>255M$</div>
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
                      <div className={styles.div27}>(1.8)</div>
                    </div>
                    <div className={styles.yield}>Yield</div>
                    <div className={styles.component9176Item} />
                    <div className={styles.addToCart}>
                      <div className={styles.addToCartChild} />
                      <img
                        className={styles.iconlylightOutlinebuy}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div className={styles.addToCart1}>Add to cart</div>
                    </div>
                    <div className={styles.buyNow}>
                      <div className={styles.buyNowChild} />
                      <div className={styles.buyNow1}>Buy Now</div>
                    </div>
                    <div className={styles.component9176Inner} />
                    <div className={styles.lineDiv} />
                    <img
                      className={styles.component9176Child1}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={styles.component941}
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
                      <div className={styles.div27}>(1.8)</div>
                    </div>
                    <img className={styles.shareIcon} alt="" src="/share.svg" />
                  </div>
                  <div
                    className={styles.component9176}
                    onClick={onComponent91204Click}
                  >
                    <div className={styles.component951Child} />
                    <div className={styles.component1071}>
                      <div className={styles.farmOwnerName}>
                        Farm owner name
                      </div>
                    </div>
                    <div className={styles.div24}>16/3/2023</div>
                    <img
                      className={styles.agricultureImageIcon}
                      alt=""
                      src="/agriculture-image@2x.png"
                    />
                    <div className={styles.parent}>
                      <div className={styles.div25}>{`80$ | 12 `}</div>
                      <div className={styles.price}>Price</div>
                      <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                    </div>
                    <div className={styles.div26}>+0.87 %</div>
                    <div className={styles.groupParent29}>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.groupChild26} />
                      </div>
                      <div className={styles.m1}>255M$</div>
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
                      <div className={styles.div27}>(1.8)</div>
                    </div>
                    <div className={styles.yield}>Yield</div>
                    <div className={styles.component9176Item} />
                    <div className={styles.addToCart}>
                      <div className={styles.addToCartChild} />
                      <img
                        className={styles.iconlylightOutlinebuy}
                        alt=""
                        src="/iconlylightoutlinebuy.svg"
                      />
                      <div className={styles.addToCart1}>Add to cart</div>
                    </div>
                    <div className={styles.buyNow}>
                      <div className={styles.buyNowChild} />
                      <div className={styles.buyNow1}>Buy Now</div>
                    </div>
                    <div className={styles.component9176Inner} />
                    <div className={styles.lineDiv} />
                    <img
                      className={styles.component9176Child1}
                      alt=""
                      src="/group-54810.svg"
                    />
                    <img
                      className={styles.component941}
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
                      <div className={styles.div27}>(1.8)</div>
                    </div>
                    <img className={styles.shareIcon} alt="" src="/share.svg" />
                  </div>
                </div>
              </div>
              <img
                className={styles.groupChild32}
                alt=""
                src="/group-54749.svg"
              />
            </div>
          </div>
          <div className={styles.trendingParent}>
            <div className={styles.marketplace}>Trending</div>
            <div className={styles.scrollGroup121}>
              <div className={styles.component9176Parent}>
                <div
                  className={styles.component9176}
                  onClick={onComponent91120Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component1071}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.div24}>16/3/2023</div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/agriculture-image6@2x.png"
                  />
                  <div className={styles.parent}>
                    <div className={styles.div25}>{`80$ | 12 `}</div>
                    <div className={styles.price}>Price</div>
                    <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                  </div>
                  <div className={styles.div26}>+0.87 %</div>
                  <div className={styles.groupParent29}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild26} />
                    </div>
                    <div className={styles.m1}>255M$</div>
                    <div className={styles.averageRevenue}>Average revenue</div>
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.yield}>Yield</div>
                  <div className={styles.component9176Item} />
                  <div className={styles.addToCart}>
                    <div className={styles.addToCartChild} />
                    <img
                      className={styles.iconlylightOutlinebuy}
                      alt=""
                      src="/iconlylightoutlinebuy.svg"
                    />
                    <div className={styles.addToCart1}>Add to cart</div>
                  </div>
                  <div className={styles.buyNow}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.buyNow1}>Buy Now</div>
                  </div>
                  <div className={styles.component9176Inner} />
                  <div className={styles.lineDiv} />
                  <img
                    className={styles.component9176Child1}
                    alt=""
                    src="/group-54810.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component9176}
                  onClick={onComponent91205Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component1071}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.div24}>16/3/2023</div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/agriculture-image5@2x.png"
                  />
                  <div className={styles.parent}>
                    <div className={styles.div25}>{`80$ | 12 `}</div>
                    <div className={styles.price}>Price</div>
                    <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                  </div>
                  <div className={styles.div26}>+0.87 %</div>
                  <div className={styles.groupParent29}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild26} />
                    </div>
                    <div className={styles.m1}>255M$</div>
                    <div className={styles.averageRevenue}>Average revenue</div>
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.yield}>Yield</div>
                  <div className={styles.component9176Item} />
                  <div className={styles.addToCart}>
                    <div className={styles.addToCartChild} />
                    <img
                      className={styles.iconlylightOutlinebuy}
                      alt=""
                      src="/iconlylightoutlinebuy.svg"
                    />
                    <div className={styles.addToCart1}>Add to cart</div>
                  </div>
                  <div className={styles.buyNow}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.buyNow1}>Buy Now</div>
                  </div>
                  <div className={styles.component9176Inner} />
                  <div className={styles.lineDiv} />
                  <img
                    className={styles.component9176Child1}
                    alt=""
                    src="/group-54810.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component9176}
                  onClick={onComponent91208Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component1071}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.div24}>16/3/2023</div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/agriculture-image4@2x.png"
                  />
                  <div className={styles.parent}>
                    <div className={styles.div25}>{`80$ | 12 `}</div>
                    <div className={styles.price}>Price</div>
                    <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                  </div>
                  <div className={styles.div26}>+0.87 %</div>
                  <div className={styles.groupParent29}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild26} />
                    </div>
                    <div className={styles.m1}>255M$</div>
                    <div className={styles.averageRevenue}>Average revenue</div>
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.yield}>Yield</div>
                  <div className={styles.component9176Item} />
                  <div className={styles.addToCart}>
                    <div className={styles.addToCartChild} />
                    <img
                      className={styles.iconlylightOutlinebuy}
                      alt=""
                      src="/iconlylightoutlinebuy.svg"
                    />
                    <div className={styles.addToCart1}>Add to cart</div>
                  </div>
                  <div className={styles.buyNow}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.buyNow1}>Buy Now</div>
                  </div>
                  <div className={styles.component9176Inner} />
                  <div className={styles.lineDiv} />
                  <img
                    className={styles.component9176Child1}
                    alt=""
                    src="/group-54810.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component9176}
                  onClick={onComponent91207Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component1071}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.div24}>16/3/2023</div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/agriculture-image1@2x.png"
                  />
                  <div className={styles.parent}>
                    <div className={styles.div25}>{`80$ | 12 `}</div>
                    <div className={styles.price}>Price</div>
                    <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                  </div>
                  <div className={styles.div26}>+0.87 %</div>
                  <div className={styles.groupParent29}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild26} />
                    </div>
                    <div className={styles.m1}>255M$</div>
                    <div className={styles.averageRevenue}>Average revenue</div>
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.yield}>Yield</div>
                  <div className={styles.component9176Item} />
                  <div className={styles.addToCart}>
                    <div className={styles.addToCartChild} />
                    <img
                      className={styles.iconlylightOutlinebuy}
                      alt=""
                      src="/iconlylightoutlinebuy.svg"
                    />
                    <div className={styles.addToCart1}>Add to cart</div>
                  </div>
                  <div className={styles.buyNow}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.buyNow1}>Buy Now</div>
                  </div>
                  <div className={styles.component9176Inner} />
                  <div className={styles.lineDiv} />
                  <img
                    className={styles.component9176Child1}
                    alt=""
                    src="/group-54810.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component9176}
                  onClick={onComponent91206Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component1071}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.div24}>16/3/2023</div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/agriculture-image2@2x.png"
                  />
                  <div className={styles.parent}>
                    <div className={styles.div25}>{`80$ | 12 `}</div>
                    <div className={styles.price}>Price</div>
                    <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                  </div>
                  <div className={styles.div26}>+0.87 %</div>
                  <div className={styles.groupParent29}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild26} />
                    </div>
                    <div className={styles.m1}>255M$</div>
                    <div className={styles.averageRevenue}>Average revenue</div>
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.yield}>Yield</div>
                  <div className={styles.component9176Item} />
                  <div className={styles.addToCart}>
                    <div className={styles.addToCartChild} />
                    <img
                      className={styles.iconlylightOutlinebuy}
                      alt=""
                      src="/iconlylightoutlinebuy.svg"
                    />
                    <div className={styles.addToCart1}>Add to cart</div>
                  </div>
                  <div className={styles.buyNow}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.buyNow1}>Buy Now</div>
                  </div>
                  <div className={styles.component9176Inner} />
                  <div className={styles.lineDiv} />
                  <img
                    className={styles.component9176Child1}
                    alt=""
                    src="/group-54810.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component9176}
                  onClick={onComponent91209Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component1071}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.div24}>16/3/2023</div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/agriculture-image6@2x.png"
                  />
                  <div className={styles.parent}>
                    <div className={styles.div25}>{`80$ | 12 `}</div>
                    <div className={styles.price}>Price</div>
                    <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                  </div>
                  <div className={styles.div26}>+0.87 %</div>
                  <div className={styles.groupParent29}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild26} />
                    </div>
                    <div className={styles.m1}>255M$</div>
                    <div className={styles.averageRevenue}>Average revenue</div>
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.yield}>Yield</div>
                  <div className={styles.component9176Item} />
                  <div className={styles.addToCart}>
                    <div className={styles.addToCartChild} />
                    <img
                      className={styles.iconlylightOutlinebuy}
                      alt=""
                      src="/iconlylightoutlinebuy.svg"
                    />
                    <div className={styles.addToCart1}>Add to cart</div>
                  </div>
                  <div className={styles.buyNow}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.buyNow1}>Buy Now</div>
                  </div>
                  <div className={styles.component9176Inner} />
                  <div className={styles.lineDiv} />
                  <img
                    className={styles.component9176Child1}
                    alt=""
                    src="/group-54810.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component9176}
                  onClick={onComponent91210Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component1071}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.div24}>16/3/2023</div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/agriculture-image4@2x.png"
                  />
                  <div className={styles.parent}>
                    <div className={styles.div25}>{`80$ | 12 `}</div>
                    <div className={styles.price}>Price</div>
                    <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                  </div>
                  <div className={styles.div26}>+0.87 %</div>
                  <div className={styles.groupParent29}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild26} />
                    </div>
                    <div className={styles.m1}>255M$</div>
                    <div className={styles.averageRevenue}>Average revenue</div>
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.yield}>Yield</div>
                  <div className={styles.component9176Item} />
                  <div className={styles.addToCart}>
                    <div className={styles.addToCartChild} />
                    <img
                      className={styles.iconlylightOutlinebuy}
                      alt=""
                      src="/iconlylightoutlinebuy.svg"
                    />
                    <div className={styles.addToCart1}>Add to cart</div>
                  </div>
                  <div className={styles.buyNow}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.buyNow1}>Buy Now</div>
                  </div>
                  <div className={styles.component9176Inner} />
                  <div className={styles.lineDiv} />
                  <img
                    className={styles.component9176Child1}
                    alt=""
                    src="/group-54810.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
              </div>
            </div>
            <img
              className={styles.groupChild32}
              alt=""
              src="/group-54749.svg"
            />
          </div>
          <div className={styles.videosParent}>
            <div className={styles.marketplace}>Videos</div>
            <div className={styles.scrollGroup14}>
              <div className={styles.component91121Parent}>
                <div
                  className={styles.component91121}
                  onClick={onComponent91121Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component107114}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.component9176Item} />
                  <div className={styles.component91121Inner} />
                  <div className={styles.farmOwnerName15}>Farm owner name</div>
                  <div className={styles.farmLocation14}>Farm location</div>
                  <img
                    className={styles.component91121Child1}
                    alt=""
                    src="/group-54848.svg"
                  />
                  <img
                    className={styles.component91121Child2}
                    alt=""
                    src="/group-54869.svg"
                  />
                  <img
                    className={styles.component91121Child3}
                    alt=""
                    src="/group-54864.svg"
                  />
                  <div className={styles.iconAwesomePlayParent}>
                    <img
                      className={styles.iconAwesomePlay}
                      alt=""
                      src="/icon-awesomeplay.svg"
                    />
                    <img
                      className={styles.groupChild41}
                      alt=""
                      src="/group-54867.svg"
                    />
                    <div className={styles.div95}>0:25 / 3:17</div>
                  </div>
                  <div className={styles.farmName14}>Farm name</div>
                  <div className={styles.farmLocation15}>Farm location</div>
                  <img
                    className={styles.iconAwesomeChromecast}
                    alt=""
                    src="/icon-awesomechromecast.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component91121}
                  onClick={onComponent9181Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component107114}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.agricultureImage}>
                    <div className={styles.pexelsVideos1276083} />
                    <div className={styles.agricultureImageItem} />
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.component9176Item} />
                  <div className={styles.component91121Inner} />
                  <div className={styles.farmOwnerName15}>Farm owner name</div>
                  <div className={styles.farmLocation14}>Farm location</div>
                  <img
                    className={styles.component91121Child1}
                    alt=""
                    src="/group-54848.svg"
                  />
                  <img
                    className={styles.component91121Child2}
                    alt=""
                    src="/group-54869.svg"
                  />
                  <img
                    className={styles.component91121Child3}
                    alt=""
                    src="/group-548641.svg"
                  />
                  <div className={styles.iconAwesomePlayParent}>
                    <img
                      className={styles.iconAwesomePlay}
                      alt=""
                      src="/icon-awesomeplay.svg"
                    />
                    <img
                      className={styles.groupChild41}
                      alt=""
                      src="/group-54867.svg"
                    />
                    <div className={styles.div95}>0:25 / 3:17</div>
                  </div>
                  <div className={styles.farmName14}>Farm name</div>
                  <div className={styles.farmLocation15}>Farm location</div>
                  <img
                    className={styles.iconAwesomeChromecast1}
                    alt=""
                    src="/icon-awesomechromecast.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component91121}
                  onClick={onComponent91122Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component107114}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.agricultureImage}>
                    <div className={styles.timeLapseVideoOfTheSky} />
                    <div className={styles.agricultureImageItem} />
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.component9176Item} />
                  <div className={styles.component91121Inner} />
                  <div className={styles.farmOwnerName15}>Farm owner name</div>
                  <div className={styles.farmLocation14}>Farm location</div>
                  <img
                    className={styles.component91121Child1}
                    alt=""
                    src="/group-54848.svg"
                  />
                  <img
                    className={styles.component91121Child2}
                    alt=""
                    src="/group-54869.svg"
                  />
                  <img
                    className={styles.component91121Child3}
                    alt=""
                    src="/group-548642.svg"
                  />
                  <div className={styles.iconAwesomePlayParent}>
                    <img
                      className={styles.iconAwesomePlay}
                      alt=""
                      src="/icon-awesomeplay.svg"
                    />
                    <img
                      className={styles.groupChild41}
                      alt=""
                      src="/group-54867.svg"
                    />
                    <div className={styles.div95}>0:25 / 3:17</div>
                  </div>
                  <div className={styles.farmName14}>Farm name</div>
                  <div className={styles.farmLocation15}>Farm location</div>
                  <img
                    className={styles.iconAwesomeChromecast1}
                    alt=""
                    src="/icon-awesomechromecast.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component91121}
                  onClick={onComponent91212Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component107114}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.component9176Item} />
                  <div className={styles.component91121Inner} />
                  <div className={styles.farmOwnerName15}>Farm owner name</div>
                  <div className={styles.farmLocation14}>Farm location</div>
                  <img
                    className={styles.component91121Child1}
                    alt=""
                    src="/group-54848.svg"
                  />
                  <img
                    className={styles.component91121Child2}
                    alt=""
                    src="/group-54869.svg"
                  />
                  <img
                    className={styles.component91121Child3}
                    alt=""
                    src="/group-54864.svg"
                  />
                  <div className={styles.iconAwesomePlayParent}>
                    <img
                      className={styles.iconAwesomePlay}
                      alt=""
                      src="/icon-awesomeplay.svg"
                    />
                    <img
                      className={styles.groupChild41}
                      alt=""
                      src="/group-54867.svg"
                    />
                    <div className={styles.div95}>0:25 / 3:17</div>
                  </div>
                  <div className={styles.farmName14}>Farm name</div>
                  <div className={styles.farmLocation15}>Farm location</div>
                  <img
                    className={styles.iconAwesomeChromecast}
                    alt=""
                    src="/icon-awesomechromecast.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
              </div>
            </div>
          </div>
          <img className={styles.image220Icon} alt="" src="/image-220@2x.png" />
          <div className={styles.trendingParent}>
            <div className={styles.joinUs}>Based on Your Interest</div>
            <div className={styles.scrollGroup121}>
              <div className={styles.component9176Parent}>
                <div
                  className={styles.component9176}
                  onClick={onComponent91216Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component1071}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.div24}>16/3/2023</div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/agriculture-image4@2x.png"
                  />
                  <div className={styles.parent}>
                    <div className={styles.div25}>{`80$ | 12 `}</div>
                    <div className={styles.price}>Price</div>
                    <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                  </div>
                  <div className={styles.div26}>+0.87 %</div>
                  <div className={styles.groupParent29}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild26} />
                    </div>
                    <div className={styles.m1}>255M$</div>
                    <div className={styles.averageRevenue}>Average revenue</div>
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.yield}>Yield</div>
                  <div className={styles.component9176Item} />
                  <div className={styles.addToCart}>
                    <div className={styles.addToCartChild} />
                    <img
                      className={styles.iconlylightOutlinebuy}
                      alt=""
                      src="/iconlylightoutlinebuy.svg"
                    />
                    <div className={styles.addToCart1}>Add to cart</div>
                  </div>
                  <div className={styles.buyNow}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.buyNow1}>Buy Now</div>
                  </div>
                  <div className={styles.component9176Inner} />
                  <div className={styles.lineDiv} />
                  <img
                    className={styles.component9176Child1}
                    alt=""
                    src="/group-54810.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component9176}
                  onClick={onComponent91218Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component1071}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.div24}>16/3/2023</div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/agriculture-image2@2x.png"
                  />
                  <div className={styles.parent}>
                    <div className={styles.div25}>{`80$ | 12 `}</div>
                    <div className={styles.price}>Price</div>
                    <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                  </div>
                  <div className={styles.div26}>+0.87 %</div>
                  <div className={styles.groupParent29}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild26} />
                    </div>
                    <div className={styles.m1}>255M$</div>
                    <div className={styles.averageRevenue}>Average revenue</div>
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.yield}>Yield</div>
                  <div className={styles.component9176Item} />
                  <div className={styles.addToCart}>
                    <div className={styles.addToCartChild} />
                    <img
                      className={styles.iconlylightOutlinebuy}
                      alt=""
                      src="/iconlylightoutlinebuy.svg"
                    />
                    <div className={styles.addToCart1}>Add to cart</div>
                  </div>
                  <div className={styles.buyNow}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.buyNow1}>Buy Now</div>
                  </div>
                  <div className={styles.component9176Inner} />
                  <div className={styles.lineDiv} />
                  <img
                    className={styles.component9176Child1}
                    alt=""
                    src="/group-54810.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component9176}
                  onClick={onComponent91217Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component1071}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.div24}>16/3/2023</div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/agriculture-image3@2x.png"
                  />
                  <div className={styles.parent}>
                    <div className={styles.div25}>{`80$ | 12 `}</div>
                    <div className={styles.price}>Price</div>
                    <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                  </div>
                  <div className={styles.div26}>+0.87 %</div>
                  <div className={styles.groupParent29}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild26} />
                    </div>
                    <div className={styles.m1}>255M$</div>
                    <div className={styles.averageRevenue}>Average revenue</div>
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.yield}>Yield</div>
                  <div className={styles.component9176Item} />
                  <div className={styles.addToCart}>
                    <div className={styles.addToCartChild} />
                    <img
                      className={styles.iconlylightOutlinebuy}
                      alt=""
                      src="/iconlylightoutlinebuy.svg"
                    />
                    <div className={styles.addToCart1}>Add to cart</div>
                  </div>
                  <div className={styles.buyNow}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.buyNow1}>Buy Now</div>
                  </div>
                  <div className={styles.component9176Inner} />
                  <div className={styles.lineDiv} />
                  <img
                    className={styles.component9176Child1}
                    alt=""
                    src="/group-54810.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component9176}
                  onClick={onComponent91215Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component1071}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.div24}>16/3/2023</div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/agriculture-image5@2x.png"
                  />
                  <div className={styles.parent}>
                    <div className={styles.div25}>{`80$ | 12 `}</div>
                    <div className={styles.price}>Price</div>
                    <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                  </div>
                  <div className={styles.div26}>+0.87 %</div>
                  <div className={styles.groupParent29}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild26} />
                    </div>
                    <div className={styles.m1}>255M$</div>
                    <div className={styles.averageRevenue}>Average revenue</div>
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.yield}>Yield</div>
                  <div className={styles.component9176Item} />
                  <div className={styles.addToCart}>
                    <div className={styles.addToCartChild} />
                    <img
                      className={styles.iconlylightOutlinebuy}
                      alt=""
                      src="/iconlylightoutlinebuy.svg"
                    />
                    <div className={styles.addToCart1}>Add to cart</div>
                  </div>
                  <div className={styles.buyNow}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.buyNow1}>Buy Now</div>
                  </div>
                  <div className={styles.component9176Inner} />
                  <div className={styles.lineDiv} />
                  <img
                    className={styles.component9176Child1}
                    alt=""
                    src="/group-54810.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component9176}
                  onClick={onComponent91219Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component1071}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.div24}>16/3/2023</div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/agriculture-image1@2x.png"
                  />
                  <div className={styles.parent}>
                    <div className={styles.div25}>{`80$ | 12 `}</div>
                    <div className={styles.price}>Price</div>
                    <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                  </div>
                  <div className={styles.div26}>+0.87 %</div>
                  <div className={styles.groupParent29}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild26} />
                    </div>
                    <div className={styles.m1}>255M$</div>
                    <div className={styles.averageRevenue}>Average revenue</div>
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.yield}>Yield</div>
                  <div className={styles.component9176Item} />
                  <div className={styles.addToCart}>
                    <div className={styles.addToCartChild} />
                    <img
                      className={styles.iconlylightOutlinebuy}
                      alt=""
                      src="/iconlylightoutlinebuy.svg"
                    />
                    <div className={styles.addToCart1}>Add to cart</div>
                  </div>
                  <div className={styles.buyNow}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.buyNow1}>Buy Now</div>
                  </div>
                  <div className={styles.component9176Inner} />
                  <div className={styles.lineDiv} />
                  <img
                    className={styles.component9176Child1}
                    alt=""
                    src="/group-54810.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component9176}
                  onClick={onComponent91220Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component1071}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.div24}>16/3/2023</div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/agriculture-image@2x.png"
                  />
                  <div className={styles.parent}>
                    <div className={styles.div25}>{`80$ | 12 `}</div>
                    <div className={styles.price}>Price</div>
                    <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                  </div>
                  <div className={styles.div26}>+0.87 %</div>
                  <div className={styles.groupParent29}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild26} />
                    </div>
                    <div className={styles.m1}>255M$</div>
                    <div className={styles.averageRevenue}>Average revenue</div>
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.yield}>Yield</div>
                  <div className={styles.component9176Item} />
                  <div className={styles.addToCart}>
                    <div className={styles.addToCartChild} />
                    <img
                      className={styles.iconlylightOutlinebuy}
                      alt=""
                      src="/iconlylightoutlinebuy.svg"
                    />
                    <div className={styles.addToCart1}>Add to cart</div>
                  </div>
                  <div className={styles.buyNow}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.buyNow1}>Buy Now</div>
                  </div>
                  <div className={styles.component9176Inner} />
                  <div className={styles.lineDiv} />
                  <img
                    className={styles.component9176Child1}
                    alt=""
                    src="/group-54810.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component9176}
                  onClick={onComponent91214Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component1071}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.div24}>16/3/2023</div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/agriculture-image@2x.png"
                  />
                  <div className={styles.parent}>
                    <div className={styles.div25}>{`80$ | 12 `}</div>
                    <div className={styles.price}>Price</div>
                    <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                  </div>
                  <div className={styles.div26}>+0.87 %</div>
                  <div className={styles.groupParent29}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild26} />
                    </div>
                    <div className={styles.m1}>255M$</div>
                    <div className={styles.averageRevenue}>Average revenue</div>
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.yield}>Yield</div>
                  <div className={styles.component9176Item} />
                  <div className={styles.addToCart}>
                    <div className={styles.addToCartChild} />
                    <img
                      className={styles.iconlylightOutlinebuy}
                      alt=""
                      src="/iconlylightoutlinebuy.svg"
                    />
                    <div className={styles.addToCart1}>Add to cart</div>
                  </div>
                  <div className={styles.buyNow}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.buyNow1}>Buy Now</div>
                  </div>
                  <div className={styles.component9176Inner} />
                  <div className={styles.lineDiv} />
                  <img
                    className={styles.component9176Child1}
                    alt=""
                    src="/group-54810.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
              </div>
            </div>
            <img
              className={styles.groupChild32}
              alt=""
              src="/group-54749.svg"
            />
          </div>
          <div className={styles.trendingParent}>
            <div className={styles.joinUs}>Recommended for you</div>
            <div className={styles.scrollGroup121}>
              <div className={styles.component9176Parent}>
                <div
                  className={styles.component9176}
                  onClick={onComponent91226Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component1071}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.div24}>16/3/2023</div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/agriculture-image1@2x.png"
                  />
                  <div className={styles.parent}>
                    <div className={styles.div25}>{`80$ | 12 `}</div>
                    <div className={styles.price}>Price</div>
                    <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                  </div>
                  <div className={styles.div26}>+0.87 %</div>
                  <div className={styles.groupParent29}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild26} />
                    </div>
                    <div className={styles.m1}>255M$</div>
                    <div className={styles.averageRevenue}>Average revenue</div>
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.yield}>Yield</div>
                  <div className={styles.component9176Item} />
                  <div className={styles.addToCart}>
                    <div className={styles.addToCartChild} />
                    <img
                      className={styles.iconlylightOutlinebuy}
                      alt=""
                      src="/iconlylightoutlinebuy.svg"
                    />
                    <div className={styles.addToCart1}>Add to cart</div>
                  </div>
                  <div className={styles.buyNow}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.buyNow1}>Buy Now</div>
                  </div>
                  <div className={styles.component9176Inner} />
                  <div className={styles.lineDiv} />
                  <img
                    className={styles.component9176Child1}
                    alt=""
                    src="/group-54810.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component9176}
                  onClick={onComponent91227Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component1071}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.div24}>16/3/2023</div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/agriculture-image@2x.png"
                  />
                  <div className={styles.parent}>
                    <div className={styles.div25}>{`80$ | 12 `}</div>
                    <div className={styles.price}>Price</div>
                    <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                  </div>
                  <div className={styles.div26}>+0.87 %</div>
                  <div className={styles.groupParent29}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild26} />
                    </div>
                    <div className={styles.m1}>255M$</div>
                    <div className={styles.averageRevenue}>Average revenue</div>
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.yield}>Yield</div>
                  <div className={styles.component9176Item} />
                  <div className={styles.addToCart}>
                    <div className={styles.addToCartChild} />
                    <img
                      className={styles.iconlylightOutlinebuy}
                      alt=""
                      src="/iconlylightoutlinebuy.svg"
                    />
                    <div className={styles.addToCart1}>Add to cart</div>
                  </div>
                  <div className={styles.buyNow}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.buyNow1}>Buy Now</div>
                  </div>
                  <div className={styles.component9176Inner} />
                  <div className={styles.lineDiv} />
                  <img
                    className={styles.component9176Child1}
                    alt=""
                    src="/group-54810.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component9176}
                  onClick={onComponent91223Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component1071}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.div24}>16/3/2023</div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/agriculture-image4@2x.png"
                  />
                  <div className={styles.parent}>
                    <div className={styles.div25}>{`80$ | 12 `}</div>
                    <div className={styles.price}>Price</div>
                    <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                  </div>
                  <div className={styles.div26}>+0.87 %</div>
                  <div className={styles.groupParent29}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild26} />
                    </div>
                    <div className={styles.m1}>255M$</div>
                    <div className={styles.averageRevenue}>Average revenue</div>
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.yield}>Yield</div>
                  <div className={styles.component9176Item} />
                  <div className={styles.addToCart}>
                    <div className={styles.addToCartChild} />
                    <img
                      className={styles.iconlylightOutlinebuy}
                      alt=""
                      src="/iconlylightoutlinebuy.svg"
                    />
                    <div className={styles.addToCart1}>Add to cart</div>
                  </div>
                  <div className={styles.buyNow}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.buyNow1}>Buy Now</div>
                  </div>
                  <div className={styles.component9176Inner} />
                  <div className={styles.lineDiv} />
                  <img
                    className={styles.component9176Child1}
                    alt=""
                    src="/group-54810.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component9176}
                  onClick={onComponent91225Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component1071}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.div24}>16/3/2023</div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/agriculture-image2@2x.png"
                  />
                  <div className={styles.parent}>
                    <div className={styles.div25}>{`80$ | 12 `}</div>
                    <div className={styles.price}>Price</div>
                    <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                  </div>
                  <div className={styles.div26}>+0.87 %</div>
                  <div className={styles.groupParent29}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild26} />
                    </div>
                    <div className={styles.m1}>255M$</div>
                    <div className={styles.averageRevenue}>Average revenue</div>
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.yield}>Yield</div>
                  <div className={styles.component9176Item} />
                  <div className={styles.addToCart}>
                    <div className={styles.addToCartChild} />
                    <img
                      className={styles.iconlylightOutlinebuy}
                      alt=""
                      src="/iconlylightoutlinebuy.svg"
                    />
                    <div className={styles.addToCart1}>Add to cart</div>
                  </div>
                  <div className={styles.buyNow}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.buyNow1}>Buy Now</div>
                  </div>
                  <div className={styles.component9176Inner} />
                  <div className={styles.lineDiv} />
                  <img
                    className={styles.component9176Child1}
                    alt=""
                    src="/group-54810.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component9176}
                  onClick={onComponent91224Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component1071}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.div24}>16/3/2023</div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/agriculture-image3@2x.png"
                  />
                  <div className={styles.parent}>
                    <div className={styles.div25}>{`80$ | 12 `}</div>
                    <div className={styles.price}>Price</div>
                    <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                  </div>
                  <div className={styles.div26}>+0.87 %</div>
                  <div className={styles.groupParent29}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild26} />
                    </div>
                    <div className={styles.m1}>255M$</div>
                    <div className={styles.averageRevenue}>Average revenue</div>
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.yield}>Yield</div>
                  <div className={styles.component9176Item} />
                  <div className={styles.addToCart}>
                    <div className={styles.addToCartChild} />
                    <img
                      className={styles.iconlylightOutlinebuy}
                      alt=""
                      src="/iconlylightoutlinebuy.svg"
                    />
                    <div className={styles.addToCart1}>Add to cart</div>
                  </div>
                  <div className={styles.buyNow}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.buyNow1}>Buy Now</div>
                  </div>
                  <div className={styles.component9176Inner} />
                  <div className={styles.lineDiv} />
                  <img
                    className={styles.component9176Child1}
                    alt=""
                    src="/group-54810.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component9176}
                  onClick={onComponent91222Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component1071}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.div24}>16/3/2023</div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/agriculture-image5@2x.png"
                  />
                  <div className={styles.parent}>
                    <div className={styles.div25}>{`80$ | 12 `}</div>
                    <div className={styles.price}>Price</div>
                    <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                  </div>
                  <div className={styles.div26}>+0.87 %</div>
                  <div className={styles.groupParent29}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild26} />
                    </div>
                    <div className={styles.m1}>255M$</div>
                    <div className={styles.averageRevenue}>Average revenue</div>
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.yield}>Yield</div>
                  <div className={styles.component9176Item} />
                  <div className={styles.addToCart}>
                    <div className={styles.addToCartChild} />
                    <img
                      className={styles.iconlylightOutlinebuy}
                      alt=""
                      src="/iconlylightoutlinebuy.svg"
                    />
                    <div className={styles.addToCart1}>Add to cart</div>
                  </div>
                  <div className={styles.buyNow}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.buyNow1}>Buy Now</div>
                  </div>
                  <div className={styles.component9176Inner} />
                  <div className={styles.lineDiv} />
                  <img
                    className={styles.component9176Child1}
                    alt=""
                    src="/group-54810.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component9176}
                  onClick={onComponent91221Click}
                >
                  <div className={styles.component951Child} />
                  <div className={styles.component1071}>
                    <div className={styles.farmOwnerName}>Farm owner name</div>
                  </div>
                  <div className={styles.div24}>16/3/2023</div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/agriculture-image@2x.png"
                  />
                  <div className={styles.parent}>
                    <div className={styles.div25}>{`80$ | 12 `}</div>
                    <div className={styles.price}>Price</div>
                    <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                  </div>
                  <div className={styles.div26}>+0.87 %</div>
                  <div className={styles.groupParent29}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild26} />
                    </div>
                    <div className={styles.m1}>255M$</div>
                    <div className={styles.averageRevenue}>Average revenue</div>
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.yield}>Yield</div>
                  <div className={styles.component9176Item} />
                  <div className={styles.addToCart}>
                    <div className={styles.addToCartChild} />
                    <img
                      className={styles.iconlylightOutlinebuy}
                      alt=""
                      src="/iconlylightoutlinebuy.svg"
                    />
                    <div className={styles.addToCart1}>Add to cart</div>
                  </div>
                  <div className={styles.buyNow}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.buyNow1}>Buy Now</div>
                  </div>
                  <div className={styles.component9176Inner} />
                  <div className={styles.lineDiv} />
                  <img
                    className={styles.component9176Child1}
                    alt=""
                    src="/group-54810.svg"
                  />
                  <img
                    className={styles.component941}
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
              </div>
            </div>
            <img
              className={styles.groupChild32}
              alt=""
              src="/group-54749.svg"
            />
          </div>
          <div className={styles.scrollGroup15Parent}>
            <div className={styles.scrollGroup15}>
              <div className={styles.component91105Parent}>
                <div
                  className={styles.component91121}
                  onClick={onComponent91105Click}
                >
                  <div className={styles.component951Child} />
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.component9176Item} />
                  <div className={styles.buyNow56}>
                    <div className={styles.buyNowChild26} />
                    <div className={styles.readMore}>Read More</div>
                  </div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/mask-group-197@2x.png"
                  />
                  <div className={styles.component91105Inner} />
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
                    className={styles.component941}
                    alt=""
                    src="/component-94--1.svg"
                  />
                  <div className={styles.component91105Child1} />
                  <img
                    className={styles.component91105Child2}
                    alt=""
                    src="/group-54848.svg"
                  />
                  <div className={styles.component91121Inner} />
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component91121}
                  onClick={onComponent91112Click}
                >
                  <div className={styles.component951Child} />
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.component9176Item} />
                  <div className={styles.buyNow56}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.readMore}>Read More</div>
                  </div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/mask-group-1971@2x.png"
                  />
                  <div className={styles.component91105Inner} />
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
                    className={styles.component941}
                    alt=""
                    src="/component-94--1.svg"
                  />
                  <div className={styles.component91105Child1} />
                  <img
                    className={styles.component91105Child2}
                    alt=""
                    src="/group-54848.svg"
                  />
                  <div className={styles.component91121Inner} />
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component91121}
                  onClick={onComponent91111Click}
                >
                  <div className={styles.component951Child} />
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.component9176Item} />
                  <div className={styles.buyNow56}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.readMore}>Read More</div>
                  </div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/mask-group-1972@2x.png"
                  />
                  <div className={styles.component91105Inner} />
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
                    className={styles.component941}
                    alt=""
                    src="/component-94--1.svg"
                  />
                  <div className={styles.component91105Child1} />
                  <img
                    className={styles.component91105Child2}
                    alt=""
                    src="/group-54848.svg"
                  />
                  <div className={styles.component91121Inner} />
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component91121}
                  onClick={onComponent91228Click}
                >
                  <div className={styles.component951Child} />
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.component9176Item} />
                  <div className={styles.buyNow56}>
                    <div className={styles.buyNowChild26} />
                    <div className={styles.readMore}>Read More</div>
                  </div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/mask-group-1973@2x.png"
                  />
                  <div className={styles.component91105Inner} />
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
                    className={styles.component941}
                    alt=""
                    src="/component-94--1.svg"
                  />
                  <div className={styles.component91105Child1} />
                  <img
                    className={styles.component91105Child2}
                    alt=""
                    src="/group-54848.svg"
                  />
                  <div className={styles.component91121Inner} />
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div
                  className={styles.component91121}
                  onClick={onComponent91229Click}
                >
                  <div className={styles.component951Child} />
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <div className={styles.component9176Item} />
                  <div className={styles.buyNow56}>
                    <div className={styles.buyNowChild} />
                    <div className={styles.readMore}>Read More</div>
                  </div>
                  <img
                    className={styles.agricultureImageIcon}
                    alt=""
                    src="/mask-group-1974@2x.png"
                  />
                  <div className={styles.component91105Inner} />
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
                    className={styles.component941}
                    alt=""
                    src="/component-94--1.svg"
                  />
                  <div className={styles.component91105Child1} />
                  <img
                    className={styles.component91105Child2}
                    alt=""
                    src="/group-54848.svg"
                  />
                  <div className={styles.component91121Inner} />
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
                    <div className={styles.div27}>(1.8)</div>
                  </div>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
              </div>
            </div>
            <div className={styles.articles4}>Articles</div>
            <img
              className={styles.groupChild32}
              alt=""
              src="/group-54749.svg"
            />
          </div>
        </div>
        <img
          className={styles.newMarketPlaceItem}
          alt=""
          src="/group-54749.svg"
        />
        <div className={styles.component1031}>
          <div className={styles.component1031Child} />
          <div className={styles.filtersParent}>
            <div className={styles.filters}>Filters</div>
            <img className={styles.filterIcon} alt="" src="/filter.svg" />
          </div>
        </div>
        <div className={styles.navigationBar}>
          <div className={styles.navigationBarChild} />
          <img className={styles.logoIcon1} alt="" src="/logo1@2x.png" />
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
            <img className={styles.searchIcon} alt="" src="/search.svg" />
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
      {isStoriesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeStories}
        >
          <Stories onClose={closeStories} />
        </PortalPopup>
      )}
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

export default NewMarketPlace;
