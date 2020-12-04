import * as http from "http";

export interface IEvent{
    "token" : string,
    "teamName" : string,
    "roomName" : string,
    "writerName" : string,
    "text" : string,
    "keyword" : string,
    "createdAt" : string
    extensions: {
        request: http.IncomingMessage,
        response: http.ServerResponse
    }
}

export interface IContext{

}