import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FarmProfile1.module.css";
const FarmProfile1 = () => {
  const navigate = useNavigate();

  const onFarmProfileContainerClick = useCallback(() => {
    navigate("/after-scrolling-the-title-will-appear-on-top");
  }, [navigate]);

  return (
    <div className={styles.farmProfile} onClick={onFarmProfileContainerClick}>
      <div className={styles.rate}>
        <div className={styles.div}>4.5</div>
        <img className={styles.starIcon} alt="" src="/star.svg" />
      </div>
      <div className={styles.scrollGroup32}>
        <div className={styles.repeatGrid30}>
          <div className={styles.div1}>
            <img className={styles.x512Icon} alt="" src="/1024x512@2x.png" />
          </div>
          <div className={styles.div2}>
            <img className={styles.x512Icon} alt="" src="/1024x512@2x.png" />
          </div>
          <div className={styles.div3}>
            <img className={styles.x512Icon} alt="" src="/1024x512@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.farmNameParent}>
        <div className={styles.farmName}>Farm name</div>
        <div className={styles.by}>{`By `}</div>
        <div className={styles.creatorName}>
          <span>Creator Name</span>
          <span className={styles.span} />
        </div>
      </div>
      <img className={styles.farmProfileChild} alt="" src="/group-55040.svg" />
      <img className={styles.farmProfileItem} alt="" src="/group-54814.svg" />
      <div className={styles.starIconParent}>
        <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
        <img className={styles.iconAwesomeStar} alt="" src="/star-icon.svg" />
        <img className={styles.iconAwesomeStar1} alt="" src="/star-icon.svg" />
        <img className={styles.iconAwesomeStar2} alt="" src="/star-icon.svg" />
        <img
          className={styles.iconAwesomeStar3}
          alt=""
          src="/icon-awesomestar.svg"
        />
        <div className={styles.div4}>(1.8)</div>
      </div>
      <div className={styles.descriptionLoremIpsumDolorParent}>
        <div
          className={styles.descriptionLoremIpsum}
        >{`Description Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. `}</div>
        <div className={styles.seeMoreParent}>
          <div className={styles.seeMore}>See more</div>
          <div className={styles.unionWrapper}>
            <img className={styles.unionIcon} alt="" src="/union.svg" />
          </div>
        </div>
      </div>
      <div className={styles.component1162Parent}>
        <div className={styles.component1162}>
          <div className={styles.component1162Child} />
          <div className={styles.iconlylightOutlinebuyParent}>
            <img
              className={styles.iconlylightOutlinebuy}
              alt=""
              src="/iconlylightoutlinebuy1.svg"
            />
            <div className={styles.addToCart}>Add to cart</div>
          </div>
        </div>
        <div className={styles.component1172}>
          <div className={styles.component1172Child} />
          <div className={styles.buyNow}>Buy Now</div>
        </div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.lumiParent}>
          <div className={styles.lumi}>+0.87 LUMI</div>
          <div className={styles.yield}>Yield</div>
        </div>
        <div className={styles.priceParent}>
          <div className={styles.price}>Price</div>
          <div className={styles.parent}>
            <div className={styles.div5}>{`80$ | 12 `}</div>
            <img
              className={styles.path44469Icon}
              alt=""
              src="/path-44469.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.m}>255M$</div>
        <div className={styles.averageRevenue}>Average revenue</div>
      </div>
      <div className={styles.electricityProducedParent}>
        <div className={styles.electricityProduced}>Electricity Produced</div>
        <div className={styles.component1271}>
          <div className={styles.groupDiv}>
            <div className={styles.groupParent1}>
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
                <img
                  className={styles.xAxisLine}
                  alt=""
                  src="/x-axis-line1.svg"
                />
                <div className={styles.kwh2}>0kWh</div>
                <div className={styles.kwh3}>100kWh</div>
                <div className={styles.kwh4}>200kWh</div>
                <div className={styles.kwh5}>300kWh</div>
                <div className={styles.kwh6}>400kWh</div>
                <div className={styles.kwh7}>500kWh</div>
                <div className={styles.kwh8}>600kWh</div>
                <div className={styles.scrollGroup30}>
                  <div className={styles.groupParent2}>
                    <div className={styles.groupWrapper}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.groupItem} />
                        <div className={styles.groupInner} />
                        <div className={styles.rectangleDiv} />
                      </div>
                    </div>
                    <div className={styles.groupParent3}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild1} />
                        <div className={styles.groupChild2} />
                      </div>
                      <div className={styles.groupChild3} />
                    </div>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild4} />
                      <div className={styles.rectangleParent1}>
                        <div className={styles.groupChild5} />
                        <div className={styles.groupChild6} />
                      </div>
                    </div>
                    <div className={styles.groupParent3}>
                      <div className={styles.groupChild7} />
                      <div className={styles.groupChild8} />
                      <div className={styles.groupChild9} />
                    </div>
                    <div className={styles.groupWrapper}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.groupItem} />
                        <div className={styles.groupInner} />
                        <div className={styles.rectangleDiv} />
                      </div>
                    </div>
                    <div className={styles.rectangleParent4}>
                      <div className={styles.groupChild13} />
                      <div className={styles.rectangleParent5}>
                        <div className={styles.groupChild14} />
                        <div className={styles.groupChild15} />
                      </div>
                    </div>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild4} />
                      <div className={styles.rectangleParent1}>
                        <div className={styles.groupChild5} />
                        <div className={styles.groupChild6} />
                      </div>
                    </div>
                    <div className={styles.groupParent3}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild1} />
                        <div className={styles.groupChild2} />
                      </div>
                      <div className={styles.groupChild3} />
                    </div>
                    <div className={styles.rectangleParent9}>
                      <div className={styles.groupChild22} />
                      <div className={styles.rectangleParent10}>
                        <div className={styles.groupChild23} />
                        <div className={styles.groupChild24} />
                      </div>
                    </div>
                    <div className={styles.groupParent5}>
                      <div className={styles.rectangleParent11}>
                        <div className={styles.groupChild25} />
                        <div className={styles.groupChild26} />
                      </div>
                      <div className={styles.groupChild3} />
                    </div>
                    <div className={styles.groupParent6}>
                      <div className={styles.rectangleParent12}>
                        <div className={styles.groupChild28} />
                        <div className={styles.groupChild29} />
                      </div>
                      <div className={styles.groupChild3} />
                    </div>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild4} />
                      <div className={styles.rectangleParent1}>
                        <div className={styles.groupChild5} />
                        <div className={styles.groupChild6} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.group}>
                    <div className={styles.div6}>10:00</div>
                    <div className={styles.div6}>11:00</div>
                    <div className={styles.div6}>12:00</div>
                    <div className={styles.div6}>13:00</div>
                    <div className={styles.div6}>14:00</div>
                    <div className={styles.div6}>15:00</div>
                    <div className={styles.div12}>16:00</div>
                    <div className={styles.div12}>17:00</div>
                    <div className={styles.div6}>18:00</div>
                    <div className={styles.div6}>19:00</div>
                    <div className={styles.div6}>20:00</div>
                    <div className={styles.div6}>21:00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.groupParent7}>
              <div className={styles.rectangleParent15}>
                <div className={styles.groupChild34} />
                <div className={styles.pvSystem93}>PV System 93 kWh</div>
              </div>
              <div className={styles.rectangleParent16}>
                <div className={styles.groupChild35} />
                <div className={styles.pvSystem93}>PV System 93 kWh</div>
              </div>
              <div className={styles.rectangleParent17}>
                <div className={styles.groupChild36} />
                <div className={styles.pvSystem93}>PV System 93 kWh</div>
              </div>
            </div>
          </div>
          <div className={styles.liveParent}>
            <div className={styles.live}>Live</div>
            <div className={styles.monthly}>Monthly</div>
            <div className={styles.yearly}>Yearly</div>
          </div>
          <div className={styles.scrollGroup36}>
            <div className={styles.groupParent8}>
              <div className={styles.dailyOutputParent}>
                <div className={styles.dailyOutput1}>Daily output:</div>
                <div className={styles.kwh9}>54.09 kWh</div>
              </div>
              <div className={styles.monthlyOutputParent}>
                <div className={styles.dailyOutput1}>Monthly output:</div>
                <div className={styles.kwh9}>4,786.21 kWh</div>
              </div>
              <div className={styles.totalOutputParent}>
                <div className={styles.dailyOutput1}>Total output:</div>
                <div className={styles.kwh9}>1,221.75 MWh</div>
              </div>
              <div className={styles.co2AvoidanceParent}>
                <div className={styles.dailyOutput1}>
                  <span>CO</span>
                  <span className={styles.span1}>2</span>
                  <span> avoidance</span>
                </div>
                <div className={styles.kwh9}>684.58 t</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.feedInTariffParent}>
        <div className={styles.electricityProduced}>Feed-In Tariff</div>
        <div className={styles.component1272}>
          <div className={styles.groupDiv}>
            <div className={styles.groupParent1}>
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
                <img
                  className={styles.xAxisLine}
                  alt=""
                  src="/x-axis-line1.svg"
                />
                <div className={styles.kwh2}>0kWh</div>
                <div className={styles.kwh3}>100kWh</div>
                <div className={styles.kwh4}>200kWh</div>
                <div className={styles.kwh5}>300kWh</div>
                <div className={styles.kwh6}>400kWh</div>
                <div className={styles.kwh7}>500kWh</div>
                <div className={styles.kwh8}>600kWh</div>
                <div className={styles.scrollGroup30}>
                  <div className={styles.groupParent2}>
                    <div className={styles.groupWrapper}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.groupItem} />
                        <div className={styles.groupInner} />
                        <div className={styles.rectangleDiv} />
                      </div>
                    </div>
                    <div className={styles.groupParent3}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild1} />
                        <div className={styles.groupChild2} />
                      </div>
                      <div className={styles.groupChild3} />
                    </div>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild4} />
                      <div className={styles.rectangleParent1}>
                        <div className={styles.groupChild5} />
                        <div className={styles.groupChild6} />
                      </div>
                    </div>
                    <div className={styles.groupParent3}>
                      <div className={styles.groupChild7} />
                      <div className={styles.groupChild8} />
                      <div className={styles.groupChild9} />
                    </div>
                    <div className={styles.groupWrapper}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.groupItem} />
                        <div className={styles.groupInner} />
                        <div className={styles.rectangleDiv} />
                      </div>
                    </div>
                    <div className={styles.rectangleParent4}>
                      <div className={styles.groupChild13} />
                      <div className={styles.rectangleParent5}>
                        <div className={styles.groupChild14} />
                        <div className={styles.groupChild15} />
                      </div>
                    </div>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild4} />
                      <div className={styles.rectangleParent1}>
                        <div className={styles.groupChild5} />
                        <div className={styles.groupChild6} />
                      </div>
                    </div>
                    <div className={styles.groupParent3}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild1} />
                        <div className={styles.groupChild2} />
                      </div>
                      <div className={styles.groupChild3} />
                    </div>
                    <div className={styles.rectangleParent9}>
                      <div className={styles.groupChild22} />
                      <div className={styles.rectangleParent10}>
                        <div className={styles.groupChild23} />
                        <div className={styles.groupChild24} />
                      </div>
                    </div>
                    <div className={styles.groupParent5}>
                      <div className={styles.rectangleParent11}>
                        <div className={styles.groupChild25} />
                        <div className={styles.groupChild26} />
                      </div>
                      <div className={styles.groupChild3} />
                    </div>
                    <div className={styles.groupParent6}>
                      <div className={styles.rectangleParent12}>
                        <div className={styles.groupChild28} />
                        <div className={styles.groupChild29} />
                      </div>
                      <div className={styles.groupChild3} />
                    </div>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupChild4} />
                      <div className={styles.rectangleParent1}>
                        <div className={styles.groupChild5} />
                        <div className={styles.groupChild6} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.group}>
                    <div className={styles.div6}>10:00</div>
                    <div className={styles.div6}>11:00</div>
                    <div className={styles.div6}>12:00</div>
                    <div className={styles.div6}>13:00</div>
                    <div className={styles.div6}>14:00</div>
                    <div className={styles.div6}>15:00</div>
                    <div className={styles.div12}>16:00</div>
                    <div className={styles.div12}>17:00</div>
                    <div className={styles.div6}>18:00</div>
                    <div className={styles.div6}>19:00</div>
                    <div className={styles.div6}>20:00</div>
                    <div className={styles.div6}>21:00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.groupParent7}>
              <div className={styles.rectangleParent15}>
                <div className={styles.groupChild34} />
                <div className={styles.pvSystem93}>PV System 93 kWh</div>
              </div>
              <div className={styles.rectangleParent16}>
                <div className={styles.groupChild35} />
                <div className={styles.pvSystem93}>PV System 93 kWh</div>
              </div>
              <div className={styles.rectangleParent17}>
                <div className={styles.groupChild36} />
                <div className={styles.pvSystem93}>PV System 93 kWh</div>
              </div>
            </div>
          </div>
          <div className={styles.scrollGroup361}>
            <div className={styles.groupParent8}>
              <div className={styles.dailyOutputParent}>
                <div className={styles.dailyOutput1}>Daily output:</div>
                <div className={styles.kwh9}>54.09 kWh</div>
              </div>
              <div className={styles.monthlyOutputParent}>
                <div className={styles.dailyOutput1}>Monthly output:</div>
                <div className={styles.kwh9}>4,786.21 kWh</div>
              </div>
              <div className={styles.totalOutputParent}>
                <div className={styles.dailyOutput1}>Total output:</div>
                <div className={styles.kwh9}>1,221.75 MWh</div>
              </div>
              <div className={styles.co2AvoidanceParent}>
                <div className={styles.dailyOutput1}>
                  <span>CO</span>
                  <span className={styles.span1}>2</span>
                  <span> avoidance</span>
                </div>
                <div className={styles.kwh9}>684.58 t</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.groupParent18}>
        <div className={styles.agricultureImageParent}>
          <div className={styles.agricultureImage}>
            <div className={styles.pexelsVideos1276083} />
          </div>
          <img className={styles.groupIcon} alt="" src="/group-548692.svg" />
          <img className={styles.groupChild76} alt="" src="/group-548645.svg" />
          <div className={styles.iconAwesomePlayParent}>
            <img
              className={styles.iconAwesomePlay}
              alt=""
              src="/icon-awesomeplay2.svg"
            />
            <img
              className={styles.groupChild77}
              alt=""
              src="/group-548671.svg"
            />
            <div className={styles.div30}>0:25 / 3:17</div>
          </div>
          <img
            className={styles.iconAwesomeChromecast}
            alt=""
            src="/icon-awesomechromecast1.svg"
          />
          <div className={styles.liveGroup}>
            <div className={styles.live1}>Live</div>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-20251.svg"
            />
          </div>
        </div>
        <div className={styles.farmLive247}>Farm LIVE 24/7</div>
      </div>
      <div className={styles.locationParent}>
        <div className={styles.location}>Location</div>
        <img
          className={styles.maskGroup198}
          alt=""
          src="/mask-group-1981@2x.png"
        />
        <img className={styles.groupChild78} alt="" src="/group-55049.svg" />
      </div>
      <img className={styles.farmProfileInner} alt="" src="/group-550541.svg" />
      <img
        className={styles.component11815}
        alt=""
        src="/component-118--1.svg"
      />
    </div>
  );
};

export default FarmProfile1;
