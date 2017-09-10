/**
 * This object takes a json array of business partners and returns
 * an array of partners within 100 kilometers * 
 */
function haversine(partners) {
  "use strict";

  // Radius of the Earth in kilometers
  const radius = 6371;
  function toRadians(degrees) {
    return degrees * (Math.PI/180);
  }

  // square of half the chord length between the points
  function chord(deltaLat, deltaLong, lat1, lat2){
    return Math.sin(deltaLat/2) * Math.sin(deltaLat/2) +
          Math.cos(lat1) * Math.cos(lat2) *
          Math.sin(deltaLong/2) * Math.sin(deltaLong/2);
  }

  // Home office
  const coord1 = '51.515419, -0.141099';
  const arr1 = coord1.split(',');
  const lat1 = toRadians(arr1[0]);

  // Filter out partners that do not have an office within 100 km
  const invites = partners.filter(partner => {
    let closeEnough = false;
    const offices = partner.offices;

    // Check each office location
    offices.forEach(office => {
      const coord2 = office.coordinates;
      const arr2 = coord2.split(',');
      const lat2 = toRadians(arr2[0]);
      const deltaLat = lat2 - lat1;
      const deltaLong = toRadians(arr2[1] - arr1[1]);
      const a = chord(deltaLat, deltaLong, lat1, lat2)
      // Angular distance in radians
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      // Distance in kilimeters
      const distance = Math.floor(radius * c);
      if(distance < 100) {
        closeEnough = true;
      }
    });

    return closeEnough;
  }); // End invites

  // Log out partners within 100km
  console.log('________________haversine.js__________________');
  console.log(`You should call ${invites.length} partner(s) for a meal:`)
  invites.forEach( invite => {
    console.log(invite.organization);
  });

  // Return results for further manipulation and testing
  return invites;
}
module.exports = haversine;
