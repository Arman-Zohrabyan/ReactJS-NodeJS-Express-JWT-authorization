class PathHelper {
  static userImageFolder(userId) {
    return `${__dirname}/static/images/${userId}`;
  }

  static userProfileImage(userId, fileName) {
    return `/images/${userId}/${fileName}`;
  }
}

module.exports = PathHelper;