
import TelegramBot from "node-telegram-bot-api";
import * as MessageController from "./MessageController";

/**
 * Contain all application controllers located in `src/controllers/*`.
 */
export interface ControllersData { 
    bot: TelegramBot
    list: Array<Controller>
}

/** Base controller class for making any logic. */
export interface Controller {
    /** Pointer on telegram bot. Do what you want with it. */
    bot: TelegramBot 

    /** Start contoller's logic and do whatever. */
    start(): void 

    /** Stop and shutdown controller's logic. */
    stop(): void 
}

/** Add controller and run any logic. */
export function addController(data: ControllersData, controller: Controller) {
    data.list.push(controller)

    // Start any logic from the controller.
    controller.start()
}

/** Remove and shutdown controller with any logic. */
export function removeController(data: ControllersData, controller: Controller) {
    data.list.splice(data.list.indexOf(controller), 1)

    // Shutdown the controller.
    controller.stop();
}

/** Initialize all application controllers */
export function create(bot: TelegramBot): ControllersData { 
    // TODO: There should be implemented some blacklists for most generic bot application features
    const data: ControllersData = {
        bot: bot,
        list: []
    }

    // Prepare the controllers
    addController(data, MessageController.create(data))

    return data;
}