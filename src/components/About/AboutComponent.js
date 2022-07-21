import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

import "./About.css";

const AboutComponent = () => {
  return (
    <section className="accordian-section">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          className="accordian-summary"
        >
          Problem Statement
        </AccordionSummary>

        <AccordionDetails className="accordian-detail">
          <ul className="accordian-list">
            <li>
              No Appointment System for customers.
            </li>
            <li>
              Long waiting time.
            </li>
            <li>
              No online presence of the salon/parlour.
            </li>
            <li>
              Lack of digital marketing and promotion.
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          className="accordian-summary"
        >
          Solution
        </AccordionSummary>

        <AccordionDetails className="accordian-detail">
          <ul className="accordian-list">
            <li>
              Appointment System for customers.
            </li>
            <li>
              Online Listing and Visibility.
            </li>
            <li>
              Website and Mobile App to increase sales.
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          className="accordian-summary"
        >
          Services
        </AccordionSummary>

        <AccordionDetails className="accordian-detail">
          <ul className="accordian-list">
            <li>
              Designing Salon Pages.
            </li>
            <li>
              Branding, Promotions and Offers.
            </li>
            <li>
              Online Products.
            </li>
            <li>
              Job Portel.
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </section>
  );
};

export default AboutComponent;
