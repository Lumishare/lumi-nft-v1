import { useState, useCallback } from "react";
import Filter from "../components/Filter";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./InvestorWizard1.module.css";
const InvestorWizard1 = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();

  const openFilter = useCallback(() => {
    setFilterOpen(true);
  }, []);

  const closeFilter = useCallback(() => {
    setFilterOpen(false);
  }, []);

  const onGroupContainer29Click = useCallback(() => {
    navigate("/mobile-app");
  }, [navigate]);

  const onComponent1231Click = useCallback(() => {
    navigate("/investor-profile1");
  }, [navigate]);

  return (
    <>
      <div className={styles.investorWizard}>
        <div className={styles.maskGroup55Parent}>
          <div className={styles.maskGroup55} />
          <div className={styles.groupChild} />
        </div>
        <div className={styles.rate}>
          <div className={styles.div}>4.5</div>
          <img className={styles.starIcon} alt="" src="/star.svg" />
        </div>
        <div className={styles.scrollGroup10}>
          <div className={styles.repeatGrid15}>
            <div className={styles.groupParent}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499514.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupContainer}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499515.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupDiv}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499516.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent1}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499517.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent2}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499518.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent3}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499519.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent4}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499520.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent5}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499521.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent6}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499522.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent7}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499523.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent8}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499524.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent9}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499525.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent10}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499526.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent11}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499527.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent12}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499514.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent13}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499515.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent14}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499516.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent15}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499517.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent16}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499518.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent17}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499519.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent18}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499520.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent19}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499521.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent20}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499522.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent21}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499523.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent22}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499524.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent23}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499525.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent24}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499526.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
            <div className={styles.groupParent25}>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-5499527.svg"
              />
              <div className={styles.userName}>User Name</div>
            </div>
          </div>
        </div>
        <div className={styles.groupParent26}>
          <div
            className={styles.rectangleParent}
            onClick={onGroupContainer29Click}
          >
            <div className={styles.rectangleDiv} />
            <img className={styles.ellipseIcon} alt="" src="/ellipse-512.svg" />
          </div>
          <div className={styles.investorWizard1}>Investor Wizard</div>
        </div>
        <div className={styles.groupParent27}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild26} />
            <div className={styles.groupChild27} />
            <div className={styles.top10}>Top 10</div>
            <div className={styles.component91302}>
              <div className={styles.component91302Child} />
              <div className={styles.component1071}>
                <div className={styles.farmOwnerName}>Farm owner name</div>
              </div>
              <div className={styles.div1}>16/3/2023</div>
              <img
                className={styles.agricultureImageIcon}
                alt=""
                src="/agriculture-image@2x.png"
              />
              <div className={styles.parent}>
                <div className={styles.div2}>{`80$ | 12 `}</div>
                <div className={styles.price}>Price</div>
                <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
              </div>
              <div className={styles.div3}>+0.87 %</div>
              <div className={styles.groupParent28}>
                <div className={styles.rectangleWrapper}>
                  <div className={styles.groupChild28} />
                </div>
                <div className={styles.m}>255M$</div>
                <div className={styles.averageRevenue}>Average revenue</div>
              </div>
              <div className={styles.starIconParent}>
                <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
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
                <div className={styles.div4}>(1.8)</div>
              </div>
              <div className={styles.yield}>Yield</div>
              <div className={styles.component91302Item} />
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
              <div className={styles.component91302Inner} />
              <div className={styles.lineDiv} />
              <img
                className={styles.component91302Child1}
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
                <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
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
                <div className={styles.div4}>(1.8)</div>
              </div>
              <img className={styles.shareIcon} alt="" src="/share.svg" />
            </div>
            <img
              className={styles.groupChild29}
              alt=""
              src="/group-55034.svg"
            />
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild30} />
            <div className={styles.groupChild31} />
            <img
              className={styles.groupChild32}
              alt=""
              src="/group-55034.svg"
            />
            <div className={styles.trading}>Trading</div>
            <div className={styles.component91302}>
              <div className={styles.component91302Child} />
              <div className={styles.component1071}>
                <div className={styles.farmOwnerName}>Farm owner name</div>
              </div>
              <div className={styles.div1}>16/3/2023</div>
              <img
                className={styles.agricultureImageIcon}
                alt=""
                src="/agriculture-image15@2x.png"
              />
              <div className={styles.parent}>
                <div className={styles.div2}>{`80$ | 12 `}</div>
                <div className={styles.price}>Price</div>
                <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
              </div>
              <div className={styles.div3}>+0.87 %</div>
              <div className={styles.groupParent28}>
                <div className={styles.rectangleWrapper}>
                  <div className={styles.groupChild28} />
                </div>
                <div className={styles.m}>255M$</div>
                <div className={styles.averageRevenue}>Average revenue</div>
              </div>
              <div className={styles.starIconParent}>
                <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
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
                <div className={styles.div4}>(1.8)</div>
              </div>
              <div className={styles.yield}>Yield</div>
              <div className={styles.component91302Item} />
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
              <div className={styles.component91302Inner} />
              <div className={styles.lineDiv} />
              <img
                className={styles.component91302Child1}
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
                <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
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
                <div className={styles.div4}>(1.8)</div>
              </div>
              <img className={styles.shareIcon} alt="" src="/share.svg" />
            </div>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild34} />
            <div className={styles.groupChild35} />
            <img
              className={styles.groupChild36}
              alt=""
              src="/group-55034.svg"
            />
            <div className={styles.videos}>Videos</div>
            <div className={styles.component91327}>
              <div className={styles.component91302Child} />
              <div className={styles.component10712}>
                <div className={styles.farmOwnerName}>Farm owner name</div>
              </div>
              <div className={styles.agricultureImage}>
                <div className={styles.video} />
                <div className={styles.agricultureImageChild} />
              </div>
              <div className={styles.starIconParent2}>
                <img
                  className={styles.starIcon1}
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
                <div className={styles.div4}>(1.8)</div>
              </div>
              <div className={styles.component91327Item} />
              <div className={styles.lineDiv} />
              <div className={styles.farmOwnerName3}>Farm owner name</div>
              <div className={styles.farmLocation2}>Farm location</div>
              <img
                className={styles.component91327Child1}
                alt=""
                src="/group-54848.svg"
              />
              <img
                className={styles.component91327Child2}
                alt=""
                src="/group-548644.svg"
              />
              <div className={styles.farmName2}>Farm name</div>
              <div className={styles.farmLocation3}>Farm location</div>
              <div className={styles.iconlylightOutlinevolumeDoParent}>
                <img
                  className={styles.iconlylightOutlinevolumeDo}
                  alt=""
                  src="/iconlylightoutlinevolumedown.svg"
                />
                <div className={styles.div12}>0:25 / 3:17</div>
                <img
                  className={styles.iconAwesomeChromecast}
                  alt=""
                  src="/icon-awesomechromecast.svg"
                />
                <img
                  className={styles.groupChild37}
                  alt=""
                  src="/group-548691.svg"
                />
              </div>
              <img
                className={styles.component941}
                alt=""
                src="/component-94--1.svg"
              />
              <div className={styles.starIconParent3}>
                <img
                  className={styles.starIcon1}
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
                <div className={styles.div4}>(1.8)</div>
              </div>
              <img className={styles.shareIcon2} alt="" src="/share.svg" />
            </div>
          </div>
          <img
            className={styles.groupChild38}
            alt=""
            src="/group-55112@2x.png"
          />
          <div className={styles.rectangleParent2}>
            <div className={styles.groupChild39} />
            <div className={styles.groupChild40} />
            <img
              className={styles.groupChild41}
              alt=""
              src="/group-55034.svg"
            />
            <div className={styles.basedOnYourInterest}>
              Based On Your Interest
            </div>
            <div className={styles.component91302}>
              <div className={styles.component91302Child} />
              <div className={styles.component1071}>
                <div className={styles.farmOwnerName}>Farm owner name</div>
              </div>
              <div className={styles.div1}>16/3/2023</div>
              <img
                className={styles.agricultureImageIcon}
                alt=""
                src="/agriculture-image16@2x.png"
              />
              <div className={styles.parent}>
                <div className={styles.div2}>{`80$ | 12 `}</div>
                <div className={styles.price}>Price</div>
                <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
              </div>
              <div className={styles.div3}>+0.87 %</div>
              <div className={styles.groupParent28}>
                <div className={styles.rectangleWrapper}>
                  <div className={styles.groupChild28} />
                </div>
                <div className={styles.m}>255M$</div>
                <div className={styles.averageRevenue}>Average revenue</div>
              </div>
              <div className={styles.starIconParent}>
                <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
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
                <div className={styles.div4}>(1.8)</div>
              </div>
              <div className={styles.yield}>Yield</div>
              <div className={styles.component91302Item} />
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
              <div className={styles.component91302Inner} />
              <div className={styles.lineDiv} />
              <img
                className={styles.component91302Child1}
                alt=""
                src="/group-54810.svg"
              />
              <img
                className={styles.component941}
                alt=""
                src="/component-94--1.svg"
              />
              <div className={styles.farmName3}>Farm name</div>
              <div className={styles.farmLocation4}>Farm location</div>
              <div className={styles.starIconGroup}>
                <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
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
                <div className={styles.div4}>(1.8)</div>
              </div>
              <img className={styles.shareIcon} alt="" src="/share.svg" />
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild30} />
            <div className={styles.groupChild31} />
            <img
              className={styles.groupChild32}
              alt=""
              src="/group-55034.svg"
            />
            <div className={styles.basedOnYourInterest}>
              Recommended For You
            </div>
            <div className={styles.component91302}>
              <div className={styles.component91302Child} />
              <div className={styles.component1071}>
                <div className={styles.farmOwnerName}>Farm owner name</div>
              </div>
              <div className={styles.div1}>16/3/2023</div>
              <img
                className={styles.agricultureImageIcon}
                alt=""
                src="/agriculture-image17@2x.png"
              />
              <div className={styles.parent}>
                <div className={styles.div2}>{`80$ | 12 `}</div>
                <div className={styles.price}>Price</div>
                <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
              </div>
              <div className={styles.div3}>+0.87 %</div>
              <div className={styles.groupParent28}>
                <div className={styles.rectangleWrapper}>
                  <div className={styles.groupChild28} />
                </div>
                <div className={styles.m}>255M$</div>
                <div className={styles.averageRevenue}>Average revenue</div>
              </div>
              <div className={styles.starIconParent}>
                <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
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
                <div className={styles.div4}>(1.8)</div>
              </div>
              <div className={styles.yield}>Yield</div>
              <div className={styles.component91302Item} />
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
              <div className={styles.component91302Inner} />
              <div className={styles.lineDiv} />
              <img
                className={styles.component91302Child1}
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
                <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
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
                <div className={styles.div4}>(1.8)</div>
              </div>
              <img className={styles.shareIcon} alt="" src="/share.svg" />
            </div>
          </div>
          <div className={styles.rectangleParent4}>
            <div className={styles.groupChild47} />
            <div className={styles.groupChild48} />
            <img
              className={styles.groupChild49}
              alt=""
              src="/group-55034.svg"
            />
            <div className={styles.component91280}>
              <div className={styles.component91302Child} />
              <div className={styles.component1071}>
                <div className={styles.farmOwnerName}>Farm owner name</div>
              </div>
              <div className={styles.div1}>16/3/2023</div>
              <div className={styles.starIconParent}>
                <img
                  className={styles.starIcon1}
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
                <div className={styles.div4}>(1.8)</div>
              </div>
              <div className={styles.component91302Item} />
              <div className={styles.buyNow8}>
                <div className={styles.buyNowChild2} />
                <div className={styles.readMore}>Read More</div>
              </div>
              <img
                className={styles.agricultureImageIcon}
                alt=""
                src="/mask-group-1975@2x.png"
              />
              <div className={styles.component91280Inner} />
              <div className={styles.eiusSuntVoluptate}>
                Eius sunt voluptate quo esse magnam rem nulla dolorem optio.
                Ratione quaerat qui accusantium sunt fugit quas sed dolorem.
                Sint nostrum non eos nisi nihil voluptate. Natus ut unde dolor
                nesciunt blanditiis et cum. Sed iste inventore reprehenderit
                incidunt ipsa et. Eius sunt voluptate quo esse magnam rem nulla
                dolorem optio. Ratione quaerat qui
              </div>
              <div className={styles.article}>Article</div>
              <div className={styles.component91280Child1} />
              <img
                className={styles.component91280Child2}
                alt=""
                src="/group-54848.svg"
              />
              <div className={styles.lineDiv} />
              <div className={styles.farmName}>Farm name</div>
              <div className={styles.farmLocation}>Farm location</div>
              <img
                className={styles.component941}
                alt=""
                src="/component-94--1.svg"
              />
              <div className={styles.starIconGroup}>
                <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
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
                <div className={styles.div4}>(1.8)</div>
              </div>
              <img className={styles.shareIcon} alt="" src="/share.svg" />
            </div>
            <div className={styles.articles}>Articles</div>
          </div>
          <div className={styles.top5LeaderboardParent}>
            <div className={styles.top5Leaderboard}>Top 5 Leaderboard</div>
            <div className={styles.component1242}>
              <div className={styles.farmOwnerName}>Investors</div>
              <div className={styles.creators}>Creators</div>
              <div className={styles.component1231Parent}>
                <div
                  className={styles.component1231}
                  onClick={onComponent1231Click}
                >
                  <div className={styles.component91302Child} />
                  <div className={styles.div27}>1</div>
                  <div className={styles.investorName1Parent}>
                    <div className={styles.top5Leaderboard}>
                      Investor name 1
                    </div>
                    <img
                      className={styles.groupChild50}
                      alt=""
                      src="/group-548082.svg"
                    />
                    <div className={styles.div28}>(1.8)</div>
                  </div>
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
                  <img
                    className={styles.component1231Item}
                    alt=""
                    src="/group-55075.svg"
                  />
                </div>
                <div className={styles.component1232}>
                  <div className={styles.component91302Child} />
                  <img
                    className={styles.component1231Item}
                    alt=""
                    src="/group-548071.svg"
                  />
                  <div className={styles.div29}>2</div>
                  <div className={styles.investorName1Group}>
                    <div className={styles.investorName11}>Investor name 1</div>
                    <img
                      className={styles.groupChild51}
                      alt=""
                      src="/group-548082.svg"
                    />
                    <div className={styles.div30}>(1.8)</div>
                    <div className={styles.groupWrapper}>
                      <div className={styles.path44461Group}>
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
                        <b className={styles.b1}>2</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.component1233}>
                  <div className={styles.component91302Child} />
                  <img
                    className={styles.component1231Item}
                    alt=""
                    src="/group-548072.svg"
                  />
                  <div className={styles.div27}>3</div>
                  <div className={styles.investorName1Parent}>
                    <div className={styles.top5Leaderboard}>
                      Investor name 1
                    </div>
                    <img
                      className={styles.groupChild50}
                      alt=""
                      src="/group-548082.svg"
                    />
                    <div className={styles.div28}>(1.8)</div>
                  </div>
                  <div className={styles.component1233Inner}>
                    <div className={styles.path44461Group}>
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
                        className={styles.path44464Icon2}
                        alt=""
                        src="/path-444642.svg"
                      />
                      <img
                        className={styles.path44465Icon}
                        alt=""
                        src="/path-444652.svg"
                      />
                      <b className={styles.b1}>3</b>
                    </div>
                  </div>
                </div>
                <div className={styles.component1232}>
                  <div className={styles.component91302Child} />
                  <img
                    className={styles.component1231Item}
                    alt=""
                    src="/group-548073.svg"
                  />
                  <div className={styles.div29}>4</div>
                  <div className={styles.investorName1Parent1}>
                    <div className={styles.top5Leaderboard}>
                      Investor name 1
                    </div>
                    <img
                      className={styles.groupChild50}
                      alt=""
                      src="/group-548082.svg"
                    />
                    <div className={styles.div28}>(1.8)</div>
                  </div>
                </div>
                <div className={styles.component1232}>
                  <div className={styles.component91302Child} />
                  <div className={styles.div29}>5</div>
                  <div className={styles.investorName1Parent1}>
                    <div className={styles.top5Leaderboard}>
                      Investor name 1
                    </div>
                    <img
                      className={styles.groupChild50}
                      alt=""
                      src="/group-548082.svg"
                    />
                    <div className={styles.div28}>(1.8)</div>
                  </div>
                  <img
                    className={styles.component1231Item}
                    alt=""
                    src="/group-55074.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.investorWizardInner}>
          <img
            className={styles.groupChild55}
            alt=""
            src="/group-55010@2x.png"
          />
        </div>
        <div className={styles.component1302} onClick={openFilter}>
          <div className={styles.component1302Child} />
          <img
            className={styles.component1302Item}
            alt=""
            src="/group-54872.svg"
          />
        </div>
        <img
          className={styles.component11814}
          alt=""
          src="/component-118--1.svg"
        />
      </div>
      {isFilterOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFilter}
        >
          <Filter onClose={closeFilter} />
        </PortalPopup>
      )}
    </>
  );
};

export default InvestorWizard1;
