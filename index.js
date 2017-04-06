"format cjs";

var engine = require('./engine');
var conventionalCommitTypes = require('conventional-commit-types');

conventionalCommitTypes.types.minor = { description: 'A feature (alias feat)' };
conventionalCommitTypes.types.break = { description: 'A breaking change' };
conventionalCommitTypes.types.patch = { description: 'A patch (alias fix)' };
conventionalCommitTypes.types.major = { description: 'A major non-backward compatible feature (alias break)' };

module.exports = engine({
  types: conventionalCommitTypes.types
});
