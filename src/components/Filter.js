import styles from "./Filter.module.css";
const Filter = ({ onClose }) => {
  return (
    <div className={styles.filter}>
      <div className={styles.filterChild} />
      <div className={styles.indicatorWrapper}>
        <div className={styles.indicator} />
      </div>
      <div className={styles.rate}>
        <div className={styles.div}>4.5</div>
        <img className={styles.starIcon} alt="" src="/star.svg" />
      </div>
      <div className={styles.groupParent}>
        <div className={styles.priceParent}>
          <div className={styles.price}>price</div>
          <div className={styles.groupContainer}>
            <img className={styles.groupChild} alt="" src="/group-54878.svg" />
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>100</div>
          </div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.yieldWrapper}>
            <div className={styles.yield}>Yield</div>
          </div>
          <div className={styles.groupContainer}>
            <img className={styles.groupChild} alt="" src="/group-548781.svg" />
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>100</div>
          </div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.averageRevenueWrapper}>
            <div className={styles.yield}>Average Revenue</div>
          </div>
          <div className={styles.groupContainer}>
            <img className={styles.groupChild} alt="" src="/group-548781.svg" />
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>100</div>
          </div>
        </div>
        <div className={styles.locationParent}>
          <div className={styles.location}>location</div>
          <div className={styles.rectangleDiv} />
          <div className={styles.allLocations}>All locations</div>
          <img className={styles.path44489Icon} alt="" src="/path-44489.svg" />
        </div>
        <div className={styles.groupParent4}>
          <img className={styles.groupIcon} alt="" src="/group-54887.svg" />
          <div className={styles.rank}>Rank</div>
        </div>
      </div>
      <div className={styles.component595}>
        <div className={styles.component595Child} />
        <div className={styles.apply}>Apply</div>
      </div>
      <div className={styles.filters}>Filters</div>
    </div>
  );
};

export default Filter;
