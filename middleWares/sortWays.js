const { Way } = require('../db/models');

exports.sortWays = async (id) => {
  switch (id) {
    case 1: // по рейтингу
      return ways1 = await Way.findAll({ raw: true });
    case 2: // по дате
      return ways1 = await Way.findAll({ order: [['createdAt', 'DESC']], raw: true });
    case 3: // по длинне
      return ways1 = await Way.findAll({ order: [['distance', 'ASC']], raw: true });
    default:
      return ways1 = await Way.findAll({ raw: true });
  }
};

exports.sortRating = (ways) => ways.sort((a, b) => b.rating - a.rating);

exports.sortDistance = (ways) => ways.sort((a, b) => parseInt(b.distance) - parseInt(a.distance));
