import { useState, useCallback } from "react";
import ConnectWallet from "../components/ConnectWallet";
import PortalPopup from "../components/PortalPopup";
import SwapATokens from "../components/SwapATokens";
import SignUpModalStep1Choose from "../components/SignUpModalStep1Choose";
import { useNavigate } from "react-router-dom";
import styles from "./CreatorProfile.module.css";
const CreatorProfile = () => {
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

  const onComponent91188Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91187Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91186Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91185Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91235Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91236Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91314Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91315Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91313Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91316Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91317Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91312Click = useCallback(() => {
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
      <div className={styles.creatorProfile}>
        <div className={styles.component1062}>
          <div className={styles.posts}>Posts</div>
          <div className={styles.videos}>Videos</div>
          <div className={styles.scrollGroup12}>
            <div className={styles.component91188Parent}>
              <div
                className={styles.component91188}
                onClick={onComponent91188Click}
              >
                <div className={styles.component91188Child} />
                <img
                  className={styles.agricultureImageIcon}
                  alt=""
                  src="/agriculture-image7@2x.png"
                />
                <div className={styles.parent}>
                  <div className={styles.div}>{`80$ | 12 `}</div>
                  <div className={styles.price}>Price</div>
                  <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                </div>
                <div className={styles.div1}>+0.87 %</div>
                <div className={styles.groupParent}>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.groupChild} />
                  </div>
                  <div className={styles.m}>255M$</div>
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
                  <div className={styles.div2}>(1.8)</div>
                </div>
                <div className={styles.yield}>Yield</div>
                <div className={styles.component91188Item} />
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
                <div className={styles.component91188Inner} />
                <div className={styles.lineDiv} />
                <img
                  className={styles.component941}
                  alt=""
                  src="/component-94--1.svg"
                />
                <div className={styles.farmName}>Farm name</div>
                <div className={styles.farmLocation}>Farm location</div>
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
                  <div className={styles.div2}>(1.8)</div>
                </div>
                <img className={styles.shareIcon} alt="" src="/share.svg" />
              </div>
              <div
                className={styles.component91188}
                onClick={onComponent91187Click}
              >
                <div className={styles.component91188Child} />
                <img
                  className={styles.agricultureImageIcon}
                  alt=""
                  src="/agriculture-image8@2x.png"
                />
                <div className={styles.parent}>
                  <div className={styles.div}>{`80$ | 12 `}</div>
                  <div className={styles.price}>Price</div>
                  <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                </div>
                <div className={styles.div1}>+0.87 %</div>
                <div className={styles.groupParent}>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.groupChild} />
                  </div>
                  <div className={styles.m}>255M$</div>
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
                  <div className={styles.div2}>(1.8)</div>
                </div>
                <div className={styles.yield}>Yield</div>
                <div className={styles.component91188Item} />
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
                <div className={styles.component91188Inner} />
                <div className={styles.lineDiv} />
                <img
                  className={styles.component941}
                  alt=""
                  src="/component-94--1.svg"
                />
                <div className={styles.farmName}>Farm name</div>
                <div className={styles.farmLocation}>Farm location</div>
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
                  <div className={styles.div2}>(1.8)</div>
                </div>
                <img className={styles.shareIcon} alt="" src="/share.svg" />
              </div>
              <div
                className={styles.component91188}
                onClick={onComponent91186Click}
              >
                <div className={styles.component91188Child} />
                <img
                  className={styles.agricultureImageIcon}
                  alt=""
                  src="/agriculture-image9@2x.png"
                />
                <div className={styles.parent}>
                  <div className={styles.div}>{`80$ | 12 `}</div>
                  <div className={styles.price}>Price</div>
                  <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                </div>
                <div className={styles.div1}>+0.87 %</div>
                <div className={styles.groupParent}>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.groupChild} />
                  </div>
                  <div className={styles.m}>255M$</div>
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
                  <div className={styles.div2}>(1.8)</div>
                </div>
                <div className={styles.yield}>Yield</div>
                <div className={styles.component91188Item} />
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
                <div className={styles.component91188Inner} />
                <div className={styles.lineDiv} />
                <img
                  className={styles.component941}
                  alt=""
                  src="/component-94--1.svg"
                />
                <div className={styles.farmName}>Farm name</div>
                <div className={styles.farmLocation}>Farm location</div>
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
                  <div className={styles.div2}>(1.8)</div>
                </div>
                <img className={styles.shareIcon} alt="" src="/share.svg" />
              </div>
              <div
                className={styles.component91188}
                onClick={onComponent91185Click}
              >
                <div className={styles.component91188Child} />
                <img
                  className={styles.agricultureImageIcon}
                  alt=""
                  src="/agriculture-image10@2x.png"
                />
                <div className={styles.parent}>
                  <div className={styles.div}>{`80$ | 12 `}</div>
                  <div className={styles.price}>Price</div>
                  <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                </div>
                <div className={styles.div1}>+0.87 %</div>
                <div className={styles.groupParent}>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.groupChild} />
                  </div>
                  <div className={styles.m}>255M$</div>
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
                  <div className={styles.div2}>(1.8)</div>
                </div>
                <div className={styles.yield}>Yield</div>
                <div className={styles.component91188Item} />
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
                <div className={styles.component91188Inner} />
                <div className={styles.lineDiv} />
                <img
                  className={styles.component941}
                  alt=""
                  src="/component-94--1.svg"
                />
                <div className={styles.farmName}>Farm name</div>
                <div className={styles.farmLocation}>Farm location</div>
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
                  <div className={styles.div2}>(1.8)</div>
                </div>
                <img className={styles.shareIcon} alt="" src="/share.svg" />
              </div>
              <div
                className={styles.component91188}
                onClick={onComponent91235Click}
              >
                <div className={styles.component91188Child} />
                <img
                  className={styles.agricultureImageIcon}
                  alt=""
                  src="/agriculture-image7@2x.png"
                />
                <div className={styles.parent}>
                  <div className={styles.div}>{`80$ | 12 `}</div>
                  <div className={styles.price}>Price</div>
                  <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                </div>
                <div className={styles.div1}>+0.87 %</div>
                <div className={styles.groupParent}>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.groupChild} />
                  </div>
                  <div className={styles.m}>255M$</div>
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
                  <div className={styles.div2}>(1.8)</div>
                </div>
                <div className={styles.yield}>Yield</div>
                <div className={styles.component91188Item} />
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
                <div className={styles.component91188Inner} />
                <div className={styles.lineDiv} />
                <img
                  className={styles.component941}
                  alt=""
                  src="/component-94--1.svg"
                />
                <div className={styles.farmName}>Farm name</div>
                <div className={styles.farmLocation}>Farm location</div>
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
                  <div className={styles.div2}>(1.8)</div>
                </div>
                <img className={styles.shareIcon} alt="" src="/share.svg" />
              </div>
              <div
                className={styles.component91188}
                onClick={onComponent91236Click}
              >
                <div className={styles.component91188Child} />
                <img
                  className={styles.agricultureImageIcon}
                  alt=""
                  src="/agriculture-image8@2x.png"
                />
                <div className={styles.parent}>
                  <div className={styles.div}>{`80$ | 12 `}</div>
                  <div className={styles.price}>Price</div>
                  <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                </div>
                <div className={styles.div1}>+0.87 %</div>
                <div className={styles.groupParent}>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.groupChild} />
                  </div>
                  <div className={styles.m}>255M$</div>
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
                  <div className={styles.div2}>(1.8)</div>
                </div>
                <div className={styles.yield}>Yield</div>
                <div className={styles.component91188Item} />
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
                <div className={styles.component91188Inner} />
                <div className={styles.lineDiv} />
                <img
                  className={styles.component941}
                  alt=""
                  src="/component-94--1.svg"
                />
                <div className={styles.farmName}>Farm name</div>
                <div className={styles.farmLocation}>Farm location</div>
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
                  <div className={styles.div2}>(1.8)</div>
                </div>
                <img className={styles.shareIcon} alt="" src="/share.svg" />
              </div>
            </div>
          </div>
          <img
            className={styles.component1062Child}
            alt=""
            src="/group-54749.svg"
          />
          <div className={styles.component1062Item} />
        </div>
        <div className={styles.maskGroup194}>
          <div className={styles.video} />
        </div>
        <div className={styles.component905Parent}>
          <div className={styles.component905}>
            <div className={styles.component905Child} />
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
            <img className={styles.logoIcon} alt="" src="/logo5@2x.png" />
            <div className={styles.drivingFinancialOpportunitie}>
              Driving financial opportunities for billions of people in a
              trustworthy monetary framework.
            </div>
            <div className={styles.component905Item} />
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
          <img className={styles.groupChild3} alt="" src="/ellipse-1998.svg" />
          <img className={styles.groupChild4} alt="" src="/ellipse-1997.svg" />
        </div>
        <div className={styles.creatorName}>Creator Name</div>
        <div className={styles.creatorProfileInner}>
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
        <div className={styles.starIconParent9}>
          <img className={styles.starIcon12} alt="" src="/star-icon2.svg" />
          <img
            className={styles.iconAwesomeStar48}
            alt=""
            src="/star-icon2.svg"
          />
          <img
            className={styles.iconAwesomeStar49}
            alt=""
            src="/star-icon2.svg"
          />
          <img
            className={styles.iconAwesomeStar50}
            alt=""
            src="/star-icon2.svg"
          />
          <img
            className={styles.iconAwesomeStar51}
            alt=""
            src="/star-icon2.svg"
          />
          <div className={styles.div2}>(1.8)</div>
        </div>
        <div className={styles.component1081Parent}>
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
          <div className={styles.posts1}>Posts</div>
          <div className={styles.mWrapper}>
            <div className={styles.m6}>5.6M</div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.m6}>152</div>
          </div>
          <div className={styles.frame}>
            <div className={styles.m6}>1,529</div>
          </div>
        </div>
        <div
          className={styles.descriptionLoremIpsum}
        >{`Description Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. `}</div>
        <div className={styles.component1051}>
          <div className={styles.component1051Child} />
          <div className={styles.followWrapper}>
            <div className={styles.follow}>Follow</div>
          </div>
        </div>
        <div className={styles.sendAMessageWrapper}>
          <div className={styles.sendAMessage}>Send a Message</div>
        </div>
        <img
          className={styles.creatorProfileChild}
          alt=""
          src="/group-548211.svg"
        />
        <div className={styles.greenEnergyAssetsParent}>
          <div className={styles.joinUs}>Green Energy Assets</div>
          <img className={styles.groupIcon} alt="" src="/group-54749.svg" />
          <div className={styles.scrollGroup33}>
            <div className={styles.component91188Parent}>
              <div
                className={styles.component91188}
                onClick={onComponent91314Click}
              >
                <div className={styles.component91188Child} />
                <img
                  className={styles.agricultureImageIcon}
                  alt=""
                  src="/agriculture-image10@2x.png"
                />
                <div className={styles.parent}>
                  <div className={styles.div}>{`80$ | 12 `}</div>
                  <div className={styles.price}>Price</div>
                  <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                </div>
                <div className={styles.div1}>+0.87 %</div>
                <div className={styles.groupParent}>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.groupChild} />
                  </div>
                  <div className={styles.m}>255M$</div>
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
                  <div className={styles.div2}>(1.8)</div>
                </div>
                <div className={styles.yield}>Yield</div>
                <div className={styles.component91188Item} />
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
                <div className={styles.component91188Inner} />
                <div className={styles.lineDiv} />
                <img
                  className={styles.component941}
                  alt=""
                  src="/component-94--1.svg"
                />
                <div className={styles.farmName}>Farm name</div>
                <div className={styles.farmLocation}>Farm location</div>
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
                  <div className={styles.div2}>(1.8)</div>
                </div>
                <img className={styles.shareIcon} alt="" src="/share.svg" />
              </div>
              <div
                className={styles.component91188}
                onClick={onComponent91315Click}
              >
                <div className={styles.component91188Child} />
                <img
                  className={styles.agricultureImageIcon}
                  alt=""
                  src="/agriculture-image9@2x.png"
                />
                <div className={styles.parent}>
                  <div className={styles.div}>{`80$ | 12 `}</div>
                  <div className={styles.price}>Price</div>
                  <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                </div>
                <div className={styles.div1}>+0.87 %</div>
                <div className={styles.groupParent}>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.groupChild} />
                  </div>
                  <div className={styles.m}>255M$</div>
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
                  <div className={styles.div2}>(1.8)</div>
                </div>
                <div className={styles.yield}>Yield</div>
                <div className={styles.component91188Item} />
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
                <div className={styles.component91188Inner} />
                <div className={styles.lineDiv} />
                <img
                  className={styles.component941}
                  alt=""
                  src="/component-94--1.svg"
                />
                <div className={styles.farmName}>Farm name</div>
                <div className={styles.farmLocation}>Farm location</div>
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
                  <div className={styles.div2}>(1.8)</div>
                </div>
                <img className={styles.shareIcon} alt="" src="/share.svg" />
              </div>
              <div
                className={styles.component91188}
                onClick={onComponent91313Click}
              >
                <div className={styles.component91188Child} />
                <img
                  className={styles.agricultureImageIcon}
                  alt=""
                  src="/agriculture-image11@2x.png"
                />
                <div className={styles.parent}>
                  <div className={styles.div}>{`80$ | 12 `}</div>
                  <div className={styles.price}>Price</div>
                  <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                </div>
                <div className={styles.div1}>+0.87 %</div>
                <div className={styles.groupParent}>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.groupChild} />
                  </div>
                  <div className={styles.m}>255M$</div>
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
                  <div className={styles.div2}>(1.8)</div>
                </div>
                <div className={styles.yield}>Yield</div>
                <div className={styles.component91188Item} />
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
                <div className={styles.component91188Inner} />
                <div className={styles.lineDiv} />
                <img
                  className={styles.component941}
                  alt=""
                  src="/component-94--1.svg"
                />
                <div className={styles.farmName}>Farm name</div>
                <div className={styles.farmLocation}>Farm location</div>
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
                  <div className={styles.div2}>(1.8)</div>
                </div>
                <img className={styles.shareIcon} alt="" src="/share.svg" />
              </div>
              <div
                className={styles.component91188}
                onClick={onComponent91316Click}
              >
                <div className={styles.component91188Child} />
                <img
                  className={styles.agricultureImageIcon}
                  alt=""
                  src="/agriculture-image8@2x.png"
                />
                <div className={styles.parent}>
                  <div className={styles.div}>{`80$ | 12 `}</div>
                  <div className={styles.price}>Price</div>
                  <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                </div>
                <div className={styles.div1}>+0.87 %</div>
                <div className={styles.groupParent}>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.groupChild} />
                  </div>
                  <div className={styles.m}>255M$</div>
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
                  <div className={styles.div2}>(1.8)</div>
                </div>
                <div className={styles.yield}>Yield</div>
                <div className={styles.component91188Item} />
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
                <div className={styles.component91188Inner} />
                <div className={styles.lineDiv} />
                <img
                  className={styles.component941}
                  alt=""
                  src="/component-94--1.svg"
                />
                <div className={styles.farmName}>Farm name</div>
                <div className={styles.farmLocation}>Farm location</div>
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
                  <div className={styles.div2}>(1.8)</div>
                </div>
                <img className={styles.shareIcon} alt="" src="/share.svg" />
              </div>
              <div
                className={styles.component91188}
                onClick={onComponent91317Click}
              >
                <div className={styles.component91188Child} />
                <img
                  className={styles.agricultureImageIcon}
                  alt=""
                  src="/agriculture-image7@2x.png"
                />
                <div className={styles.parent}>
                  <div className={styles.div}>{`80$ | 12 `}</div>
                  <div className={styles.price}>Price</div>
                  <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                </div>
                <div className={styles.div1}>+0.87 %</div>
                <div className={styles.groupParent}>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.groupChild} />
                  </div>
                  <div className={styles.m}>255M$</div>
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
                  <div className={styles.div2}>(1.8)</div>
                </div>
                <div className={styles.yield}>Yield</div>
                <div className={styles.component91188Item} />
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
                <div className={styles.component91188Inner} />
                <div className={styles.lineDiv} />
                <img
                  className={styles.component941}
                  alt=""
                  src="/component-94--1.svg"
                />
                <div className={styles.farmName}>Farm name</div>
                <div className={styles.farmLocation}>Farm location</div>
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
                  <div className={styles.div2}>(1.8)</div>
                </div>
                <img className={styles.shareIcon} alt="" src="/share.svg" />
              </div>
              <div
                className={styles.component91188}
                onClick={onComponent91312Click}
              >
                <div className={styles.component91188Child} />
                <img
                  className={styles.agricultureImageIcon}
                  alt=""
                  src="/agriculture-image8@2x.png"
                />
                <div className={styles.parent}>
                  <div className={styles.div}>{`80$ | 12 `}</div>
                  <div className={styles.price}>Price</div>
                  <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                </div>
                <div className={styles.div1}>+0.87 %</div>
                <div className={styles.groupParent}>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.groupChild} />
                  </div>
                  <div className={styles.m}>255M$</div>
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
                  <div className={styles.div2}>(1.8)</div>
                </div>
                <div className={styles.yield}>Yield</div>
                <div className={styles.component91188Item} />
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
                <div className={styles.component91188Inner} />
                <div className={styles.lineDiv} />
                <img
                  className={styles.component941}
                  alt=""
                  src="/component-94--1.svg"
                />
                <div className={styles.farmName}>Farm name</div>
                <div className={styles.farmLocation}>Farm location</div>
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
                  <div className={styles.div2}>(1.8)</div>
                </div>
                <img className={styles.shareIcon} alt="" src="/share.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navigationBar}>
          <div className={styles.navigationBarChild} />
          <img
            className={styles.logoIcon1}
            alt=""
            src="/logo6@2x.png"
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

export default CreatorProfile;
