function cube(number) {
  return number ** 3;
}

function isPoistive(number) {
  return number > 0;
}

function getInitials(first, last) {
  const firstInitial = first.charAt(0).toUpperCase();
  const lastInitial = last.charAt(0).toUpperCase();
  return `${firstInitial}${lastInitial}`;
}

console.log(getInitials("Setsuna", "Seiei"));
console.log(getInitials("Lockon", "Stratos"));

const favoriteGunpla = ["Exia", "00 Raiser", "Dynames", "Barbatos Lupus Rex"];

console.log(favoriteGunpla[0]);
