import * as React from "react";
import Loading from ".";

const retryLoading = () => {};
const RBLoading = (
  <Loading
    isLoading={true}
    pastDelay={true}
    error={undefined}
    timedOut={false}
    retry={retryLoading}
  />
);

export default RBLoading;
