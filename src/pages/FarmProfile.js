import { useState, useCallback } from "react";
import ConnectWallet from "../components/ConnectWallet";
import PortalPopup from "../components/PortalPopup";
import SwapATokens from "../components/SwapATokens";
import SignUpModalStep1Choose from "../components/SignUpModalStep1Choose";
import { useNavigate } from "react-router-dom";
import styles from "./FarmProfile.module.css";
const FarmProfile = () => {
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

  const onComponent1101Click = useCallback(() => {
    navigate("/creator-profile");
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
      <div className={styles.farmProfile}>
        <img
          className={styles.repeatGrid24}
          alt=""
          src="/repeat-grid-24@2x.png"
        />
        <div className={styles.component902Parent}>
          <div className={styles.component902}>
            <div className={styles.component902Child} />
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
            <img className={styles.logoIcon} alt="" src="/logo3@2x.png" />
            <div className={styles.drivingFinancialOpportunitie}>
              Driving financial opportunities for billions of people in a
              trustworthy monetary framework.
            </div>
            <div className={styles.component902Item} />
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
            <div className={styles.component10815Parent}>
              <img
                className={styles.component10815}
                alt=""
                src="/component-108--20.svg"
              />
              <img
                className={styles.component10815}
                alt=""
                src="/component-108--19.svg"
              />
              <img
                className={styles.component10815}
                alt=""
                src="/component-108--18.svg"
              />
              <img
                className={styles.component10815}
                alt=""
                src="/component-108--17.svg"
              />
              <img
                className={styles.component10815}
                alt=""
                src="/component-108--16.svg"
              />
            </div>
          </div>
          <img className={styles.groupChild} alt="" src="/ellipse-1999.svg" />
          <img className={styles.groupItem} alt="" src="/ellipse-1998.svg" />
          <img className={styles.groupInner} alt="" src="/ellipse-1997.svg" />
        </div>
        <div
          className={styles.descriptionLoremIpsum}
        >{`Description Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. `}</div>
        <div className={styles.seeMoreParent}>
          <div className={styles.seeMore}>See more</div>
          <div className={styles.unionWrapper}>
            <img className={styles.unionIcon} alt="" src="/union.svg" />
          </div>
        </div>
        <div className={styles.price}>Price</div>
        <div className={styles.lumi}>+0.87 LUMI</div>
        <div className={styles.yield}>Yield</div>
        <div className={styles.groupParent}>
          <div className={styles.rectangleWrapper}>
            <div className={styles.rectangleDiv} />
          </div>
          <div className={styles.m}>255M$</div>
          <div className={styles.averageRevenue}>Average revenue</div>
        </div>
        <div className={styles.parent}>
          <div className={styles.div}>{`80$ | 12 `}</div>
          <img className={styles.path44469Icon} alt="" src="/path-44469.svg" />
        </div>
        <div className={styles.component1161}>
          <div className={styles.component1161Child} />
          <div className={styles.iconlylightOutlinebuyParent}>
            <img
              className={styles.iconlylightOutlinebuy}
              alt=""
              src="/iconlylightoutlinebuy1.svg"
            />
            <div className={styles.addToCart}>Add to cart</div>
          </div>
        </div>
        <div className={styles.component1171}>
          <div className={styles.component1171Child} />
          <div className={styles.buyNow}>Buy Now</div>
        </div>
        <div className={styles.farmProfileChild} />
        <div className={styles.farmName}>Farm name</div>
        <div className={styles.component10810Parent}>
          <img
            className={styles.component10815}
            alt=""
            src="/component-108--25.svg"
          />
          <img
            className={styles.component10815}
            alt=""
            src="/component-108--24.svg"
          />
          <img
            className={styles.component10815}
            alt=""
            src="/component-108--23.svg"
          />
          <img
            className={styles.component10815}
            alt=""
            src="/component-108--22.svg"
          />
          <img
            className={styles.component10815}
            alt=""
            src="/component-108--21.svg"
          />
        </div>
        <div className={styles.by}>{`By `}</div>
        <img className={styles.farmProfileItem} alt="" src="/group-54814.svg" />
        <img
          className={styles.farmProfileInner}
          alt=""
          src="/group-54749.svg"
        />
        <img className={styles.groupIcon} alt="" src="/group-54921.svg" />
        <img
          className={styles.farmProfileChild1}
          alt=""
          src="/group-54922.svg"
        />
        <div className={styles.component1101} onClick={onComponent1101Click}>
          <div className={styles.creatorName}>
            <span>Creator Name</span>
            <span className={styles.span} />
          </div>
        </div>
        <div className={styles.farmProfileInner1}>
          <div className={styles.farmLive247Parent}>
            <div className={styles.farmLive247}>Farm LIVE 24/7</div>
            <img
              className={styles.iconIonicIosVideocam}
              alt=""
              src="/icon-ioniciosvideocam.svg"
            />
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
          <div className={styles.div1}>(1.8)</div>
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.electricityProducedParent}>
            <div className={styles.joinUs}>Electricity Produced</div>
            <div className={styles.electricityProducedCharts}>
              <div className={styles.groupParent1}>
                <div className={styles.groupParent2}>
                  <div className={styles.dailyOutputParent}>
                    <div className={styles.dailyOutput}>Daily output:</div>
                    <div className={styles.kwh}>54.09 kWh</div>
                  </div>
                  <div className={styles.monthlyOutputParent}>
                    <div className={styles.dailyOutput}>Monthly output:</div>
                    <div className={styles.kwh}>4,786.21 kWh</div>
                  </div>
                  <div className={styles.totalOutputParent}>
                    <div className={styles.dailyOutput}>Total output:</div>
                    <div className={styles.kwh}>1,221.75 MWh</div>
                  </div>
                  <div className={styles.co2AvoidanceParent}>
                    <div className={styles.dailyOutput}>
                      <span>CO</span>
                      <span className={styles.span1}>2</span>
                      <span> avoidance</span>
                    </div>
                    <div className={styles.kwh}>684.58 t</div>
                  </div>
                </div>
                <div className={styles.lineChart0Wrapper}>
                  <div className={styles.lineChart0}>
                    <div className={styles.groupParent3}>
                      <div className={styles.groupWrapper}>
                        <div className={styles.rectangleParent}>
                          <div className={styles.groupChild1} />
                          <div className={styles.groupChild2} />
                          <div className={styles.groupChild3} />
                        </div>
                      </div>
                      <div className={styles.groupParent4}>
                        <div className={styles.rectangleGroup}>
                          <div className={styles.groupChild4} />
                          <div className={styles.groupChild3} />
                        </div>
                        <div className={styles.groupChild6} />
                      </div>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.groupChild7} />
                        <div className={styles.rectangleParent1}>
                          <div className={styles.groupChild1} />
                          <div className={styles.groupChild9} />
                        </div>
                      </div>
                      <div className={styles.groupParent4}>
                        <div className={styles.groupChild10} />
                        <div className={styles.groupChild11} />
                        <div className={styles.groupChild12} />
                      </div>
                      <div className={styles.groupWrapper}>
                        <div className={styles.rectangleParent}>
                          <div className={styles.groupChild1} />
                          <div className={styles.groupChild2} />
                          <div className={styles.groupChild3} />
                        </div>
                      </div>
                      <div className={styles.rectangleParent4}>
                        <div className={styles.groupChild16} />
                        <div className={styles.rectangleParent5}>
                          <div className={styles.groupChild1} />
                          <div className={styles.groupChild18} />
                        </div>
                      </div>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.groupChild7} />
                        <div className={styles.rectangleParent1}>
                          <div className={styles.groupChild1} />
                          <div className={styles.groupChild9} />
                        </div>
                      </div>
                      <div className={styles.groupParent4}>
                        <div className={styles.rectangleGroup}>
                          <div className={styles.groupChild4} />
                          <div className={styles.groupChild3} />
                        </div>
                        <div className={styles.groupChild6} />
                      </div>
                      <div className={styles.rectangleParent9}>
                        <div className={styles.groupChild25} />
                        <div className={styles.rectangleParent10}>
                          <div className={styles.groupChild26} />
                          <div className={styles.groupChild27} />
                        </div>
                      </div>
                      <div className={styles.groupParent6}>
                        <div className={styles.rectangleParent11}>
                          <div className={styles.groupChild28} />
                          <div className={styles.groupChild29} />
                        </div>
                        <div className={styles.groupChild6} />
                      </div>
                      <div className={styles.groupParent7}>
                        <div className={styles.rectangleParent12}>
                          <div className={styles.groupChild31} />
                          <div className={styles.groupChild3} />
                        </div>
                        <div className={styles.groupChild6} />
                      </div>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.groupChild7} />
                        <div className={styles.rectangleParent1}>
                          <div className={styles.groupChild1} />
                          <div className={styles.groupChild9} />
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
                    <div className={styles.group}>
                      <div className={styles.stories}>10:00</div>
                      <div className={styles.stories}>11:00</div>
                      <div className={styles.stories}>12:00</div>
                      <div className={styles.stories}>13:00</div>
                      <div className={styles.stories}>14:00</div>
                      <div className={styles.stories}>15:00</div>
                      <div className={styles.div8}>16:00</div>
                      <div className={styles.div8}>17:00</div>
                      <div className={styles.stories}>18:00</div>
                      <div className={styles.stories}>19:00</div>
                      <div className={styles.stories}>20:00</div>
                      <div className={styles.stories}>21:00</div>
                    </div>
                  </div>
                </div>
                <div className={styles.groupParent8}>
                  <div className={styles.rectangleParent15}>
                    <div className={styles.groupChild37} />
                    <div className={styles.pvSystem93}>PV System 93 kWh</div>
                  </div>
                  <div className={styles.rectangleParent16}>
                    <div className={styles.groupChild38} />
                    <div className={styles.pvSystem93}>PV System 93 kWh</div>
                  </div>
                  <div className={styles.rectangleParent17}>
                    <div className={styles.groupChild39} />
                    <div className={styles.pvSystem93}>PV System 93 kWh</div>
                  </div>
                </div>
              </div>
              <div className={styles.lineParent}>
                <div className={styles.lineDiv} />
                <div className={styles.live}>Live</div>
                <div className={styles.monthly}>Monthly</div>
                <div className={styles.yearly}>Yearly</div>
                <div className={styles.groupChild40} />
              </div>
            </div>
          </div>
          <div className={styles.feedInTariffParent}>
            <div className={styles.joinUs}>feed-in tariff</div>
            <div className={styles.groupParent9}>
              <div className={styles.lineChart0Container}>
                <div className={styles.lineChart0}>
                  <div className={styles.groupParent3}>
                    <div className={styles.groupWrapper}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.groupChild1} />
                        <div className={styles.groupChild2} />
                        <div className={styles.groupChild3} />
                      </div>
                    </div>
                    <div className={styles.groupParent4}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild4} />
                        <div className={styles.groupChild3} />
                      </div>
                      <div className={styles.groupChild6} />
                    </div>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild7} />
                      <div className={styles.rectangleParent1}>
                        <div className={styles.groupChild1} />
                        <div className={styles.groupChild9} />
                      </div>
                    </div>
                    <div className={styles.groupParent4}>
                      <div className={styles.groupChild10} />
                      <div className={styles.groupChild11} />
                      <div className={styles.groupChild12} />
                    </div>
                    <div className={styles.groupWrapper}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.groupChild1} />
                        <div className={styles.groupChild2} />
                        <div className={styles.groupChild3} />
                      </div>
                    </div>
                    <div className={styles.rectangleParent4}>
                      <div className={styles.groupChild16} />
                      <div className={styles.rectangleParent5}>
                        <div className={styles.groupChild1} />
                        <div className={styles.groupChild18} />
                      </div>
                    </div>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild7} />
                      <div className={styles.rectangleParent1}>
                        <div className={styles.groupChild1} />
                        <div className={styles.groupChild9} />
                      </div>
                    </div>
                    <div className={styles.groupParent4}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild4} />
                        <div className={styles.groupChild3} />
                      </div>
                      <div className={styles.groupChild6} />
                    </div>
                    <div className={styles.rectangleParent9}>
                      <div className={styles.groupChild25} />
                      <div className={styles.rectangleParent10}>
                        <div className={styles.groupChild26} />
                        <div className={styles.groupChild27} />
                      </div>
                    </div>
                    <div className={styles.groupParent6}>
                      <div className={styles.rectangleParent11}>
                        <div className={styles.groupChild28} />
                        <div className={styles.groupChild29} />
                      </div>
                      <div className={styles.groupChild6} />
                    </div>
                    <div className={styles.groupParent7}>
                      <div className={styles.rectangleParent12}>
                        <div className={styles.groupChild31} />
                        <div className={styles.groupChild3} />
                      </div>
                      <div className={styles.groupChild6} />
                    </div>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild7} />
                      <div className={styles.rectangleParent1}>
                        <div className={styles.groupChild1} />
                        <div className={styles.groupChild9} />
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
                  <div className={styles.group}>
                    <div className={styles.stories}>10:00</div>
                    <div className={styles.stories}>11:00</div>
                    <div className={styles.stories}>12:00</div>
                    <div className={styles.stories}>13:00</div>
                    <div className={styles.stories}>14:00</div>
                    <div className={styles.stories}>15:00</div>
                    <div className={styles.div8}>16:00</div>
                    <div className={styles.div8}>17:00</div>
                    <div className={styles.stories}>18:00</div>
                    <div className={styles.stories}>19:00</div>
                    <div className={styles.stories}>20:00</div>
                    <div className={styles.stories}>21:00</div>
                  </div>
                </div>
              </div>
              <div className={styles.groupParent15}>
                <div className={styles.rectangleParent15}>
                  <div className={styles.groupChild37} />
                  <div className={styles.div1}>PV System 93 kWh</div>
                </div>
                <div className={styles.rectangleParent16}>
                  <div className={styles.groupChild38} />
                  <div className={styles.div1}>PV System 93 kWh</div>
                </div>
                <div className={styles.rectangleParent17}>
                  <div className={styles.groupChild39} />
                  <div className={styles.div1}>PV System 93 kWh</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.component91193Parent}>
            <div className={styles.component91193}>
              <div className={styles.component91193Child} />
              <div className={styles.agricultureImage}>
                <div className={styles.pexelsVideos1276083} />
              </div>
              <img
                className={styles.component91193Item}
                alt=""
                src="/group-548691.svg"
              />
              <img
                className={styles.component91193Inner}
                alt=""
                src="/group-548643.svg"
              />
              <div className={styles.iconAwesomePlayParent}>
                <img
                  className={styles.iconAwesomePlay}
                  alt=""
                  src="/icon-awesomeplay.svg"
                />
                <img
                  className={styles.groupChild80}
                  alt=""
                  src="/group-54867.svg"
                />
                <div className={styles.div26}>0:25 / 3:17</div>
                <div className={styles.liveParent}>
                  <div className={styles.live1}>Live</div>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-2025.svg"
                  />
                </div>
              </div>
              <img
                className={styles.iconAwesomeChromecast}
                alt=""
                src="/icon-awesomechromecast1.svg"
              />
              <div className={styles.starIconGroup}>
                <img
                  className={styles.starIcon1}
                  alt=""
                  src="/star-icon1.svg"
                />
                <img
                  className={styles.iconAwesomeStar4}
                  alt=""
                  src="/star-icon1.svg"
                />
                <img
                  className={styles.iconAwesomeStar5}
                  alt=""
                  src="/star-icon1.svg"
                />
                <img
                  className={styles.iconAwesomeStar6}
                  alt=""
                  src="/star-icon1.svg"
                />
                <img
                  className={styles.iconAwesomeStar7}
                  alt=""
                  src="/icon-awesomestar1.svg"
                />
                <div className={styles.div1}>(1.8)</div>
              </div>
              <img className={styles.shareIcon} alt="" src="/share.svg" />
            </div>
            <div className={styles.groupWrapper3}>
              <div className={styles.liveGroup}>
                <div className={styles.live2}>LIVE</div>
                <img
                  className={styles.iconIonicIosVideocam}
                  alt=""
                  src="/icon-ioniciosvideocam.svg"
                />
              </div>
            </div>
            <div className={styles.farmLive2471}>Farm LIVE 24/7</div>
          </div>
          <div className={styles.locationParent}>
            <div className={styles.location}>Location</div>
            <img
              className={styles.maskGroup198}
              alt=""
              src="/mask-group-198@2x.png"
            />
            <img className={styles.locationIcon} alt="" src="/location.svg" />
          </div>
        </div>
        <div className={styles.navigationBar}>
          <div className={styles.navigationBarChild} />
          <img
            className={styles.logoIcon1}
            alt=""
            src="/logo4@2x.png"
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

export default FarmProfile;
