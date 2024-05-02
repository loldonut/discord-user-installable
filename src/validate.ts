import { s } from '@sapphire/shapeshift';

import { InteractionContextType } from './Constants.js';

export function validateContexts(contextsInput: InteractionContextType) {
  const InteractionContextTypeEnum = s.nativeEnum(
    InteractionContextType,
  );
  InteractionContextTypeEnum.parse(contextsInput);
}
