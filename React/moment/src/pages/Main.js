import React from "react";

function Main() {

    return (
        <div className="container p-5">
            <div className="row justify-content-center">
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="form-group row">
                                <div className="col">
                                    <label htmlFor="date">Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="date"
                                        name="date"
                                        // onChange={handleInputChange}
                                        // value={date}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col">
                                    <label htmlFor="time">Time</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        id="time"
                                        name="time"
                                        // onChange={handleInputChange}
                                        // value={time}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col">
                                    <label htmlFor="timeZone">TimeZones</label>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Your Timezone
                                    </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            {/* map out the array of timezones here */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col button block-inline">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="card">
                    <div className="card-body">
                        {/* map out array of output, so every new one is added here */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;