import moment from "moment";

function formatDate({ date, showTime = true }) {
  return moment(date)?.format(
    `${showTime ? "DD-MM-YYYY hh:mm " : "DD-MM-YYYY "}`
  );
}

export { formatDate };
