import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import "./Estimator.css";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import covid19ImpactEstimator from "../estimator";
import EstimateResults from "../components/estimateResult/EstimateResults";

const EstimatorPage = (props) => {
  const [population, setPopulation] = useState(554445);
  const [timeToElapse, setTimeToElapse] = useState(55);
  const [reportedCases, setReportedCases] = useState(555);
  const [totalHospitalBeds, setTotalHospitalBeds] = useState(555);
  const [periodType, setPeriodType] = useState("days");
  const [estimatorResults, setEstimatorResults] = useState();

  const onSubmitHanlder = async (e) => {
    e.preventDefault();
    const data = {
      region: {
        name: "Africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 4,
        avgDailyIncomePopulation: 0.73,
      },
      periodType: periodType,
      timeToElapse: parseInt(timeToElapse),
      reportedCases: parseInt(reportedCases),
      population: parseInt(population),
      totalHospitalBeds: parseInt(totalHospitalBeds),
    };

    console.log(777, data);

    const res = covid19ImpactEstimator(data);

    console.log(res);
    await setEstimatorResults(res);
  };

  return (
    <section className="banner row">
      <div className="col-md-4 perfect-center">
        <div className="auth-container">
          <div>
            <h4 className="font-bold">covid-19 Estimator</h4>
            <div>
              <p className="text-muted small-info-text">
                All Input are compulsory
              </p>
            </div>
          </div>
          <form onSubmit={onSubmitHanlder} className="auth-form">
            <div className="form-group">
              <label htmlFor="population">Population</label>
              <Input
                name="population"
                type="number"
                customClassName="form-control auth-input"
                id="population"
                placeHolder="Population"
                aria-describedby="population"
                data-population
                required
                value={population}
                handleChange={(e) => setPopulation(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="timeToElapse">Time to Elapse</label>
              <Input
                name="timeToElapse"
                type="number"
                customClassName="form-control auth-input"
                id="timeToElapse"
                placeHolder="Time to Elapse"
                aria-describedby="timeToElapse"
                data-time-to-elapse
                required
                value={timeToElapse}
                handleChange={(e) => setTimeToElapse(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="reportedCases">Reported Cases</label>
              <Input
                name="reportedCases"
                type="number"
                customClassName="form-control auth-input"
                id="reportedCases"
                placeHolder="Reported Cases"
                aria-describedby="reportedCases"
                data-reported-cases
                required
                value={reportedCases}
                handleChange={(e) => setReportedCases(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="totalHospitalBeds">Total Hospital Beds</label>
              <Input
                name="totalHospitalBeds"
                type="number"
                customClassName="form-control auth-input"
                id="totalHospitalBeds"
                placeHolder="Total Hospital Beds"
                aria-describedby="totalHospitalBeds"
                data-total-hospital-beds
                required
                value={totalHospitalBeds}
                handleChange={(e) => setTotalHospitalBeds(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="periodType">Period Type</label>

              <div className="select-container">
                <select
                  data-period-type
                  id="periodType"
                  className="form-control filter-select"
                  required
                  onChange={(e) => setPeriodType(e.target.value)}
                >
                  <option data-period-type value="days">
                    Days
                  </option>
                  <option data-period-type value="weeks">
                    Weeks
                  </option>
                  <option data-period-type value="months">
                    Months
                  </option>
                </select>
              </div>
            </div>

            <div className="auth-button-container">
              <button className="btn auth-button bold-600">Estimate</button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-6 perfect-center">
        <div className="auth-container">
          <div>
            <h4 className="font-bold">covid-19 Estimator Results</h4>
            <div>
              <p className="text-muted small-info-text">
                These are the best estimated results
              </p>
            </div>
          </div>
          <EstimateResults result={estimatorResults} />
        </div>
      </div>
    </section>
  );
};

EstimatorPage.propTypes = {};

export default EstimatorPage;
