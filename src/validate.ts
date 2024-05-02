import { s } from '@sapphire/shapeshift';

import { InteractionContextType } from './Constants.js';

export function validateContexts(contextsInput: InteractionContextType[]) {
  const InteractionContextTypeEnum = s
    .array(s.nativeEnum(InteractionContextType))
    .lengthRangeInclusive(1, 3);
  InteractionContextTypeEnum.parse(contextsInput);
}
