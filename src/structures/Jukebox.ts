/* eslint-disable no-underscore-dangle, @typescript-eslint/unbound-method */
import { Client, ClientOptions } from "discord.js";
import { resolve } from "path";
import config from "../config";
import { LogWrapper } from "../utils/LogWrapper";
import CommandsHandler from "../utils/Commands";
import ClientEventsLoader from "../utils/ClientEventsLoader";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore-next-line // FIX: Find or create typings for simple-youtube-api or wait for v6 released
import YouTube from "simple-youtube-api";

// Extends DiscordJS Structures
import "./Guild";

export default class Jukebox extends Client {
    private _token = "n/a";
    readonly config = config;
    readonly log = new LogWrapper(config.name).logger;
    readonly youtube = new YouTube(process.env.YT_API_KEY!, { cache: false, fetchAll: true });
    readonly commandsHandler = new CommandsHandler(this, resolve(__dirname, "..", "commands"));
    readonly eventsLaoder = new ClientEventsLoader(this, resolve(__dirname, "..", "events"));
    constructor(opt: ClientOptions) { super(opt); }

    public async build(): Promise<Jukebox> {
        this.on("ready", () => this.commandsHandler.load());
        this.eventsLaoder.load();
        await this.login(this.getToken());
        return this;
    }

    public setToken(token: string): Jukebox {
        this._token = token;
        return this;
    }

    public getToken(): string {
        return this._token;
    }

    public async getGuildsCount(): Promise<number> {
        if (!this.shard) return this.guilds.cache.size;
        const size = await this.shard.broadcastEval("this.guilds.cache.size");
        return size.reduce((p, v) => p + v, 0);
    }
    public async getChannelsCount(filter = true): Promise<number> {
        if (filter) {
            if (!this.shard) return this.channels.cache.filter(c => c.type !== "category" && c.type !== "dm").size;
            const size = await this.shard.broadcastEval("this.channels.cache.filter(c => c.type !== 'category' && c.type !== 'dm').size");
            return size.reduce((p, v) => p + v, 0);
        } else {
            if (!this.shard) return this.channels.cache.size;
            const size = await this.shard.broadcastEval("this.channels.cache.size");
            return size.reduce((p, v) => p + v, 0);
        }
    }
    public async getUsersCount(filter = true): Promise<number> {
        if (filter) {
            if (!this.shard) return this.users.cache.filter(u => !u.equals(this.user!)).size;
            const size = await this.shard.broadcastEval("this.users.cache.filter(u => !u.equals(this.user)).size");
            return size.reduce((p, v) => p + v, 0);
        } else {
            if (!this.shard) return this.users.cache.size;
            const size = await this.shard.broadcastEval("this.users.cache.size");
            return size.reduce((p, v) => p + v, 0);
        }
    }
}