import { PageView } from "ui";

export default function Index() {
  return (
    <div className="card-body p-0">
                                    <div className="row row-cols-md-3 row-cols-1">
                                        <div className="col col-lg border-end">
                                            <div className="py-4 px-3">
                                                <h5 className="text-muted text-uppercase fs-13">Campaign Sent <i className="ri-arrow-up-circle-line text-success fs-18 float-end align-middle"></i>
                                                </h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-space-ship-line display-6 text-muted"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h2 className="mb-0"><span className="counter-value" data-target="197">197</span></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col col-lg border-end">
                                            <div className="mt-3 mt-lg-0 py-4 px-3">
                                                <h5 className="text-muted text-uppercase fs-13">
                                                    Daily Average Income <i className="ri-arrow-up-circle-line text-success fs-18 float-end align-middle"></i>
                                                </h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-trophy-line display-6 text-muted"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h2 className="mb-0">$<span className="counter-value" data-target="1596.5">1,596.5</span></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-lg">
                                            <div className="mt-3 mt-lg-0 py-4 px-3">
                                                <h5 className="text-muted text-uppercase fs-13">
                                                    Annual Deals <i className="ri-arrow-down-circle-line text-danger fs-18 float-end align-middle"></i>
                                                </h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-service-line display-6 text-muted"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h2 className="mb-0"><span className="counter-value" data-target="2659">2,659</span></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
  );
}
