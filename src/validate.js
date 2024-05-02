const { s } = require('@sapphire/shapeshift');

const { InteractionContextType } = require('./Constants');

const createEnumValidator = (Enum) => s.enum(...Object.values(Enum));

function validateContexts(contextsInput) {
  const InteractionContextTypeEnum = createEnumValidator(
    InteractionContextType,
  );
  InteractionContextTypeEnum.parse(contextsInput);
}

module.exports = {
  validateContexts,
};
