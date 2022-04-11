import React from "react";

export default function SearchEngine(){
    return(
        <div classname="SearchEngine">
            <div className="col-8">
                <form>
                    <input type="search" placeholder="type in city" />
                    <input type="submit" value="search" />
                </form>
            </div>
        </div>
    )
}