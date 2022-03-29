const capitalized = string => {
  const capit = string.split('');
  capit[0] = capit[0].toUpperCase();
  return capit.join('');
}

module.exports = capitalized;