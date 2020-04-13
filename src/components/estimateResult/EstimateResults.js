import React, { Fragment } from "react";

const EstimateResults = (props) => {

  let result = <p>Hold on while your result are being calculated.</p>;
  if (props.result) {
    const { impact, severeImpact } = props.result;
    result = (
      <Fragment>
        <div>
          <h5>Estimation for non critical case</h5>
          <div>
            <p>{Number(impact.currentlyInfected).toLocaleString()}</p>
            <p>{Number(impact.infectionsByRequestedTime).toLocaleString()}</p>
            <p>{Number(impact.severeCasesByRequestedTime).toLocaleString()}</p>
            <p>{Number(impact.hospitalBedsByRequestedTime).toLocaleString()}</p>
            <p>{Number(impact.casesForICUByRequestedTime).toLocaleString()}</p>
            <p>
              {Number(
                impact.casesForVentilatorsByRequestedTime
              ).toLocaleString()}
            </p>
            <p>${Number(impact.dollarsInFlight).toLocaleString()}</p>
          </div>
        </div>
        <div>
          <h5>Estimation for critical cases</h5>
          <div>
            <p>{Number(severeImpact.currentlyInfected).toLocaleString()}</p>
            <p>
              {Number(severeImpact.infectionsByRequestedTime).toLocaleString()}
            </p>
            <p>
              {Number(severeImpact.severeCasesByRequestedTime).toLocaleString()}
            </p>
            <p>
              {Number(
                severeImpact.hospitalBedsByRequestedTime
              ).toLocaleString()}
            </p>
            <p>
              {Number(severeImpact.casesForICUByRequestedTime).toLocaleString()}
            </p>
            <p>
              {Number(
                severeImpact.casesForVentilatorsByRequestedTime
              ).toLocaleString()}
            </p>
            <p>${Number(severeImpact.dollarsInFlight).toLocaleString()}</p>
          </div>
        </div>
      </Fragment>
    );
  }
  return <section>{result}</section>;
};

EstimateResults.propTypes = {};

export default EstimateResults;
