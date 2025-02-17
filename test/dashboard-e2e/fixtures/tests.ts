/**
 * Fixtures should be TS files, as JSONs are not working in composite projects.
 * @see {@link https://github.com/TypeStrong/ts-loader/issues/905}
 */
export default {
  'cypress-git': {
    name: 'temp-e2e-cypress-git',
    type: 'cypress/project',
    content: {
      type: 'git',
      repository: {
        type: 'git',
        uri: 'https://github.com/kubeshop/testkube',
        branch: 'main',
        path: 'test/cypress/executor-tests/cypress-without-envs',
      },
    },
    labels: {
      'core-tests': 'dashboard-e2e-internal-temp',
    },
  },
  'cypress-git-created': {
    name: 'temp-e2e-cypress-git-created',
    type: 'cypress/project',
    content: {
      type: 'git',
      repository: {
        type: 'git',
        uri: 'https://github.com/kubeshop/testkube',
        branch: 'main',
        path: 'test/cypress/executor-tests/cypress-without-envs',
      },
    },
    labels: {
      'core-tests': 'dashboard-e2e-internal-temp',
    },
  },
  'k6-git': {
    name: 'temp-e2e-k6-git',
    type: 'k6/script',
    content: {
      type: 'git',
      repository: {
        type: 'git',
        uri: 'https://github.com/kubeshop/testkube',
        branch: 'main',
        path: 'test/k6/executor-tests/k6-smoke-test-without-envs.js',
      },
    },
    labels: {
      'core-tests': 'dashboard-e2e-internal-temp',
    },
  },
  'k6-git-created': {
    name: 'temp-e2e-k6-git-created',
    type: 'k6/script',
    content: {
      type: 'git',
      repository: {
        type: 'git',
        uri: 'https://github.com/kubeshop/testkube',
        branch: 'main',
        path: 'test/k6/executor-tests/k6-smoke-test-without-envs.js',
      },
    },
    labels: {
      'core-tests': 'dashboard-e2e-internal-temp',
    },
  },
  'postman-git': {
    name: 'temp-e2e-postman-git',
    type: 'postman/collection',
    content: {
      type: 'git',
      repository: {
        type: 'git',
        uri: 'https://github.com/kubeshop/testkube',
        branch: 'main',
        path: 'test/postman/executor-tests/postman-executor-smoke-without-envs.postman_collection.json',
      },
    },
    labels: {
      'core-tests': 'dashboard-e2e-internal-temp',
    },
  },
  'postman-git-created': {
    name: 'temp-e2e-postman-git-created',
    type: 'postman/collection',
    content: {
      type: 'git',
      repository: {
        type: 'git',
        uri: 'https://github.com/kubeshop/testkube',
        branch: 'main',
        path: 'test/postman/executor-tests/postman-executor-smoke-without-envs.postman_collection.json',
      },
    },
    labels: {
      'core-tests': 'dashboard-e2e-internal-temp',
    },
  },
  'postman-negative-test': {
    name: 'temp-e2e-postman-git-ran-neg-test',
    type: 'postman/collection',
    content: {
      type: 'git',
      repository: {
        type: 'git',
        uri: 'https://github.com/kubeshop/testkube',
        branch: 'main',
        path: 'test/postman/executor-tests/postman-executor-smoke.postman_collection.json',
      },
    },
    labels: {
      'core-tests': 'cli-internal-temp',
    },
  },
  'postman-negative-init': {
    name: 'temp-e2e-postman-git-ran-neg-init',
    type: 'postman/collection',
    content: {
      type: 'git',
      repository: {
        type: 'git',
        uri: 'https://github.com/kubeshop/testkube',
        branch: 'some-non-existing-branch',
        path: 'some/incorrect/path/non-existing-file.json',
      },
    },
    labels: {
      'core-tests': 'cli-internal-temp',
    },
  },
};
