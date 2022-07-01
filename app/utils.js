module.exports = {
    isPointNear: (checkPointLat, checkPointLng, centerPointLat, centerPointLng, miles) => {
    let km = miles * 1.60934;
    let ky = 40000 / 360;
    let kx = Math.cos((Math.PI * centerPointLat) / 180.0) * ky;
    let dx = Math.abs(centerPointLng - checkPointLng) * kx;
    let dy = Math.abs(centerPointLat - checkPointLat) * ky;
    return Math.sqrt(dx * dx + dy * dy) <= km;
  }
}