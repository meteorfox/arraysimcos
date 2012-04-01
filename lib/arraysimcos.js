(function() {

  window.arraysimcos = function(array1, array2, options) {
    var accuracy, dimensions, dotproduct, frequency, i, magnitude1, magnitude2, object, pInclude, property, result, vector1, vector2;
    if (_ === void 0) return;
    property = options != null ? options.comparable : void 0;
    frequency = options != null ? options.frequency : void 0;
    accuracy = (options != null ? options.precision : void 0) || 6;
    pInclude = _.include;
    _.include = function(array, target) {
      if (!array) return false;
      return _.any(array, function(obj) {
        return obj[property] === target[property] && obj[frequency] === target[frequency];
      });
    };
    dimensions = _.union(array1, array2);
    vector1 = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = dimensions.length; _i < _len; _i++) {
        object = dimensions[_i];
        _results.push(_.include(array1, object) ? object[frequency] : 0);
      }
      return _results;
    })();
    vector2 = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = dimensions.length; _i < _len; _i++) {
        object = dimensions[_i];
        _results.push(_.include(array2, object) ? object[frequency] : 0);
      }
      return _results;
    })();
    dotproduct = _.reduce((function() {
      var _ref, _results;
      _results = [];
      for (i = 0, _ref = dimensions.length; 0 <= _ref ? i < _ref : i > _ref; 0 <= _ref ? i++ : i--) {
        _results.push(vector1[i] * vector2[i]);
      }
      return _results;
    })(), function(m, res) {
      return m + res;
    });
    magnitude1 = Math.sqrt(_.reduce(vector1, function(m, scalar) {
      return scalar * scalar + m;
    }));
    magnitude2 = Math.sqrt(_.reduce(vector2, function(m, scalar) {
      return scalar * scalar + m;
    }));
    result = (dotproduct / (magnitude1 * magnitude2)).toFixed(accuracy);
    _.include = pInclude;
    if (_.isFunction(options.callback)) options.callback(result);
    return result;
  };

}).call(this);
