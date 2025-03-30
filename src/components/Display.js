import { useMemo } from "react";

const Display = ({ page, data, itemsPerPage }) => {

  /* 
  * Everytime a component re-renders it recreates any variable defined except hooks
  * useState, useEffect, useMemo,useCallback. During updation cycle react component will try 
  * recreate the variable defines again and again. Usememo will make sure that variable is not 
  * reinitailised every time component re-renders
  */
  const displayData = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [data, page, itemsPerPage]);

  return (
    <div className="display-data">
      {
        displayData.slice(0, 9).map((data) => {
          return (
            <div className="data-grid" key={data.Key}>
              <p>
                City:<b>{data.LocalizedName} </b>Temperature:{" "}
                <b>{data.Temperature.Metric.Value}</b>
              </p>
            </div>
          );
        })
      }
    </div>
  );
};

export default Display;
