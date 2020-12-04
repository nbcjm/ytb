import {IEvent, IContext} from "./kublessfunction";
import {ok} from "assert";

var amqp= require('amqplib')
function as(event:IEvent, context: IContext)
amqp.connect('amqp://user:9009@10.1.15.141:5672').then(function (conn){
    return conn.createChannel().then(function (ch){


        return ok.then
    })
})

export {

}