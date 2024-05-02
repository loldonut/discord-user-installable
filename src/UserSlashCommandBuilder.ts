'use strict';

import { SlashCommandBuilder } from '@discordjs/builders';

import {
  InteractionContextType,
  InteractionIntegrationType,
} from './Constants.js';
import { validateContexts } from './validate.js';

/**
 * @class
 * @extends {SlashCommandBuilder}
 * */
export class UserSlashCommandBuilder extends SlashCommandBuilder {
  public readonly integration_types!: InteractionIntegrationType[];
  public readonly contexts!: InteractionContextType[];

  /**
   * A Builder for user-installable bot to create user or global commands
   *
   * @constructor
   */
  public constructor() {
    super();

    Reflect.set(this, 'integration_types', [
      InteractionIntegrationType.UserInstall,
    ]);
    Reflect.set(this, 'contexts', [
      InteractionContextType.Guild,
      InteractionContextType.BotDm,
      InteractionContextType.PrivateChannel,
    ]);
  }

  /**
   * Set command as usable for both as a Guild Bot
   * and as a user-installed application
   *
   * @returns
   * */
  public setGlobalCommand() {
    this.integration_types.push(InteractionIntegrationType.GuildInstall);
    return this;
  }

  /**
   * Set specific contexts on where the command should be installed
   * (Overrides the default value where it can be accessed anywhere)
   *
   * @param contexts - Contexts of the command
   * @returns
   * */
  public setContexts(contexts: InteractionContextType[]) {
    validateContexts(contexts);

    Reflect.set(this, 'contexts', contexts);
    return this;
  }
}
