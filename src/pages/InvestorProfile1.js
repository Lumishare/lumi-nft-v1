import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InvestorProfile1.module.css";
const InvestorProfile1 = () => {
  const navigate = useNavigate();

  const onAgricultureImageClick = useCallback(() => {
    navigate("/farm-profile1");
  }, [navigate]);

  return (
    <div className={styles.investorProfile}>
      <div className={styles.investmentHistoryParent}>
        <div className={styles.investmentHistory}>Investment History</div>
        <div className={styles.scrollGroup35}>
          <div className={styles.repeatGrid34}>
            <div className={styles.div}>
              <div className={styles.component91323}>
                <div className={styles.component91323Child} />
                <div className={styles.component1071}>
                  <div className={styles.farmOwnerName}>Farm owner name</div>
                </div>
                <div className={styles.div1}>16/3/2023</div>
                <img
                  className={styles.agricultureImageIcon}
                  alt=""
                  src="/agriculture-image@2x.png"
                  onClick={onAgricultureImageClick}
                />
                <div className={styles.parent}>
                  <div className={styles.div2}>{`80$ | 12 `}</div>
                  <div className={styles.price}>Price</div>
                  <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                </div>
                <div className={styles.div3}>+0.87 %</div>
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
                  <div className={styles.div4}>(1.8)</div>
                </div>
                <div className={styles.yield}>Yield</div>
                <div className={styles.component91323Item} />
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
                <div className={styles.component91323Inner} />
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
                  <div className={styles.div4}>(1.8)</div>
                </div>
                <img className={styles.shareIcon} alt="" src="/share.svg" />
              </div>
            </div>
            <div className={styles.div6}>
              <div className={styles.component91323}>
                <div className={styles.component91323Child} />
                <div className={styles.component1071}>
                  <div className={styles.farmOwnerName}>Farm owner name</div>
                </div>
                <div className={styles.div1}>16/3/2023</div>
                <img
                  className={styles.agricultureImageIcon1}
                  alt=""
                  src="/agriculture-image13@2x.png"
                />
                <div className={styles.parent}>
                  <div className={styles.div2}>{`80$ | 12 `}</div>
                  <div className={styles.price}>Price</div>
                  <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                </div>
                <div className={styles.div3}>+0.87 %</div>
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
                  <div className={styles.div4}>(1.8)</div>
                </div>
                <div className={styles.yield}>Yield</div>
                <div className={styles.component91323Item} />
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
                <div className={styles.component91323Inner} />
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
                  <div className={styles.div4}>(1.8)</div>
                </div>
                <img className={styles.shareIcon} alt="" src="/share.svg" />
              </div>
            </div>
            <div className={styles.div12}>
              <div className={styles.component91323}>
                <div className={styles.component91323Child} />
                <div className={styles.component1071}>
                  <div className={styles.farmOwnerName}>Farm owner name</div>
                </div>
                <div className={styles.div1}>16/3/2023</div>
                <img
                  className={styles.agricultureImageIcon1}
                  alt=""
                  src="/agriculture-image13@2x.png"
                />
                <div className={styles.parent}>
                  <div className={styles.div2}>{`80$ | 12 `}</div>
                  <div className={styles.price}>Price</div>
                  <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                </div>
                <div className={styles.div3}>+0.87 %</div>
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
                  <div className={styles.div4}>(1.8)</div>
                </div>
                <div className={styles.yield}>Yield</div>
                <div className={styles.component91323Item} />
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
                <div className={styles.component91323Inner} />
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
                  <div className={styles.div4}>(1.8)</div>
                </div>
                <img className={styles.shareIcon} alt="" src="/share.svg" />
              </div>
            </div>
            <div className={styles.div18}>
              <div className={styles.component91323}>
                <div className={styles.component91323Child} />
                <div className={styles.component1071}>
                  <div className={styles.farmOwnerName}>Farm owner name</div>
                </div>
                <div className={styles.div1}>16/3/2023</div>
                <img
                  className={styles.agricultureImageIcon1}
                  alt=""
                  src="/agriculture-image13@2x.png"
                />
                <div className={styles.parent}>
                  <div className={styles.div2}>{`80$ | 12 `}</div>
                  <div className={styles.price}>Price</div>
                  <img className={styles.lumiIcon} alt="" src="/lumi.svg" />
                </div>
                <div className={styles.div3}>+0.87 %</div>
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
                  <div className={styles.div4}>(1.8)</div>
                </div>
                <div className={styles.yield}>Yield</div>
                <div className={styles.component91323Item} />
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
                <div className={styles.component91323Inner} />
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
                  <div className={styles.div4}>(1.8)</div>
                </div>
                <img className={styles.shareIcon} alt="" src="/share.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.maskGroup201}
        alt=""
        src="/mask-group-201@2x.png"
      />
      <div className={styles.rate}>
        <div className={styles.div24}>4.5</div>
        <img className={styles.starIcon8} alt="" src="/star.svg" />
      </div>
      <div className={styles.investorNameWrapper}>
        <div className={styles.investorName}>Investor Name</div>
      </div>
      <img
        className={styles.investorProfileChild}
        alt=""
        src="/group-54814.svg"
      />
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
      <img
        className={styles.investorProfileItem}
        alt=""
        src="/group-55054.svg"
      />
      <img
        className={styles.investorProfileInner}
        alt=""
        src="/group-55060.svg"
      />
      <div className={styles.starIconParent5}>
        <img className={styles.starIcon9} alt="" src="/star-icon.svg" />
        <img className={styles.iconAwesomeStar32} alt="" src="/star-icon.svg" />
        <img className={styles.iconAwesomeStar33} alt="" src="/star-icon.svg" />
        <img className={styles.iconAwesomeStar34} alt="" src="/star-icon.svg" />
        <img
          className={styles.iconAwesomeStar35}
          alt=""
          src="/icon-awesomestar.svg"
        />
        <div className={styles.div25}>(1.8)</div>
      </div>
      <div className={styles.groupParent3}>
        <div className={styles.sendAMessageWrapper}>
          <div className={styles.sendAMessage}>Send a Message</div>
        </div>
        <div className={styles.component1054}>
          <div className={styles.component1054Child} />
          <div className={styles.followWrapper}>
            <div className={styles.follow}>Follow</div>
          </div>
        </div>
      </div>
      <div className={styles.followersParent}>
        <div className={styles.followers}>Followers</div>
        <div className={styles.following}>Following</div>
        <div className={styles.posts}>Posts</div>
        <div className={styles.mWrapper}>
          <div className={styles.m4}>5.6M</div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.m4}>152</div>
        </div>
        <div className={styles.frame}>
          <div className={styles.m4}>1,529</div>
        </div>
      </div>
      <div className={styles.component10838Parent}>
        <img
          className={styles.component10838}
          alt=""
          src="/component-108--38.svg"
        />
        <img
          className={styles.component10838}
          alt=""
          src="/component-108--37.svg"
        />
        <img
          className={styles.component10838}
          alt=""
          src="/component-108--36.svg"
        />
        <img
          className={styles.component10838}
          alt=""
          src="/component-108--35.svg"
        />
      </div>
      <div className={styles.energyIProduceParent}>
        <div className={styles.energyIProduce}>Energy I Produce</div>
        <div className={styles.component1275}>
          <div className={styles.groupParent4}>
            <div className={styles.groupParent5}>
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
              <div className={styles.component91323}>
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
                  <div className={styles.groupParent6}>
                    <div className={styles.groupWrapper}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.groupChild1} />
                        <div className={styles.groupChild2} />
                        <div className={styles.groupChild3} />
                      </div>
                    </div>
                    <div className={styles.groupParent7}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild4} />
                        <div className={styles.groupChild5} />
                      </div>
                      <div className={styles.groupChild6} />
                    </div>
                    <div className={styles.rectangleParent1}>
                      <div className={styles.groupChild7} />
                      <div className={styles.rectangleParent2}>
                        <div className={styles.groupChild8} />
                        <div className={styles.groupChild9} />
                      </div>
                    </div>
                    <div className={styles.groupParent7}>
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
                    <div className={styles.rectangleParent5}>
                      <div className={styles.groupChild16} />
                      <div className={styles.rectangleParent6}>
                        <div className={styles.groupChild17} />
                        <div className={styles.groupChild18} />
                      </div>
                    </div>
                    <div className={styles.rectangleParent1}>
                      <div className={styles.groupChild7} />
                      <div className={styles.rectangleParent2}>
                        <div className={styles.groupChild8} />
                        <div className={styles.groupChild9} />
                      </div>
                    </div>
                    <div className={styles.groupParent7}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild4} />
                        <div className={styles.groupChild5} />
                      </div>
                      <div className={styles.groupChild6} />
                    </div>
                    <div className={styles.rectangleParent10}>
                      <div className={styles.groupChild25} />
                      <div className={styles.rectangleParent11}>
                        <div className={styles.groupChild26} />
                        <div className={styles.groupChild27} />
                      </div>
                    </div>
                    <div className={styles.groupParent9}>
                      <div className={styles.rectangleParent12}>
                        <div className={styles.groupChild28} />
                        <div className={styles.groupChild29} />
                      </div>
                      <div className={styles.groupChild6} />
                    </div>
                    <div className={styles.groupParent10}>
                      <div className={styles.rectangleParent13}>
                        <div className={styles.groupChild31} />
                        <div className={styles.groupChild32} />
                      </div>
                      <div className={styles.groupChild6} />
                    </div>
                    <div className={styles.rectangleParent1}>
                      <div className={styles.groupChild7} />
                      <div className={styles.rectangleParent2}>
                        <div className={styles.groupChild8} />
                        <div className={styles.groupChild9} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.parent2}>
                    <div className={styles.div28}>10:00</div>
                    <div className={styles.div28}>11:00</div>
                    <div className={styles.div28}>12:00</div>
                    <div className={styles.div28}>13:00</div>
                    <div className={styles.div28}>14:00</div>
                    <div className={styles.div28}>15:00</div>
                    <div className={styles.div34}>16:00</div>
                    <div className={styles.div34}>17:00</div>
                    <div className={styles.div28}>18:00</div>
                    <div className={styles.div28}>19:00</div>
                    <div className={styles.div28}>20:00</div>
                    <div className={styles.div28}>21:00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.groupParent11}>
              <div className={styles.rectangleParent16}>
                <div className={styles.groupChild37} />
                <div className={styles.pvSystem93}>PV System 93 kWh</div>
              </div>
              <div className={styles.rectangleParent17}>
                <div className={styles.groupChild38} />
                <div className={styles.pvSystem93}>PV System 93 kWh</div>
              </div>
              <div className={styles.rectangleParent18}>
                <div className={styles.groupChild39} />
                <div className={styles.pvSystem93}>PV System 93 kWh</div>
              </div>
            </div>
          </div>
          <div className={styles.scrollGroup36}>
            <div className={styles.groupParent12}>
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
                  <span className={styles.span}>2</span>
                  <span> avoidance</span>
                </div>
                <div className={styles.kwh9}>684.58 t</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.component11818}
        alt=""
        src="/component-118--1.svg"
      />
    </div>
  );
};

export default InvestorProfile1;
