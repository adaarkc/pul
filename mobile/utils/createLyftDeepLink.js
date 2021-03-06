import Exponent from 'exponent';
import { lyftClientId } from '../config/keys';

/**
 *  Takes an event and creates a deep link to the Lyft API based on location
 *  @param  {object} event [description]
 *  @return {Promise}       [description]
 */
export default async event => {
  const {
    coords: { latitude, longitude },
  } = await Exponent.Location.getCurrentPositionAsync({
    enableHighAccuracy: false,
  });
  const dropoffLat = event.location.geometry.location.lat;
  const dropoffLng = event.location.geometry.location.lng;
  return `lyft://ridetype?id=lyft&pickup[latitude]=${latitude}&pickup[longitude]=${longitude}&destination[latitude]=${dropoffLat}&destination[longitude]=${dropoffLng}&partner=${lyftClientId}`;
};
