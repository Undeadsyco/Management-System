const calcHrDif = (startTime, endTime) => {
  const dif = (
    endTime ? new Date(endTime).getTime() : new Date().getTime()
  ) - new Date(startTime).getTime();

  let minuets = Math.floor((dif / (1000 * 60)) % 60);
  let hours = Math.floor((dif / (1000 * 60 * 60)) % 60);

  hours = hours < 10 ? `0${hours}` : hours;
  minuets = minuets < 10 ? `0${minuets}` : minuets;

  return `hours: ${hours}, minuets: ${minuets}`;
};

module.exports = calcHrDif;
