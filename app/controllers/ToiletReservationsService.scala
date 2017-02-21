package controllers

import javax.inject.Inject

import actors.ToiletReservationsActor._
import akka.actor.{Actor, ActorRef, ActorSystem, Props}
import akka.stream.Materializer
import globals.ServicesActorComponent
import play.api.libs.json.{JsValue, Json}
import play.api.libs.streams.ActorFlow
import play.api.mvc.WebSocket

/**
  * Created by cuitao on 2017/1/8.
  */
class ToiletReservationsService @Inject()(implicit system: ActorSystem, materializer: Materializer, servicesActorComponent: ServicesActorComponent) {
  def socket: WebSocket = WebSocket.accept[JsValue, JsValue] { request =>
    ActorFlow.actorRef(out => ToiletReservationsWebSocketActor.props(out, servicesActorComponent))
  }
}

class ToiletReservationsWebSocketActor(out: ActorRef, servicesActorComponent: ServicesActorComponent) extends Actor {
  override def receive: Receive = {
    case msg: JsValue =>
      println(msg)
      (msg \ "type").as[String] match {
        case "LOGIN" => servicesActorComponent.toiletReservationsActor ! Login((msg \ "payload" \ "username").as[String])
        case "RESERVE" => servicesActorComponent.toiletReservationsActor ! Reserve
        case "RESERVATION_CANCEL" => servicesActorComponent.toiletReservationsActor ! ReservationCancel
        case "COMPLETE" => servicesActorComponent.toiletReservationsActor ! Complete
      }
    case QueueUpdate(users) => {
      println(Json.parse("""{"type":"QUEUE_UPDATE","payload":{"queue":[%s]}}""".format(users.map(user => s""""$user"""").mkString(","))))
      out ! Json.parse("""{"type":"QUEUE_UPDATE","payload":{"queue":[%s]}}""".format(users.map(user => s""""$user"""").mkString(",")))
    }
    case _ => println("----------------------------------")
  }
}

object ToiletReservationsWebSocketActor {
  def props(out: ActorRef, servicesActorComponent: ServicesActorComponent) = Props(new ToiletReservationsWebSocketActor(out, servicesActorComponent))
}
