package actors

import akka.actor.{Actor, ActorRef}
import akka.actor.Actor.Receive

/**
  * Created by cuitao on 2017/1/8.
  */
class UserActor extends Actor {
  var clientSet: Set[ActorRef] = Set[ActorRef]()

  override def receive: Receive = {
    case "join" =>
      clientSet += sender()
    case "leave" =>
      clientSet -= sender()
    case other => clientSet.foreach(ref => ref ! other)
  }
}
