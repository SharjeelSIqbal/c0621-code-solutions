function graduate(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };

}
const medicalSchool = graduate('M.D.');
console.log(medicalSchool('Sharjeel Iqbal'));
const lawSchool = graduate('Esq.');
console.log(lawSchool('Sharjeel Iqbal'));
