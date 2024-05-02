import { SlashCommandBuilder } from '@discordjs/builders';

export enum InteractionContextType {
  Guild,
  BotDm,
  PrivateChannel,
}

export enum InteractionIntegrationType {
  GuildInstall,
  UserInstall,
}

export class UserSlashCommandBuilder extends SlashCommandBuilder {
  public constructor();
  public setGlobalCommand(): UserSlashCommandBuilder;
}
