// js DOC을 통해 타입을 정의할 수 있고, 어떤 데이터가 들어있는지 굳이 화면을 확인하지 않고도 프로퍼티를 확인할 수 있다.
// 다만 오탈자 체크는 불가능 => 타입스크립트를 사용하면 오탈자 체크도 가능하다.

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

fetchUser().then(function (response) {
  response.address.city;
});
