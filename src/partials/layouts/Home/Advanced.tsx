import styles from "../../../styles/layouts/Home/Advanced.module.css";

const items = [
  {
    icon: "brand-recognition",
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links " +
      "don't mean a thing. Branded links help instil confidence in your " +
      "confidence in your content.",
  },
  {
    icon: "detailed-records",
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and " +
      "where people engage with your content helps inform better decisions.",
  },
  {
    icon: "fully-customizable",
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverablity trough " +
      "customisable links, supercharging audience engagement.",
  },
];

export default function Advanced() {
  return (
    <section className={`bg-veryLightViolet sm:pb-28 pb-24 sm:pt-16 pt-9`}>
      <div className="container">
        <div className="text-center space-y-4 max-w-md mt-14 mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl text-veryDarkViolet mx-auto">
            Advanced Statistics
          </h2>
          <p className="text-grayishViolet mx-auto text-[17px]">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="sm:mt-20 mt-16 max-w-[1110px] mx-auto relative">
          <div className="absolute lg:bottom-1/2 lg:left-0 lg:w-full lg:h-2 lg:top-auto bg-cyan z-10 top-0 left-[calc(50%-0.25rem)] h-full w-2"></div>
          <div className="lg:space-x-8 flex lg:flex-row flex-col">
            {items.map((item, i) => (
              <div className={styles.item} key={i}>
                <div className="mx-auto lg:mx-0 -mt-9 mb-8 rounded-[50%] bg-darkViolet w-[4.5rem] h-[4.5rem] grid place-items-center">
                  <img src={`/images/icon-${item.icon}.svg`} />
                </div>
                <h3 className="text-2xl">{item.title}</h3>
                <p className="text-grayishViolet text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
