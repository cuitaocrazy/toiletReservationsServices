package globals

import javax.inject.{Inject, Singleton}

import actors.ToiletReservationsActor
import akka.actor.{ActorRef, ActorSystem, Props}

/**
  * Created by cuitao on 2017/1/8.
  */
@Singleton
class ServicesActorComponent @Inject()(system: ActorSystem) {
  val toiletReservationsActor: ActorRef = system.actorOf(Props[ToiletReservationsActor])
}
