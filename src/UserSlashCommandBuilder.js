'use strict';

const { SlashCommandBuilder } = require('@discordjs/builders');

const {
  InteractionContextType,
  InteractionIntegrationType,
} = require('./Constants');
const { validateContexts } = require('./validate');

/**
 * @class
 * @extends {SlashCommandBuilder}
 * */
class UserSlashCommandBuilder extends SlashCommandBuilder {
  /**
   * A Builder for user-installable bot to create user or global commands
   *
   * @constructor
   */
  constructor() {
    super();
    /**
     * @type {Array<InteractionIntegrationType>}
     * */
    this.integration_types = [InteractionIntegrationType.UserInstall];

    /**
     * @type {Array<InteractionContextType>}
     * */
    this.contexts = [
      InteractionContextType.Guild,
      InteractionContextType.BotDm,
      InteractionContextType.PrivateChannel,
    ];
  }

  /**
   * Set command as usable for both as a Guild Bot
   * and as a user-installed application
   *
   * @returns {UserSlashCommandBuilder}
   * */
  setGlobalCommand() {
    this.integration_types.push(InteractionIntegrationType.GuildInstall);
    return this;
  }

  /**
   * Set specific contexts on where the command should be installed
   * (Overrides the default value where it can be accessed anywhere)
   *
   * @param {Array<InteractionContextType>} contexts
   * @returns
   * */
  setContexts(contexts) {
    validateContexts(contexts);

    this.contexts = contexts;
    return this;
  }
}

module.exports = UserSlashCommandBuilder;
