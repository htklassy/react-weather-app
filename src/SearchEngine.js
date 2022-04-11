import React from "react";

export default function SearchEngine(){
    return(
        <div classname="SearchEngine">
           <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Type in city..." className="form-control" autoFocus="on" />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
        </div>
    )
}