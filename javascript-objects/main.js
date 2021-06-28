var student = {
  firstName: 'Sharjeel',
  lastName: 'Iqbal',
  age: 25
};
var fullName = student.firstName + ' ' + student.lastName;
console.log(fullName);
student.livesInIrvine = false;
student.previousOccupatoin = 'Server';
console.log(student.livesInIrvine);
console.log(student.previousOccupatoin);
console.log('Value of student ', student);

var vehicle = {
  make: 'Honda',
  model: 'CBR 500',
  year: 2014
};
vehicle['color'] = 'Red';
vehicle['isConvertible'] = false;
console.log(vehicle['color']);
console.log(vehicle['isConvertible']);
console.log('Value of vehicle: ', vehicle);

var pet = {
  name: 'Koda',
  type: 'Cat'
};
delete pet.name;
delete pet.type;
console.log('Value of pet: ', pet);
