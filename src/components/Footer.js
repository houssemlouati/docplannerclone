import React from "react";
import { Fragment } from "react";

let linkCity = [
  {
    nameCity: "Poland"
  },
  {
    nameCity: "Turkey"
  },
  {
    nameCity: "Spain"
  },
  {
    nameCity: "Italy"
  },
  {
    nameCity: "Czech Republic"
  },
  {
    nameCity: "Mexico"
  },
  {
    nameCity: "Colombia"
  },
  {
    nameCity: "Brazil"
  },
  {
    nameCity: "Argentina"
  },
  {
    nameCity: "Chile"
  }
];

const CityLink = ({ nameCity }) => <a href="">{nameCity}</a>;

const Footer = () => (
  <div className="MyFooter">
    <p>
      We are leaders in 10 countries:
      {linkCity.map((city, i) => {
        return (
          <Fragment>
            {i < linkCity.length - 2 ? (
              <Fragment>
                <CityLink nameCity={city.nameCity} />
                ,&nbsp;
              </Fragment>
            ) : i < linkCity.length - 1 ? (
              <Fragment>
                <CityLink nameCity={city.nameCity} />
                &nbsp; and &nbsp;
              </Fragment>
            ) : (
              <Fragment>
                <CityLink nameCity={city.nameCity} />
              </Fragment>
            )}
          </Fragment>
        );
      })}
    </p>
    <p>
      This site uses cookies to deliver services in accordance with this Privacy
      Policy. You can specify the conditions for storing or accessing cookies on
      your browser.
    </p>
    www.docplanner.com © 2019
  </div>
);

export default Footer;
