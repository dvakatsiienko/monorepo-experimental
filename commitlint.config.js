const {
    utils: { getPackages },
} = require('@commitlint/config-lerna-scopes');

module.exports = {
    extends: [
        '@commitlint/config-conventional',
        '@commitlint/config-lerna-scopes',
    ],
    rules: {
        // 'subject-empty': [0],
        // 'type-empty': [0],
        'scope-enum': async ctx => [
            2,
            'always',
            [
                ...(await getPackages(ctx)),
                // Insert custom scopes below:
                'release',
            ],
        ],
    },
};
