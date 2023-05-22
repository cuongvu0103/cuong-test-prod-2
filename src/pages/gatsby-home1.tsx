import * as React from "react";
import { FunctionComponent, useCallback } from "react";
import {
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
} from "@mui/material";
import { Button as ChakraButton } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import * as styles from "./gatsby-home1.module.css";
const GatsbyHome1: FunctionComponent = () => {
  const onSearchFlightsButtonClick = useCallback(() => {
    // Please sync "Gatsby Home2" to the project
  }, []);

  return (
    <div className={styles.gatsbyHome1}>
      <div className={styles.heroSection}>
        <header className={styles.topHeader}>
          <div className={styles.locoEats}>LOCO EATS</div>
          <div className={styles.topContainer}>
            <button className={styles.fickleflightLogo} />
            <div className={styles.navigationRight}>
              <div className={styles.navigationMenu}>
                <button className={styles.explore}>Explore</button>
                <div className={styles.search}>Search</div>
                <div className={styles.search}>Hotels</div>
                <button className={styles.offers}>Offers</button>
              </div>
              <div className={styles.accountSection}>
                <img
                  className={styles.hamburgerMenuIcon}
                  alt=""
                  src="/notification.svg"
                />
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="/notification1.svg"
                />
                <img
                  className={styles.profilePictureIcon}
                  alt=""
                  src="/top_avatar@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <div className={styles.searchSection}>
          <div className={styles.bannerGradient} />
          <img
            className={styles.bannerBackground}
            alt=""
            src="/banner--background@2x.png"
          />
          <div className={styles.searchContainer}>
            <div className={styles.title}>
              <div
                className={styles.letsExplore}
              >{`Let’s explore & eat around PAKISTAN`}</div>
              <div className={styles.findTheBest}>
                Find the best cafes and the most popular diners!
              </div>
            </div>
            <div className={styles.searchForm}>
              <div className={styles.formTitleGroup}>
                <b className={styles.searchCafes}>Search CAFES</b>
                <div className={styles.flightOptions}>
                  <div className={styles.flightType}>
                    <FormControlLabel
                      className={styles.radio}
                      label="Return"
                      labelPlacement="end"
                      control={<Radio size="medium" />}
                    />
                    <FormControlLabel
                      className={styles.radio1}
                      label="One-way"
                      labelPlacement="end"
                      control={<Radio color="primary" checked size="medium" />}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.formInputsRow}>
                <div className={styles.inputsRow}>
                  <Autocomplete
                    className={styles.departureField}
                    disablePortal
                    options={[
                      "Singapore (SIN)",
                      "Sydney (SYD)",
                      "Siem Reap (REP)",
                      "Shanghai (PVG)",
                      "Sanya (SYX)",
                    ]}
                    renderInput={(params: any) => (
                      <TextField
                        {...params}
                        color="primary"
                        label="Departure"
                        variant="outlined"
                        placeholder=""
                        helperText=""
                      />
                    )}
                    defaultValue="Singapore -  Changi (SIN)"
                    size="medium"
                  />
                  <div className={styles.arrivalField}>
                    <div className={styles.input}>
                      <div className={styles.labelContainer}>
                        <div className={styles.city}>City</div>
                      </div>
                      <div className={styles.active}>
                        <div className={styles.muiautocompletetag}>
                          <div className={styles.chip}>
                            <div className={styles.container}>
                              <div className={styles.avatar}>
                                <div className={styles.op}>F</div>
                              </div>
                              <div className={styles.typography}>
                                <div className={styles.chip1}>Chip</div>
                              </div>
                              <img
                                className={styles.notificationBellIcon}
                                alt=""
                                src="/cancel.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.chip}>
                            <div className={styles.container}>
                              <div className={styles.avatar}>
                                <div className={styles.op}>F</div>
                              </div>
                              <div className={styles.typography}>
                                <div className={styles.chip1}>Chip</div>
                              </div>
                              <img
                                className={styles.notificationBellIcon}
                                alt=""
                                src="/cancel.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.islamabad}>Islamabad</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.buttonGroup}>
                  <button
                    className={styles.searchFlightsButton}
                    onClick={onSearchFlightsButtonClick}
                  >
                    <div className={styles.button}>GO Home 2</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homeContents}>
        <div className={styles.upcomingFlightSection}>
          <div className={styles.upcomingFlightSection1}>
            <b className={styles.recentSearches}>Recent Searches</b>
            <div className={styles.flightDetails}>
              <div className={styles.prepareMenu}>
                <div className={styles.recentSearches}>
                  Prepare for your trip
                </div>
                <div className={styles.tripMenus}>
                  <button className={styles.hotel}>
                    <img
                      className={styles.hotelIcon}
                      alt=""
                      src="/hotel-icon.svg"
                    />
                    <div className={styles.hotel1}>Hotel</div>
                  </button>
                  <button className={styles.hotel}>
                    <div className={styles.hotelIcon}>
                      <div className={styles.background} />
                      <img
                        className={styles.ticketIcon}
                        alt=""
                        src="/ticket.svg"
                      />
                    </div>
                    <div className={styles.attractions1}>Attractions</div>
                  </button>
                  <div className={styles.eats}>
                    <button className={styles.eatsIcon}>
                      <div className={styles.background1} />
                      <img
                        className={styles.cutleryIcon}
                        alt=""
                        src="/cutlery.svg"
                      />
                    </button>
                    <div className={styles.eats1}>Eats</div>
                  </div>
                  <button className={styles.hotel}>
                    <ChakraButton
                      className={styles.search}
                      variant="solid"
                      w="65.38703918457031px"
                      colorScheme="yellow"
                      rightIcon={<ArrowForwardIcon />}
                    >
                      Button
                    </ChakraButton>
                    <div className={styles.attractions1}>Commute</div>
                  </button>
                  <button className={styles.hotel}>
                    <div className={styles.taxiIcon}>
                      <div className={styles.background2} />
                      <img
                        className={styles.taxiIcon1}
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                    <div className={styles.taxi1}>Taxi</div>
                  </button>
                  <button className={styles.movies} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.popDestinationsMain}>
          <div className={styles.destinationsTitles}>
            <div className={styles.titleContainer}>
              <b className={styles.recentSearches}>Plan your next trip</b>
              <b className={styles.mostPopularDestinations}>
                Most Popular Destinations
              </b>
            </div>
            <button className={styles.viewAllTop}>
              <div className={styles.viewAllCafes}>View all Cafes</div>
              <img
                className={styles.notificationBellIcon}
                alt=""
                src="/arrowright.svg"
              />
            </button>
          </div>
          <div className={styles.cardsContainer}>
            <button className={styles.col1}>
              <div className={styles.pariscard}>
                <img
                  className={styles.parisimageIcon}
                  alt=""
                  src="/parisimage@2x.png"
                />
                <div className={styles.destinationDetails}>
                  <b className={styles.cheezious}>Cheezious</b>
                  <div className={styles.details}>
                    <div className={styles.div}>$699</div>
                    <div className={styles.from}>from</div>
                  </div>
                </div>
              </div>
            </button>
            <button className={styles.col1}>
              <div className={styles.pariscard}>
                <img
                  className={styles.parisimageIcon}
                  alt=""
                  src="/greeceimage@2x.png"
                />
                <div className={styles.destinationDetails}>
                  <b className={styles.cheezious}>Al Aram Mandi</b>
                  <div className={styles.details1}>
                    <div className={styles.div1}>$1079</div>
                    <div className={styles.from1}>from</div>
                  </div>
                </div>
              </div>
            </button>
            <button className={styles.col1}>
              <div className={styles.pariscard}>
                <img
                  className={styles.parisimageIcon}
                  alt=""
                  src="/norwayimage@2x.png"
                />
                <div className={styles.destinationDetails}>
                  <b className={styles.cheezious}>The Burger Co</b>
                  <div className={styles.details}>
                    <div className={styles.div}>$895</div>
                    <div className={styles.from}>from</div>
                  </div>
                </div>
              </div>
            </button>
            <button className={styles.col1}>
              <div className={styles.pariscard}>
                <img
                  className={styles.parisimageIcon}
                  alt=""
                  src="/tuscanyimage@2x.png"
                />
                <div className={styles.destinationDetails}>
                  <b className={styles.cheezious}>Tuscany</b>
                  <div className={styles.details3}>
                    <div className={styles.div3}>$1245</div>
                    <div className={styles.from3}>from</div>
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div className={styles.viewAllBottom}>
            <div className={styles.viewAllDestinations}>
              View all destinations
            </div>
            <img
              className={styles.notificationBellIcon}
              alt=""
              src="/arrowright1.svg"
            />
          </div>
        </div>
        <div className={styles.recommendedHolidaysContainer}>
          <div className={styles.recTitle}>
            <b className={styles.recommendedHolidays}>Recommended Holidays</b>
            <button className={styles.viewAllChineseParent}>
              <div className={styles.viewAllChinese}>{`View all Chinese `}</div>
              <img
                className={styles.notificationBellIcon}
                alt=""
                src="/arrowright2.svg"
              />
            </button>
          </div>
          <div className={styles.recCardsContainer}>
            <button className={styles.recCard1}>
              <img
                className={styles.unsplash5mv818tzxeoIcon}
                alt=""
                src="/unsplash5mv818tzxeo@2x.png"
              />
              <div className={styles.holidayDetails}>
                <div className={styles.recTitle}>
                  <div className={styles.meiKongParent}>
                    <div className={styles.meiKong}>Mei Kong</div>
                    <div className={styles.d3n}>4D3N</div>
                  </div>
                  <div className={styles.div4}>$899</div>
                </div>
              </div>
            </button>
            <button className={styles.recCard1}>
              <img
                className={styles.unsplash5mv818tzxeoIcon}
                alt=""
                src="/switzerlandimage@2x.png"
              />
              <div className={styles.holidayDetails}>
                <div className={styles.recTitle}>
                  <div className={styles.meiKongParent}>
                    <div className={styles.meiKong}>Silver Dragon</div>
                    <div className={styles.d3n}>6D5N</div>
                  </div>
                  <div className={styles.div4}>$900</div>
                </div>
              </div>
            </button>
            <button className={styles.recCard3}>
              <img
                className={styles.unsplash5mv818tzxeoIcon}
                alt=""
                src="/boracayimage@2x.png"
              />
              <div className={styles.holidayDetails}>
                <div className={styles.recTitle}>
                  <div className={styles.meiKongParent}>
                    <div className={styles.meiKong}>Asian Wok</div>
                    <div className={styles.d3n}>5D4N</div>
                  </div>
                  <div className={styles.div4}>$699</div>
                </div>
              </div>
            </button>
            <button className={styles.recCard4}>
              <img
                className={styles.unsplash5mv818tzxeoIcon}
                alt=""
                src="/palawanimage@2x.png"
              />
              <div className={styles.holidayDetails}>
                <div className={styles.recTitle}>
                  <div className={styles.meiKongParent}>
                    <div className={styles.meiKong}>Cheema Chataas</div>
                    <div className={styles.d3n}>4D3N</div>
                  </div>
                  <div className={styles.div4}>$789</div>
                </div>
              </div>
            </button>
          </div>
          <div className={styles.viewAllBottom1}>
            <div className={styles.viewAllHolidays}>View all holidays</div>
            <img
              className={styles.notificationBellIcon}
              alt=""
              src="/arrowright3.svg"
            />
          </div>
        </div>
        <div className={styles.popularStays}>
          <div className={styles.popularStaysHeader}>
            <div className={styles.popularStaysTitle}>
              <b className={styles.popularStays1}>Popular Stays</b>
            </div>
            <button className={styles.viewAllStaysButton}>
              <div className={styles.viewAllStays}>View all stays</div>
              <img
                className={styles.notificationBellIcon}
                alt=""
                src="/arrowright4.svg"
              />
            </button>
          </div>
          <div className={styles.hotelCards}>
            <div className={styles.hotelCard1}>
              <div className={styles.hotelCard}>
                <img
                  className={styles.matterhornSuitesImage}
                  alt=""
                  src="/unsplashrlwe8f8anoc@2x.png"
                />
                <div className={styles.stayDetails}>
                  <div className={styles.stayDetailsRows}>
                    <div className={styles.entireBungalow}>Entire bungalow</div>
                    <b className={styles.matterhornSuites}>Matterhorn Suites</b>
                    <div className={styles.night}>$575/night</div>
                  </div>
                  <img className={styles.videoIcon} alt="" src="/video.svg" />
                </div>
                <div className={styles.rating}>
                  <div className={styles.reviews}>(60 reviews)</div>
                  <div className={styles.parent1}>
                    <div className={styles.div8}>4.9</div>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector1.svg"
                    />
                  </div>
                </div>
                <button className={styles.moreDetailsButton}>
                  <div className={styles.button1}>More details</div>
                </button>
              </div>
            </div>
            <div className={styles.hotelCard1}>
              <div className={styles.hotelCard}>
                <img
                  className={styles.matterhornSuitesImage}
                  alt=""
                  src="/unsplashtsn8bpopveo@2x.png"
                />
                <div className={styles.stayDetails1}>
                  <div className={styles.stayDetailsRows}>
                    <div className={styles.entireBungalow}>
                      2-Story beachfront suite
                    </div>
                    <b className={styles.matterhornSuites}>Discovery Shores</b>
                    <div className={styles.night}>$360/night</div>
                  </div>
                  <img className={styles.videoIcon} alt="" src="/video1.svg" />
                </div>
                <div className={styles.rating}>
                  <div className={styles.reviews1}>(116 reviews)</div>
                  <div className={styles.parent1}>
                    <div className={styles.div8}>4.8</div>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector2.svg"
                    />
                  </div>
                </div>
                <button className={styles.moreDetailsButton}>
                  <div className={styles.button1}>More details</div>
                </button>
              </div>
            </div>
            <div className={styles.hotelCard1}>
              <div className={styles.hotelCard4}>
                <img
                  className={styles.matterhornSuitesImage}
                  alt=""
                  src="/unsplashrlwe8f8anoc1@2x.png"
                />
                <div className={styles.stayDetails2}>
                  <div className={styles.stayDetailsRows}>
                    <div className={styles.entireBungalow}>
                      Single deluxe hut
                    </div>
                    <b className={styles.arcticHut}>{`Arctic Hut `}</b>
                    <div className={styles.night}>$420/night</div>
                  </div>
                  <img className={styles.videoIcon} alt="" src="/video2.svg" />
                </div>
                <div className={styles.rating}>
                  <div className={styles.reviews2}>(78 reviews)</div>
                  <div className={styles.parent3}>
                    <div className={styles.div10}>4.7</div>
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector3.svg"
                    />
                  </div>
                </div>
                <button className={styles.moreDetailsButton}>
                  <div className={styles.button1}>More details</div>
                </button>
              </div>
            </div>
            <div className={styles.hotelCard41}>
              <div className={styles.hotelCard5}>
                <img
                  className={styles.matterhornSuitesImage}
                  alt=""
                  src="/unsplashyqrybvxug5q@2x.png"
                />
                <div className={styles.stayDetails}>
                  <div className={styles.stayDetailsRows}>
                    <div className={styles.entireBungalow}>
                      Deluxe King Room
                    </div>
                    <b className={styles.arcticHut}>Lake Louise Inn</b>
                    <div className={styles.night}>$244/night</div>
                  </div>
                  <img className={styles.videoIcon} alt="" src="/video3.svg" />
                </div>
                <div className={styles.rating}>
                  <div className={styles.reviews}>(63 reviews)</div>
                  <div className={styles.parent1}>
                    <div className={styles.div8}>4.6</div>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector4.svg"
                    />
                  </div>
                </div>
                <button className={styles.moreDetailsButton}>
                  <div className={styles.button1}>More details</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.mobileViewAllStays}>
            <div className={styles.viewAllStays1}>View all stays</div>
            <img
              className={styles.notificationBellIcon}
              alt=""
              src="/arrowright5.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.footerSection}>
        <div className={styles.subscribeSection}>
          <img
            className={styles.subscribeSectionBackground}
            alt=""
            src="/subscribe-section-background@2x.png"
          />
          <div className={styles.shareYourTravelsForm}>
            <div className={styles.formHeader}>
              <b className={styles.recentSearches}>
                subscribe to our newsletter
              </b>
              <b className={styles.formTitle}>Get weekly updates</b>
            </div>
            <form className={styles.form}>
              <div className={styles.formText}>
                <div className={styles.fillInYour}>
                  Fill in your details to join the party!
                </div>
              </div>
              <div className={styles.formFields}>
                <div className={styles.formText}>
                  <TextField
                    className={styles.input1}
                    color="primary"
                    variant="outlined"
                    type="text"
                    label="Your name"
                    size="medium"
                    margin="none"
                  />
                </div>
                <div className={styles.formText}>
                  <TextField
                    className={styles.input1}
                    color="primary"
                    variant="outlined"
                    type="text"
                    label="Email address"
                    size="medium"
                    margin="none"
                  />
                </div>
              </div>
              <button className={styles.button5}>
                <div className={styles.unstyledbutton}>
                  <div className={styles.button6}>submit</div>
                </div>
              </button>
            </form>
          </div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.locoEats1}>LOCO EATS</div>
          <div className={styles.fickleflightBio}>
            <div className={styles.logo} />
            <div className={styles.fickleFlightIs}>
              Fickle Flight is your one-stop travel portal. We offer hassle free
              flight and hotel bookings. We also have all your flight needs in
              you online shop.
            </div>
            <img
              className={styles.socialIcons}
              alt=""
              src="/social-icons.svg"
            />
          </div>
          <div className={styles.footerChild} />
          <div className={styles.footerLinks}>
            <div className={styles.company}>
              <div className={styles.aboutUs}>About Us</div>
              <div className={styles.company1}>Company</div>
              <div className={styles.news}>News</div>
              <div className={styles.careers}>Careers</div>
              <div className={styles.howWeWork}>How we work</div>
            </div>
            <div className={styles.company}>
              <div className={styles.account}>Account</div>
              <div className={styles.support1}>Support</div>
              <div className={styles.supportCenter}>Support Center</div>
              <button className={styles.faq}>FAQ</button>
              <div className={styles.accessibility}>Accessibility</div>
            </div>
            <div className={styles.more}>
              <div className={styles.covidAdvisory}>Covid Advisory</div>
              <div className={styles.more1}>More</div>
              <div className={styles.airlineFees}>Airline Fees</div>
              <div className={styles.tips}>Tips</div>
              <div className={styles.howWeWork}>Quarantine Rules</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default GatsbyHome1;
