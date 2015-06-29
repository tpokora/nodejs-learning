var fruits = [];

fruits.push({
  name: 'Orange',
  desc: 'Good Orange'
});
fruits.push({
  name: 'Apple',
  desc: 'Green Apple'
});

exports.list = function(req, res) {
  res.render('fruits', {
    title: 'Fruits',
    fruits: fruits
  });
};
