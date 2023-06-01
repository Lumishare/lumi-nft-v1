import { useState, useCallback } from "react";
import ConnectWallet from "../components/ConnectWallet";
import PortalPopup from "../components/PortalPopup";
import SwapATokens from "../components/SwapATokens";
import SignUpModalStep1Choose from "../components/SignUpModalStep1Choose";
import { useNavigate } from "react-router-dom";
import styles from "./LeaderBoard.module.css";
const LeaderBoard = () => {
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

  const onLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCartIconClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  const onLightningIconClick = useCallback(() => {
    navigate("/your-favorite");
  }, [navigate]);

  return (
    <>
      <div className={styles.leaderboard}>
        <div className={styles.leaderboardChild} />
        <div className={styles.leaderboard1}>LeaderBoard</div>
        <div className={styles.searchByNameParent}>
          <div className={styles.searchByName}>Search by name</div>
          <img className={styles.searchIcon} alt="" src="/search.svg" />
        </div>
        <div className={styles.lineParent}>
          <div className={styles.groupChild} />
          <div className={styles.lineGroup}>
            <div className={styles.groupItem} />
            <div className={styles.investors}>Investors</div>
            <div className={styles.creators}>Creators</div>
          </div>
        </div>
        <div className={styles.posParent}>
          <div className={styles.pos}>POS</div>
          <div className={styles.name}>Name</div>
          <div className={styles.lorem}>Lorem</div>
          <div className={styles.lorem1}>Lorem</div>
          <img className={styles.groupInner} alt="" src="/group-55165.svg" />
          <div className={styles.rate}>Rate</div>
          <div className={styles.lineDiv} />
        </div>
        <div className={styles.component907Parent}>
          <div className={styles.component907}>
            <div className={styles.component907Child} />
            <div className={styles.yourEmailAddressWrapper}>
              <div className={styles.yourEmailAddress}>Your email address</div>
            </div>
            <div className={styles.stayInThe}>Stay in the loop</div>
            <div className={styles.marketplaceParent}>
              <div className={styles.marketplace}>Marketplace</div>
              <div className={styles.storiesParent}>
                <div className={styles.stories}>Stories</div>
                <div className={styles.stories}>Top 10</div>
                <div className={styles.stories}>Trending</div>
                <div className={styles.stories}>Videos</div>
                <div className={styles.stories}>Based on Your Interest</div>
                <div className={styles.recommendedForYou}>
                  Recommended for you
                </div>
                <div className={styles.recommendedForYou}>Articles</div>
              </div>
            </div>
            <div className={styles.linksParent}>
              <div className={styles.marketplace}>Links</div>
              <div className={styles.storiesParent}>
                <div className={styles.stories}>Stories</div>
                <div className={styles.stories}>Top 10</div>
                <div className={styles.stories}>Trending</div>
                <div className={styles.stories}>Videos</div>
                <div className={styles.stories}>Based on Your Interest</div>
                <div className={styles.recommendedForYou}>
                  Recommended for you
                </div>
                <div className={styles.recommendedForYou}>Articles</div>
              </div>
            </div>
            <div className={styles.joinUsParent}>
              <div className={styles.joinUs}>Join us</div>
              <div className={styles.storiesParent}>
                <div className={styles.stories}>Stories</div>
                <div className={styles.stories}>Top 10</div>
                <div className={styles.stories}>Trending</div>
                <div className={styles.stories}>Videos</div>
                <div className={styles.stories}>Based on Your Interest</div>
                <div className={styles.recommendedForYou}>
                  Recommended for you
                </div>
                <div className={styles.recommendedForYou}>Articles</div>
              </div>
            </div>
            <div className={styles.marketplaceGroup}>
              <div className={styles.marketplace}>Marketplace</div>
              <div className={styles.storiesParent}>
                <div className={styles.stories}>Stories</div>
                <div className={styles.stories}>Top 10</div>
                <div className={styles.stories}>Trending</div>
                <div className={styles.stories}>Videos</div>
                <div className={styles.stories}>Based on Your Interest</div>
                <div className={styles.recommendedForYou}>
                  Recommended for you
                </div>
                <div className={styles.recommendedForYou}>Articles</div>
              </div>
            </div>
            <div className={styles.joinTheCommunity}>Join the community</div>
            <div className={styles.joinOurMailing}>
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating LUMI.
            </div>
            <img className={styles.logoIcon} alt="" src="/logo2@2x.png" />
            <div className={styles.drivingFinancialOpportunitie}>
              Driving financial opportunities for billions of people in a
              trustworthy monetary framework.
            </div>
            <div className={styles.component907Item} />
            <img
              className={styles.maskGroup193}
              alt=""
              src="/mask-group-193.svg"
            />
            <div className={styles.component683}>
              <div className={styles.signUpWrapper}>
                <div className={styles.signUp}>sign up</div>
              </div>
            </div>
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
          <img className={styles.ellipseIcon} alt="" src="/ellipse-1999.svg" />
          <img className={styles.groupChild1} alt="" src="/ellipse-1998.svg" />
          <img className={styles.groupChild2} alt="" src="/ellipse-1997.svg" />
        </div>
        <div className={styles.component1351Parent}>
          <div className={styles.component1351}>
            <div className={styles.component1351Child} />
            <img
              className={styles.component1351Item}
              alt=""
              src="/group-54807.svg"
            />
            <div className={styles.div}>1</div>
            <div className={styles.investorName1}>Investor name 1</div>
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>1.5</div>
            <img
              className={styles.arrowDownwardIcon}
              alt=""
              src="/arrow-downward.svg"
            />
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group-54808.svg" />
              <div className={styles.div3}>(1.8)</div>
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
          </div>
          <div className={styles.component1351}>
            <div className={styles.component1351Child} />
            <img
              className={styles.component1351Item}
              alt=""
              src="/group-54807.svg"
            />
            <div className={styles.div}>2</div>
            <div className={styles.investorName1}>Investor name 1</div>
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>1.5</div>
            <img
              className={styles.arrowDownwardIcon}
              alt=""
              src="/arrow-downward.svg"
            />
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group-54808.svg" />
              <div className={styles.div3}>(1.8)</div>
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
          </div>
          <div className={styles.component1351}>
            <div className={styles.component1351Child} />
            <img
              className={styles.component1351Item}
              alt=""
              src="/group-54807.svg"
            />
            <div className={styles.div}>3</div>
            <div className={styles.investorName1}>Investor name 1</div>
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>1.5</div>
            <img
              className={styles.arrowDownwardIcon}
              alt=""
              src="/arrow-downward.svg"
            />
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group-54808.svg" />
              <div className={styles.div3}>(1.8)</div>
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
          </div>
          <div className={styles.component1351}>
            <div className={styles.component1351Child} />
            <img
              className={styles.component1351Item}
              alt=""
              src="/group-54807.svg"
            />
            <div className={styles.div}>4</div>
            <div className={styles.investorName1}>Investor name 1</div>
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>1.5</div>
            <img
              className={styles.arrowDownwardIcon}
              alt=""
              src="/arrow-downward.svg"
            />
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group-54808.svg" />
              <div className={styles.div3}>(1.8)</div>
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
          </div>
          <div className={styles.component1351}>
            <div className={styles.component1351Child} />
            <img
              className={styles.component1351Item}
              alt=""
              src="/group-54807.svg"
            />
            <div className={styles.div}>5</div>
            <div className={styles.investorName1}>Investor name 1</div>
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>1.5</div>
            <img
              className={styles.arrowDownwardIcon}
              alt=""
              src="/arrow-downward.svg"
            />
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group-54808.svg" />
              <div className={styles.div3}>(1.8)</div>
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
          </div>
          <div className={styles.component1351}>
            <div className={styles.component1351Child} />
            <img
              className={styles.component1351Item}
              alt=""
              src="/group-54807.svg"
            />
            <div className={styles.div}>6</div>
            <div className={styles.investorName1}>Investor name 1</div>
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>1.5</div>
            <img
              className={styles.arrowDownwardIcon}
              alt=""
              src="/arrow-downward.svg"
            />
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group-54808.svg" />
              <div className={styles.div3}>(1.8)</div>
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
          </div>
          <div className={styles.component1351}>
            <div className={styles.component1351Child} />
            <img
              className={styles.component1351Item}
              alt=""
              src="/group-54807.svg"
            />
            <div className={styles.div}>7</div>
            <div className={styles.investorName1}>Investor name 1</div>
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>1.5</div>
            <img
              className={styles.arrowDownwardIcon}
              alt=""
              src="/arrow-downward.svg"
            />
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group-54808.svg" />
              <div className={styles.div3}>(1.8)</div>
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
          </div>
          <div className={styles.component1351}>
            <div className={styles.component1351Child} />
            <img
              className={styles.component1351Item}
              alt=""
              src="/group-54807.svg"
            />
            <div className={styles.div}>8</div>
            <div className={styles.investorName1}>Investor name 1</div>
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>1.5</div>
            <img
              className={styles.arrowDownwardIcon}
              alt=""
              src="/arrow-downward.svg"
            />
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group-54808.svg" />
              <div className={styles.div3}>(1.8)</div>
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
          </div>
          <div className={styles.component1351}>
            <div className={styles.component1351Child} />
            <img
              className={styles.component1351Item}
              alt=""
              src="/group-54807.svg"
            />
            <div className={styles.div}>9</div>
            <div className={styles.investorName1}>Investor name 1</div>
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>1.5</div>
            <img
              className={styles.arrowDownwardIcon}
              alt=""
              src="/arrow-downward.svg"
            />
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group-54808.svg" />
              <div className={styles.div3}>(1.8)</div>
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
          </div>
          <div className={styles.component1351}>
            <div className={styles.component1351Child} />
            <img
              className={styles.component1351Item}
              alt=""
              src="/group-54807.svg"
            />
            <div className={styles.div36}>10</div>
            <div className={styles.investorName1}>Investor name 1</div>
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>1.5</div>
            <img
              className={styles.arrowDownwardIcon}
              alt=""
              src="/arrow-downward.svg"
            />
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group-54808.svg" />
              <div className={styles.div3}>(1.8)</div>
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
          </div>
        </div>
        <div className={styles.component13511Parent}>
          <div className={styles.component1351}>
            <div className={styles.component1351Child} />
            <img
              className={styles.component1351Item}
              alt=""
              src="/group-54807.svg"
            />
            <div className={styles.div40}>11</div>
            <div className={styles.investorName1}>Investor name 1</div>
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>1.5</div>
            <img
              className={styles.arrowDownwardIcon}
              alt=""
              src="/arrow-downward.svg"
            />
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group-54808.svg" />
              <div className={styles.div3}>(1.8)</div>
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
          </div>
          <div className={styles.component1351}>
            <div className={styles.component1351Child} />
            <img
              className={styles.component1351Item}
              alt=""
              src="/group-54807.svg"
            />
            <div className={styles.div36}>12</div>
            <div className={styles.investorName1}>Investor name 1</div>
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>1.5</div>
            <img
              className={styles.arrowDownwardIcon}
              alt=""
              src="/arrow-downward.svg"
            />
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group-54808.svg" />
              <div className={styles.div3}>(1.8)</div>
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
          </div>
          <div className={styles.component1351}>
            <div className={styles.component1351Child} />
            <img
              className={styles.component1351Item}
              alt=""
              src="/group-54807.svg"
            />
            <div className={styles.div36}>13</div>
            <div className={styles.investorName1}>Investor name 1</div>
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>1.5</div>
            <img
              className={styles.arrowDownwardIcon}
              alt=""
              src="/arrow-downward.svg"
            />
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group-54808.svg" />
              <div className={styles.div3}>(1.8)</div>
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
          </div>
          <div className={styles.component1351}>
            <div className={styles.component1351Child} />
            <img
              className={styles.component1351Item}
              alt=""
              src="/group-54807.svg"
            />
            <div className={styles.div36}>14</div>
            <div className={styles.investorName1}>Investor name 1</div>
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>1.5</div>
            <img
              className={styles.arrowDownwardIcon}
              alt=""
              src="/arrow-downward.svg"
            />
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group-54808.svg" />
              <div className={styles.div3}>(1.8)</div>
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
          </div>
          <div className={styles.component1351}>
            <div className={styles.component1351Child} />
            <img
              className={styles.component1351Item}
              alt=""
              src="/group-54807.svg"
            />
            <div className={styles.div36}>15</div>
            <div className={styles.investorName1}>Investor name 1</div>
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>1.5</div>
            <img
              className={styles.arrowDownwardIcon}
              alt=""
              src="/arrow-downward.svg"
            />
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group-54808.svg" />
              <div className={styles.div3}>(1.8)</div>
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
          </div>
          <div className={styles.component1351}>
            <div className={styles.component1351Child} />
            <img
              className={styles.component1351Item}
              alt=""
              src="/group-54807.svg"
            />
            <div className={styles.div36}>16</div>
            <div className={styles.investorName1}>Investor name 1</div>
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>1.5</div>
            <img
              className={styles.arrowDownwardIcon}
              alt=""
              src="/arrow-downward.svg"
            />
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group-54808.svg" />
              <div className={styles.div3}>(1.8)</div>
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
          </div>
          <div className={styles.component1351}>
            <div className={styles.component1351Child} />
            <img
              className={styles.component1351Item}
              alt=""
              src="/group-54807.svg"
            />
            <div className={styles.div36}>17</div>
            <div className={styles.investorName1}>Investor name 1</div>
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>1.5</div>
            <img
              className={styles.arrowDownwardIcon}
              alt=""
              src="/arrow-downward.svg"
            />
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group-54808.svg" />
              <div className={styles.div3}>(1.8)</div>
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
          </div>
          <div className={styles.component1351}>
            <div className={styles.component1351Child} />
            <img
              className={styles.component1351Item}
              alt=""
              src="/group-54807.svg"
            />
            <div className={styles.div36}>18</div>
            <div className={styles.investorName1}>Investor name 1</div>
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>1.5</div>
            <img
              className={styles.arrowDownwardIcon}
              alt=""
              src="/arrow-downward.svg"
            />
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group-54808.svg" />
              <div className={styles.div3}>(1.8)</div>
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
          </div>
          <div className={styles.component1351}>
            <div className={styles.component1351Child} />
            <img
              className={styles.component1351Item}
              alt=""
              src="/group-54807.svg"
            />
            <div className={styles.div36}>19</div>
            <div className={styles.investorName1}>Investor name 1</div>
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>1.5</div>
            <img
              className={styles.arrowDownwardIcon}
              alt=""
              src="/arrow-downward.svg"
            />
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group-54808.svg" />
              <div className={styles.div3}>(1.8)</div>
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
          </div>
          <div className={styles.component1351}>
            <div className={styles.component1351Child} />
            <img
              className={styles.component1351Item}
              alt=""
              src="/group-54807.svg"
            />
            <div className={styles.div36}>20</div>
            <div className={styles.investorName1}>Investor name 1</div>
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>1.5</div>
            <img
              className={styles.arrowDownwardIcon}
              alt=""
              src="/arrow-downward.svg"
            />
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group-54808.svg" />
              <div className={styles.div3}>(1.8)</div>
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
          </div>
        </div>
        <img className={styles.image220Icon} alt="" src="/image-220@2x.png" />
        <div className={styles.component1033}>
          <div className={styles.component1033Child} />
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
            src="/logo2@2x.png"
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
            <img className={styles.searchIcon1} alt="" src="/search1.svg" />
          </div>
          <div className={styles.leaderboardParent}>
            <div className={styles.login}>LeaderBoard</div>
            <div className={styles.swap} onClick={openSwapATokens}>
              Swap
            </div>
            <div className={styles.login}>Login</div>
            <div className={styles.swap} onClick={openSignUpModalStep1Choose}>
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

export default LeaderBoard;
