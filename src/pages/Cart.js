import { useState, useCallback } from "react";
import ConnectWallet from "../components/ConnectWallet";
import PortalPopup from "../components/PortalPopup";
import SwapATokens from "../components/SwapATokens";
import SignUpModalStep1Choose from "../components/SignUpModalStep1Choose";
import { useNavigate } from "react-router-dom";
import styles from "./Cart.module.css";
const Cart = () => {
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

  const onLightningIconClick = useCallback(() => {
    navigate("/your-favorite");
  }, [navigate]);

  const onLeaderBoardTextClick = useCallback(() => {
    navigate("/leaderboard");
  }, [navigate]);

  return (
    <>
      <div className={styles.cart}>
        <div className={styles.component908Parent}>
          <div className={styles.component908}>
            <div className={styles.component908Child} />
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
            <img className={styles.logoIcon} alt="" src="/logo9@2x.png" />
            <div className={styles.drivingFinancialOpportunitie}>
              Driving financial opportunities for billions of people in a
              trustworthy monetary framework.
            </div>
            <div className={styles.component908Item} />
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
        <div className={styles.portfolio}>Portfolio</div>
        <div className={styles.farm}>Farm</div>
        <div className={styles.component4311}>
          <div className={styles.component4311Child} />
          <div className={styles.component4311Item} />
          <img className={styles.path6395Icon} alt="" src="/path-6395.svg" />
        </div>
        <div className={styles.cartChild} />
        <div className={styles.quantity}>Quantity</div>
        <div className={styles.price}>Price</div>
        <div className={styles.groupParent}>
          <div className={styles.lineParent}>
            <div className={styles.lineDiv} />
            <div className={styles.groupContainer}>
              <div className={styles.maskGroup203Wrapper}>
                <img
                  className={styles.maskGroup203}
                  alt=""
                  src="/mask-group-2034@2x.png"
                />
              </div>
              <div className={styles.groupParent1}>
                <div className={styles.groupWrapper}>
                  <div className={styles.groupParent2}>
                    <div className={styles.groupFrame}>
                      <div className={styles.groupParent3}>
                        <div className={styles.rectangleParent}>
                          <div className={styles.rectangleDiv} />
                          <div className={styles.groupChild1} />
                        </div>
                        <div className={styles.groupChild2} />
                      </div>
                    </div>
                    <div className={styles.div}>2</div>
                  </div>
                </div>
                <div className={styles.component4321}>
                  <div className={styles.saveForLater}>Save for later</div>
                  <img
                    className={styles.iconlylightOutlinebookmark}
                    alt=""
                    src="/iconlylightoutlinebookmark.svg"
                  />
                </div>
                <div className={styles.component4331}>
                  <img
                    className={styles.iconlylightOutlinedelete}
                    alt=""
                    src="/iconlylightoutlinedelete1.svg"
                  />
                  <div className={styles.remove}>Remove</div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div1}>{`80$ | 12 `}</div>
                  <img
                    className={styles.path44469Icon}
                    alt=""
                    src="/path-444691.svg"
                  />
                </div>
              </div>
              <div className={styles.farmNameParent}>
                <div className={styles.farmName}>Farm name</div>
                <div className={styles.byParent}>
                  <div className={styles.by}>{`By `}</div>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-548141.svg"
                  />
                  <div className={styles.creatorName}>
                    <span>Creator Name</span>
                    <span className={styles.span} />
                  </div>
                </div>
              </div>
              <div className={styles.component43112}>
                <div className={styles.component4311Child} />
                <div className={styles.component4311Item} />
                <img
                  className={styles.path6395Icon}
                  alt=""
                  src="/path-6395.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.lineParent}>
            <div className={styles.lineDiv} />
            <div className={styles.groupContainer}>
              <div className={styles.maskGroup203Wrapper}>
                <img
                  className={styles.maskGroup203}
                  alt=""
                  src="/mask-group-2035@2x.png"
                />
              </div>
              <div className={styles.groupParent1}>
                <div className={styles.groupWrapper}>
                  <div className={styles.groupParent2}>
                    <div className={styles.groupFrame}>
                      <div className={styles.groupParent3}>
                        <div className={styles.rectangleParent}>
                          <div className={styles.rectangleDiv} />
                          <div className={styles.groupChild1} />
                        </div>
                        <div className={styles.groupChild2} />
                      </div>
                    </div>
                    <div className={styles.div}>1</div>
                  </div>
                </div>
                <div className={styles.component4321}>
                  <div className={styles.saveForLater}>Save for later</div>
                  <img
                    className={styles.iconlylightOutlinebookmark}
                    alt=""
                    src="/iconlylightoutlinebookmark.svg"
                  />
                </div>
                <div className={styles.component4331}>
                  <img
                    className={styles.iconlylightOutlinedelete}
                    alt=""
                    src="/iconlylightoutlinedelete1.svg"
                  />
                  <div className={styles.remove}>Remove</div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div1}>{`80$ | 12 `}</div>
                  <img
                    className={styles.path44469Icon}
                    alt=""
                    src="/path-444691.svg"
                  />
                </div>
              </div>
              <div className={styles.farmNameParent}>
                <div className={styles.farmName}>Farm name</div>
                <div className={styles.byParent}>
                  <div className={styles.by}>{`By `}</div>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-548141.svg"
                  />
                  <div className={styles.creatorName1}>
                    <span>Creator Name</span>
                    <span className={styles.span1} />
                  </div>
                </div>
              </div>
              <div className={styles.component43112}>
                <div className={styles.component4311Child} />
                <div className={styles.component4311Item} />
                <img
                  className={styles.path6395Icon}
                  alt=""
                  src="/path-6395.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.lineParent}>
            <div className={styles.lineDiv} />
            <div className={styles.groupContainer}>
              <div className={styles.maskGroup203Wrapper}>
                <img
                  className={styles.maskGroup203}
                  alt=""
                  src="/mask-group-2036@2x.png"
                />
              </div>
              <div className={styles.groupParent1}>
                <div className={styles.groupWrapper}>
                  <div className={styles.groupParent2}>
                    <div className={styles.groupFrame}>
                      <div className={styles.groupParent3}>
                        <div className={styles.rectangleParent}>
                          <div className={styles.rectangleDiv} />
                          <div className={styles.groupChild1} />
                        </div>
                        <div className={styles.groupChild2} />
                      </div>
                    </div>
                    <div className={styles.div}>1</div>
                  </div>
                </div>
                <div className={styles.component4321}>
                  <div className={styles.saveForLater}>Save for later</div>
                  <img
                    className={styles.iconlylightOutlinebookmark}
                    alt=""
                    src="/iconlylightoutlinebookmark.svg"
                  />
                </div>
                <div className={styles.component4331}>
                  <img
                    className={styles.iconlylightOutlinedelete}
                    alt=""
                    src="/iconlylightoutlinedelete1.svg"
                  />
                  <div className={styles.remove}>Remove</div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div1}>{`80$ | 12 `}</div>
                  <img
                    className={styles.path44469Icon}
                    alt=""
                    src="/path-444691.svg"
                  />
                </div>
              </div>
              <div className={styles.farmNameParent}>
                <div className={styles.farmName}>Farm name</div>
                <div className={styles.byParent}>
                  <div className={styles.by}>{`By `}</div>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-548141.svg"
                  />
                  <div className={styles.creatorName1}>
                    <span>Creator Name</span>
                    <span className={styles.span1} />
                  </div>
                </div>
              </div>
              <div className={styles.component43112}>
                <div className={styles.component4311Child} />
                <div className={styles.component4311Item} />
                <img
                  className={styles.path6395Icon}
                  alt=""
                  src="/path-6395.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.lineParent}>
            <div className={styles.lineDiv} />
            <div className={styles.groupContainer}>
              <div className={styles.maskGroup203Wrapper}>
                <img
                  className={styles.maskGroup203}
                  alt=""
                  src="/mask-group-2037@2x.png"
                />
              </div>
              <div className={styles.groupParent1}>
                <div className={styles.groupWrapper}>
                  <div className={styles.groupParent2}>
                    <div className={styles.groupFrame}>
                      <div className={styles.groupParent3}>
                        <div className={styles.rectangleParent}>
                          <div className={styles.rectangleDiv} />
                          <div className={styles.groupChild1} />
                        </div>
                        <div className={styles.groupChild2} />
                      </div>
                    </div>
                    <div className={styles.div}>1</div>
                  </div>
                </div>
                <div className={styles.component4321}>
                  <div className={styles.saveForLater}>Save for later</div>
                  <img
                    className={styles.iconlylightOutlinebookmark}
                    alt=""
                    src="/iconlylightoutlinebookmark.svg"
                  />
                </div>
                <div className={styles.component4331}>
                  <img
                    className={styles.iconlylightOutlinedelete}
                    alt=""
                    src="/iconlylightoutlinedelete1.svg"
                  />
                  <div className={styles.remove}>Remove</div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div1}>{`80$ | 12 `}</div>
                  <img
                    className={styles.path44469Icon}
                    alt=""
                    src="/path-444691.svg"
                  />
                </div>
              </div>
              <div className={styles.farmNameParent}>
                <div className={styles.farmName}>Farm name</div>
                <div className={styles.byParent}>
                  <div className={styles.by}>{`By `}</div>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-548141.svg"
                  />
                  <div className={styles.creatorName1}>
                    <span>Creator Name</span>
                    <span className={styles.span1} />
                  </div>
                </div>
              </div>
              <div className={styles.component43112}>
                <div className={styles.component4311Child} />
                <div className={styles.component4311Item} />
                <img
                  className={styles.path6395Icon}
                  alt=""
                  src="/path-6395.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.summaryParent}>
          <div className={styles.summary}>Summary</div>
          <div className={styles.subTotalParent}>
            <div className={styles.subTotal}>Sub Total</div>
            <div className={styles.grandTotal}>Grand Total</div>
            <div className={styles.discount}>{`Discount `}</div>
            <div className={styles.div8}>$0</div>
            <div className={styles.component1175}>
              <div className={styles.component1175Child} />
              <div className={styles.buyInvest}>{`Buy & Invest`}</div>
            </div>
            <div className={styles.parent2}>
              <div className={styles.div1}>{`160$ | 24 `}</div>
              <img
                className={styles.path44469Icon}
                alt=""
                src="/path-444691.svg"
              />
            </div>
            <div className={styles.parent3}>
              <div className={styles.marketplace}>{`400$ | 60 `}</div>
              <img
                className={styles.path44469Icon5}
                alt=""
                src="/path-444691.svg"
              />
            </div>
            <div className={styles.groupChild18} />
          </div>
        </div>
        <div className={styles.navigationBar}>
          <div className={styles.navigationBarChild} />
          <img
            className={styles.logoIcon1}
            alt=""
            src="/logo9@2x.png"
            onClick={onLogoImageClick}
          />
          <div className={styles.userParent}>
            <img className={styles.userIcon} alt="" src="/user.svg" />
            <img className={styles.userIcon} alt="" src="/cart.svg" />
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
        <div className={styles.component4336}>
          <img
            className={styles.iconlylightOutlinedelete4}
            alt=""
            src="/iconlylightoutlinedelete.svg"
          />
          <div className={styles.remove4}>Remove</div>
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

export default Cart;
