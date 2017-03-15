'use strict';

define('tradegecko-ui/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('tradegecko-ui/tests/controllers/logo.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/logo.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/logo.js should pass jshint.');
  });
});
define('tradegecko-ui/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('tradegecko-ui/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('tradegecko-ui/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'tradegecko-ui/tests/helpers/start-app', 'tradegecko-ui/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _tradegeckoUiTestsHelpersStartApp, _tradegeckoUiTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _tradegeckoUiTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _tradegeckoUiTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('tradegecko-ui/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('tradegecko-ui/tests/helpers/resolver', ['exports', 'tradegecko-ui/resolver', 'tradegecko-ui/config/environment'], function (exports, _tradegeckoUiResolver, _tradegeckoUiConfigEnvironment) {

  var resolver = _tradegeckoUiResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _tradegeckoUiConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _tradegeckoUiConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('tradegecko-ui/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('tradegecko-ui/tests/helpers/start-app', ['exports', 'ember', 'tradegecko-ui/app', 'tradegecko-ui/config/environment'], function (exports, _ember, _tradegeckoUiApp, _tradegeckoUiConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _tradegeckoUiConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _tradegeckoUiApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('tradegecko-ui/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('tradegecko-ui/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('tradegecko-ui/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('tradegecko-ui/tests/routes/logo.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/logo.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/logo.js should pass jshint.');
  });
});
define('tradegecko-ui/tests/routes/online-banners.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/online-banners.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/online-banners.js should pass jshint.');
  });
});
define('tradegecko-ui/tests/routes/online-banners/samples.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/online-banners/samples.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/online-banners/samples.js should pass jshint.');
  });
});
define('tradegecko-ui/tests/routes/online-banners/wireframes.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/online-banners/wireframes.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/online-banners/wireframes.js should pass jshint.');
  });
});
define('tradegecko-ui/tests/routes/typography.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/typography.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/typography.js should pass jshint.');
  });
});
define('tradegecko-ui/tests/routes/webinars.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/webinars.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/webinars.js should pass jshint.');
  });
});
define('tradegecko-ui/tests/test-helper', ['exports', 'tradegecko-ui/tests/helpers/resolver', 'ember-qunit'], function (exports, _tradegeckoUiTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_tradegeckoUiTestsHelpersResolver['default']);
});
define('tradegecko-ui/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('tradegecko-ui/tests/unit/routes/logo-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:logo', 'Unit | Route | logo', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('tradegecko-ui/tests/unit/routes/logo-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/logo-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/logo-test.js should pass jshint.');
  });
});
define('tradegecko-ui/tests/unit/routes/online-banners-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:online-banners', 'Unit | Route | online banners', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('tradegecko-ui/tests/unit/routes/online-banners-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/online-banners-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/online-banners-test.js should pass jshint.');
  });
});
define('tradegecko-ui/tests/unit/routes/online-banners/samples-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:online-banners/samples', 'Unit | Route | online banners/samples', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('tradegecko-ui/tests/unit/routes/online-banners/samples-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/online-banners/samples-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/online-banners/samples-test.js should pass jshint.');
  });
});
define('tradegecko-ui/tests/unit/routes/online-banners/wireframes-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:online-banners/wireframes', 'Unit | Route | online banners/wireframes', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('tradegecko-ui/tests/unit/routes/online-banners/wireframes-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/online-banners/wireframes-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/online-banners/wireframes-test.js should pass jshint.');
  });
});
define('tradegecko-ui/tests/unit/routes/typography-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:typography', 'Unit | Route | typography', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('tradegecko-ui/tests/unit/routes/typography-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/typography-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/typography-test.js should pass jshint.');
  });
});
define('tradegecko-ui/tests/unit/routes/webinars-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:webinars', 'Unit | Route | webinars', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('tradegecko-ui/tests/unit/routes/webinars-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/webinars-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/webinars-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('tradegecko-ui/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
