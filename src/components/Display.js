import { useMemo } from "react";

const Display = ({ page, data }) => {
  const itemsPerPage = 10;

  const displayData = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [data, page]);

  return (
    <div className="display-data">
      {
        displayData.slice(0, 9).map((data) => {
          return (
            <div className="data-grid">
              <p key={data.Key}>
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
