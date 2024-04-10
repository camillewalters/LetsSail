mergeInto(LibraryManager.library, {
  NewScore: function (score) {
    window.dispatchReactUnityEvent("NewScore", score);
  },
});