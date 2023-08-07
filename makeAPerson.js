const Person = function (first, last) {
  let firstName = first;
  let lastName = last;

  this.getFirstName = () => firstName;
  this.getLastName = () => lastName;
  this.getFullName = () => `${this.getFirstName()} ${this.getLastName()}`;

  this.setFirstName = (first) => (firstName = first);

  this.setLastName = (last) => (lastName = last);

  this.setFullName = (first, last) => {
    this.setFirstName(first);
    this.setLastName(last);
    return this.getFullName();
  };
};

const bob = new Person("Obi-Wan", "Kenobi");
bob.getFirstName();
bob.getLastName();
bob.getFullName();
bob.setFirstName("Anakin");
bob.setLastName("Skywalker");
bob.getFullName();
