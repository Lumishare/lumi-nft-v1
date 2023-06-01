import { useState, useCallback } from "react";
import ConnectWallet from "../components/ConnectWallet";
import PortalPopup from "../components/PortalPopup";
import SwapATokens from "../components/SwapATokens";
import SignUpModalStep1Choose from "../components/SignUpModalStep1Choose";
import { useNavigate } from "react-router-dom";
import styles from "./InvestorProfile.module.css";
const InvestorProfile = () => {
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

  const onInvestorProfileContainerClick = useCallback(() => {
    navigate("/mobile-app");
  }, [navigate]);

  const onComponent91243Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91242Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91241Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91240Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91239Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91238Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91237Click = useCallback(() => {
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
      <div
        className={styles.investorProfile}
        onClick={onInvestorProfileContainerClick}
      >
        <img
          className={styles.maskGroup194}
          alt=""
          src="/mask-group-194@2x.png"
        />
        <div className={styles.component906Parent}>
          <div className={styles.component906}>
            <div className={styles.component906Child} />
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
            <div className={styles.component906Item} />
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
          <img className={styles.groupChild} alt="" src="/ellipse-1999.svg" />
          <img className={styles.groupItem} alt="" src="/ellipse-1998.svg" />
          <img className={styles.groupInner} alt="" src="/ellipse-1997.svg" />
        </div>
        <div className={styles.investorName}>Investor Name</div>
        <div className={styles.investorProfileInner}>
          <div className={styles.path44461Parent}>
            <img
              className={styles.path44461Icon}
              alt=""
              src="/path-444613.svg"
            />
            <img
              className={styles.path44463Icon}
              alt=""
              src="/path-444633.svg"
            />
            <img
              className={styles.path44464Icon}
              alt=""
              src="/path-444643.svg"
            />
            <img
              className={styles.path44465Icon}
              alt=""
              src="/path-444653.svg"
            />
            <b className={styles.b}>1</b>
          </div>
        </div>
        <div className={styles.starIconParent}>
          <img className={styles.starIcon} alt="" src="/star-icon2.svg" />
          <img
            className={styles.iconAwesomeStar}
            alt=""
            src="/star-icon2.svg"
          />
          <img
            className={styles.iconAwesomeStar1}
            alt=""
            src="/star-icon2.svg"
          />
          <img
            className={styles.iconAwesomeStar2}
            alt=""
            src="/star-icon2.svg"
          />
          <img
            className={styles.iconAwesomeStar3}
            alt=""
            src="/star-icon2.svg"
          />
          <div className={styles.div}>(1.8)</div>
        </div>
        <div className={styles.component10825Parent}>
          <img
            className={styles.component10820}
            alt=""
            src="/component-108--25.svg"
          />
          <img
            className={styles.component10820}
            alt=""
            src="/component-108--24.svg"
          />
          <img
            className={styles.component10820}
            alt=""
            src="/component-108--23.svg"
          />
          <img
            className={styles.component10820}
            alt=""
            src="/component-108--22.svg"
          />
          <img
            className={styles.component10820}
            alt=""
            src="/component-108--21.svg"
          />
        </div>
        <div className={styles.followersParent}>
          <div className={styles.followers}>Followers</div>
          <div className={styles.following}>Following</div>
          <div className={styles.posts}>Posts</div>
          <div className={styles.mWrapper}>
            <div className={styles.m}>5.6M</div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.m}>152</div>
          </div>
          <div className={styles.container}>
            <div className={styles.m}>1,529</div>
          </div>
        </div>
        <div
          className={styles.descriptionLoremIpsum}
        >{`Description Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. `}</div>
        <div className={styles.component1052}>
          <div className={styles.component1052Child} />
          <div className={styles.followWrapper}>
            <div className={styles.follow}>Follow</div>
          </div>
        </div>
        <div className={styles.sendAMessageWrapper}>
          <div className={styles.sendAMessage}>Send a Message</div>
        </div>
        <img
          className={styles.investorProfileChild}
          alt=""
          src="/group-55000.svg"
        />
        <div className={styles.investmentHistoryParent}>
          <div className={styles.joinUs}>Investment History</div>
          <div className={styles.scrollGroup22}>
            <div className={styles.component91243Parent}>
              <div
                className={styles.component91243}
                onClick={onComponent91243Click}
              >
                <div className={styles.component91243Child} />
                <div className={styles.component1071}>
                  <div className={styles.farmOwnerName}>Farm owner name</div>
                </div>
                <div className={styles.div3}>16/3/2023</div>
                <img
                  className={styles.agricultureImageIcon}
                  alt=""
                  src="/agriculture-image@2x.png"
                />
                <div className={styles.parent}>
                  <div className={styles.div4}>{`80$ | 12 `}</div>
                  <div className={styles.price}>Price</div>
                  <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                </div>
                <div className={styles.div5}>+0.87 %</div>
                <div className={styles.groupParent}>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.rectangleDiv} />
                  </div>
                  <div className={styles.m1}>255M$</div>
                  <div className={styles.averageRevenue}>Average revenue</div>
                </div>
                <div className={styles.starIconGroup}>
                  <img
                    className={styles.starIcon1}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar4}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar5}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar6}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar7}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div className={styles.div}>(1.8)</div>
                </div>
                <div className={styles.yield}>Yield</div>
                <div className={styles.component91243Item} />
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
                <div className={styles.component91243Inner} />
                <div className={styles.lineDiv} />
                <img
                  className={styles.groupIcon}
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
                <div className={styles.starIconContainer}>
                  <img
                    className={styles.starIcon1}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar4}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar5}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar6}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar7}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div className={styles.div}>(1.8)</div>
                </div>
                <img className={styles.shareIcon} alt="" src="/share.svg" />
              </div>
              <div
                className={styles.component91243}
                onClick={onComponent91242Click}
              >
                <div className={styles.component91243Child} />
                <div className={styles.component1071}>
                  <div className={styles.farmOwnerName}>Farm owner name</div>
                </div>
                <div className={styles.div3}>16/3/2023</div>
                <img
                  className={styles.agricultureImageIcon}
                  alt=""
                  src="/agriculture-image1@2x.png"
                />
                <div className={styles.parent}>
                  <div className={styles.div4}>{`80$ | 12 `}</div>
                  <div className={styles.price}>Price</div>
                  <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                </div>
                <div className={styles.div5}>+0.87 %</div>
                <div className={styles.groupParent}>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.rectangleDiv} />
                  </div>
                  <div className={styles.m1}>255M$</div>
                  <div className={styles.averageRevenue}>Average revenue</div>
                </div>
                <div className={styles.starIconGroup}>
                  <img
                    className={styles.starIcon1}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar4}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar5}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar6}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar7}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div className={styles.div}>(1.8)</div>
                </div>
                <div className={styles.yield}>Yield</div>
                <div className={styles.component91243Item} />
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
                <div className={styles.component91243Inner} />
                <div className={styles.lineDiv} />
                <img
                  className={styles.groupIcon}
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
                <div className={styles.starIconContainer}>
                  <img
                    className={styles.starIcon1}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar4}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar5}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar6}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar7}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div className={styles.div}>(1.8)</div>
                </div>
                <img className={styles.shareIcon} alt="" src="/share.svg" />
              </div>
              <div
                className={styles.component91243}
                onClick={onComponent91241Click}
              >
                <div className={styles.component91243Child} />
                <div className={styles.component1071}>
                  <div className={styles.farmOwnerName}>Farm owner name</div>
                </div>
                <div className={styles.div3}>16/3/2023</div>
                <img
                  className={styles.agricultureImageIcon}
                  alt=""
                  src="/agriculture-image2@2x.png"
                />
                <div className={styles.parent}>
                  <div className={styles.div4}>{`80$ | 12 `}</div>
                  <div className={styles.price}>Price</div>
                  <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                </div>
                <div className={styles.div5}>+0.87 %</div>
                <div className={styles.groupParent}>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.rectangleDiv} />
                  </div>
                  <div className={styles.m1}>255M$</div>
                  <div className={styles.averageRevenue}>Average revenue</div>
                </div>
                <div className={styles.starIconGroup}>
                  <img
                    className={styles.starIcon1}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar4}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar5}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar6}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar7}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div className={styles.div}>(1.8)</div>
                </div>
                <div className={styles.yield}>Yield</div>
                <div className={styles.component91243Item} />
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
                <div className={styles.component91243Inner} />
                <div className={styles.lineDiv} />
                <img
                  className={styles.groupIcon}
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
                <div className={styles.starIconContainer}>
                  <img
                    className={styles.starIcon1}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar4}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar5}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar6}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar7}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div className={styles.div}>(1.8)</div>
                </div>
                <img className={styles.shareIcon} alt="" src="/share.svg" />
              </div>
              <div
                className={styles.component91243}
                onClick={onComponent91240Click}
              >
                <div className={styles.component91243Child} />
                <div className={styles.component1071}>
                  <div className={styles.farmOwnerName}>Farm owner name</div>
                </div>
                <div className={styles.div3}>16/3/2023</div>
                <img
                  className={styles.agricultureImageIcon}
                  alt=""
                  src="/agriculture-image3@2x.png"
                />
                <div className={styles.parent}>
                  <div className={styles.div4}>{`80$ | 12 `}</div>
                  <div className={styles.price}>Price</div>
                  <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                </div>
                <div className={styles.div5}>+0.87 %</div>
                <div className={styles.groupParent}>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.rectangleDiv} />
                  </div>
                  <div className={styles.m1}>255M$</div>
                  <div className={styles.averageRevenue}>Average revenue</div>
                </div>
                <div className={styles.starIconGroup}>
                  <img
                    className={styles.starIcon1}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar4}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar5}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar6}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar7}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div className={styles.div}>(1.8)</div>
                </div>
                <div className={styles.yield}>Yield</div>
                <div className={styles.component91243Item} />
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
                <div className={styles.component91243Inner} />
                <div className={styles.lineDiv} />
                <img
                  className={styles.groupIcon}
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
                <div className={styles.starIconContainer}>
                  <img
                    className={styles.starIcon1}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar4}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar5}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar6}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar7}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div className={styles.div}>(1.8)</div>
                </div>
                <img className={styles.shareIcon} alt="" src="/share.svg" />
              </div>
              <div
                className={styles.component91243}
                onClick={onComponent91239Click}
              >
                <div className={styles.component91243Child} />
                <div className={styles.component1071}>
                  <div className={styles.farmOwnerName}>Farm owner name</div>
                </div>
                <div className={styles.div3}>16/3/2023</div>
                <img
                  className={styles.agricultureImageIcon}
                  alt=""
                  src="/agriculture-image4@2x.png"
                />
                <div className={styles.parent}>
                  <div className={styles.div4}>{`80$ | 12 `}</div>
                  <div className={styles.price}>Price</div>
                  <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                </div>
                <div className={styles.div5}>+0.87 %</div>
                <div className={styles.groupParent}>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.rectangleDiv} />
                  </div>
                  <div className={styles.m1}>255M$</div>
                  <div className={styles.averageRevenue}>Average revenue</div>
                </div>
                <div className={styles.starIconGroup}>
                  <img
                    className={styles.starIcon1}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar4}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar5}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar6}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar7}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div className={styles.div}>(1.8)</div>
                </div>
                <div className={styles.yield}>Yield</div>
                <div className={styles.component91243Item} />
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
                <div className={styles.component91243Inner} />
                <div className={styles.lineDiv} />
                <img
                  className={styles.groupIcon}
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
                <div className={styles.starIconContainer}>
                  <img
                    className={styles.starIcon1}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar4}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar5}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar6}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar7}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div className={styles.div}>(1.8)</div>
                </div>
                <img className={styles.shareIcon} alt="" src="/share.svg" />
              </div>
              <div
                className={styles.component91243}
                onClick={onComponent91238Click}
              >
                <div className={styles.component91243Child} />
                <div className={styles.component1071}>
                  <div className={styles.farmOwnerName}>Farm owner name</div>
                </div>
                <div className={styles.div3}>16/3/2023</div>
                <img
                  className={styles.agricultureImageIcon}
                  alt=""
                  src="/agriculture-image5@2x.png"
                />
                <div className={styles.parent}>
                  <div className={styles.div4}>{`80$ | 12 `}</div>
                  <div className={styles.price}>Price</div>
                  <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                </div>
                <div className={styles.div5}>+0.87 %</div>
                <div className={styles.groupParent}>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.rectangleDiv} />
                  </div>
                  <div className={styles.m1}>255M$</div>
                  <div className={styles.averageRevenue}>Average revenue</div>
                </div>
                <div className={styles.starIconGroup}>
                  <img
                    className={styles.starIcon1}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar4}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar5}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar6}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar7}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div className={styles.div}>(1.8)</div>
                </div>
                <div className={styles.yield}>Yield</div>
                <div className={styles.component91243Item} />
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
                <div className={styles.component91243Inner} />
                <div className={styles.lineDiv} />
                <img
                  className={styles.groupIcon}
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
                <div className={styles.starIconContainer}>
                  <img
                    className={styles.starIcon1}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar4}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar5}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar6}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar7}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div className={styles.div}>(1.8)</div>
                </div>
                <img className={styles.shareIcon} alt="" src="/share.svg" />
              </div>
              <div
                className={styles.component91243}
                onClick={onComponent91237Click}
              >
                <div className={styles.component91243Child} />
                <div className={styles.component1071}>
                  <div className={styles.farmOwnerName}>Farm owner name</div>
                </div>
                <div className={styles.div3}>16/3/2023</div>
                <img
                  className={styles.agricultureImageIcon}
                  alt=""
                  src="/agriculture-image@2x.png"
                />
                <div className={styles.parent}>
                  <div className={styles.div4}>{`80$ | 12 `}</div>
                  <div className={styles.price}>Price</div>
                  <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                </div>
                <div className={styles.div5}>+0.87 %</div>
                <div className={styles.groupParent}>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.rectangleDiv} />
                  </div>
                  <div className={styles.m1}>255M$</div>
                  <div className={styles.averageRevenue}>Average revenue</div>
                </div>
                <div className={styles.starIconGroup}>
                  <img
                    className={styles.starIcon1}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar4}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar5}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar6}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar7}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div className={styles.div}>(1.8)</div>
                </div>
                <div className={styles.yield}>Yield</div>
                <div className={styles.component91243Item} />
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
                <div className={styles.component91243Inner} />
                <div className={styles.lineDiv} />
                <img
                  className={styles.groupIcon}
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
                <div className={styles.starIconContainer}>
                  <img
                    className={styles.starIcon1}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar4}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar5}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar6}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={styles.iconAwesomeStar7}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div className={styles.div}>(1.8)</div>
                </div>
                <img className={styles.shareIcon} alt="" src="/share.svg" />
              </div>
            </div>
          </div>
          <img className={styles.groupChild7} alt="" src="/group-54749.svg" />
        </div>
        <div className={styles.energyIProduceParent}>
          <div className={styles.joinUs}>Energy I produce</div>
          <div className={styles.electricityProducedCharts}>
            <div className={styles.groupParent6}>
              <div className={styles.groupParent7}>
                <div className={styles.dailyOutputParent}>
                  <div className={styles.followers}>Daily output:</div>
                  <div className={styles.kwh}>54.09 kWh</div>
                </div>
                <div className={styles.monthlyOutputParent}>
                  <div className={styles.followers}>Monthly output:</div>
                  <div className={styles.kwh}>4,786.21 kWh</div>
                </div>
                <div className={styles.totalOutputParent}>
                  <div className={styles.followers}>Total output:</div>
                  <div className={styles.kwh}>1,221.75 MWh</div>
                </div>
                <div className={styles.co2AvoidanceParent}>
                  <div className={styles.followers}>
                    <span>CO</span>
                    <span className={styles.span}>2</span>
                    <span> avoidance</span>
                  </div>
                  <div className={styles.kwh}>684.58 t</div>
                </div>
              </div>
              <div className={styles.lineChart0Wrapper}>
                <div className={styles.path44461Parent}>
                  <div className={styles.groupParent8}>
                    <div className={styles.groupWrapper}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.groupChild8} />
                        <div className={styles.groupChild9} />
                        <div className={styles.groupChild10} />
                      </div>
                    </div>
                    <div className={styles.groupParent9}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild11} />
                        <div className={styles.groupChild10} />
                      </div>
                      <div className={styles.groupChild13} />
                    </div>
                    <div className={styles.rectangleParent1}>
                      <div className={styles.groupChild14} />
                      <div className={styles.rectangleParent2}>
                        <div className={styles.groupChild8} />
                        <div className={styles.groupChild16} />
                      </div>
                    </div>
                    <div className={styles.groupParent9}>
                      <div className={styles.groupChild17} />
                      <div className={styles.groupChild18} />
                      <div className={styles.groupChild19} />
                    </div>
                    <div className={styles.groupWrapper}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.groupChild8} />
                        <div className={styles.groupChild9} />
                        <div className={styles.groupChild10} />
                      </div>
                    </div>
                    <div className={styles.rectangleParent5}>
                      <div className={styles.groupChild23} />
                      <div className={styles.rectangleParent6}>
                        <div className={styles.groupChild8} />
                        <div className={styles.groupChild25} />
                      </div>
                    </div>
                    <div className={styles.rectangleParent1}>
                      <div className={styles.groupChild14} />
                      <div className={styles.rectangleParent2}>
                        <div className={styles.groupChild8} />
                        <div className={styles.groupChild16} />
                      </div>
                    </div>
                    <div className={styles.groupParent9}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild11} />
                        <div className={styles.groupChild10} />
                      </div>
                      <div className={styles.groupChild13} />
                    </div>
                    <div className={styles.rectangleParent10}>
                      <div className={styles.groupChild32} />
                      <div className={styles.rectangleParent11}>
                        <div className={styles.groupChild33} />
                        <div className={styles.groupChild34} />
                      </div>
                    </div>
                    <div className={styles.groupParent11}>
                      <div className={styles.rectangleParent12}>
                        <div className={styles.groupChild35} />
                        <div className={styles.groupChild36} />
                      </div>
                      <div className={styles.groupChild13} />
                    </div>
                    <div className={styles.groupParent12}>
                      <div className={styles.rectangleParent13}>
                        <div className={styles.groupChild38} />
                        <div className={styles.groupChild10} />
                      </div>
                      <div className={styles.groupChild13} />
                    </div>
                    <div className={styles.rectangleParent1}>
                      <div className={styles.groupChild14} />
                      <div className={styles.rectangleParent2}>
                        <div className={styles.groupChild8} />
                        <div className={styles.groupChild16} />
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.xAxisLine}
                    alt=""
                    src="/x-axis-line.svg"
                  />
                  <div className={styles.kwh2}>0kWh</div>
                  <div className={styles.kwh3}>100kWh</div>
                  <div className={styles.kwh4}>200kWh</div>
                  <div className={styles.kwh5}>300kWh</div>
                  <div className={styles.kwh6}>400kWh</div>
                  <div className={styles.kwh7}>500kWh</div>
                  <div className={styles.kwh8}>600kWh</div>
                  <div className={styles.parent6}>
                    <div className={styles.stories}>10:00</div>
                    <div className={styles.stories}>11:00</div>
                    <div className={styles.stories}>12:00</div>
                    <div className={styles.stories}>13:00</div>
                    <div className={styles.stories}>14:00</div>
                    <div className={styles.stories}>15:00</div>
                    <div className={styles.div44}>16:00</div>
                    <div className={styles.div44}>17:00</div>
                    <div className={styles.stories}>18:00</div>
                    <div className={styles.stories}>19:00</div>
                    <div className={styles.stories}>20:00</div>
                    <div className={styles.stories}>21:00</div>
                  </div>
                </div>
              </div>
              <div className={styles.groupParent13}>
                <div className={styles.rectangleParent16}>
                  <div className={styles.groupChild44} />
                  <div className={styles.pvSystem93}>PV System 93 kWh</div>
                </div>
                <div className={styles.rectangleParent17}>
                  <div className={styles.groupChild45} />
                  <div className={styles.pvSystem93}>PV System 93 kWh</div>
                </div>
                <div className={styles.rectangleParent18}>
                  <div className={styles.groupChild46} />
                  <div className={styles.pvSystem93}>PV System 93 kWh</div>
                </div>
              </div>
            </div>
            <div className={styles.lineParent}>
              <div className={styles.groupChild47} />
              <div className={styles.live}>Live</div>
              <div className={styles.monthly}>Monthly</div>
              <div className={styles.yearly}>Yearly</div>
              <div className={styles.groupChild48} />
            </div>
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

export default InvestorProfile;
