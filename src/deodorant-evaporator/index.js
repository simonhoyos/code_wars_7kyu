function evaporator(content, evap_per_day, threshold){
  const thresholdQty =  content * threshold/100;
  let days = 0;

  while(content >= thresholdQty) {
    content *= ((100 - evap_per_day)/100);
    days++;
  }

  return days;
}

module.exports = evaporator;
