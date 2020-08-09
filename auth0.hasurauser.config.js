function (user, context, callback) {
    const namespace = "https://user";
    context.idToken[namespace] =
      {
        isNewUSer: context.stats.loginsCount === 1
      };
    callback(null, user, context);
  }