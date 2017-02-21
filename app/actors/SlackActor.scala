package actors

import java.net.URLEncoder

import akka.actor.Actor
import org.apache.http.client.fluent.Request

import scala.util.{Failure, Try}
import play.api.Logger

/**
  * Created by cuitao on 2017/2/8.
  */
class SlackActor extends Actor {
  override def receive: Receive = {
    case username: String =>
      Try(Request.Get("http://localhost:3000?user=%s".format(URLEncoder.encode(username, "utf-8"))).execute()) match {
        case Failure(e) => Logger.error("Slack错误", e)
        case _ =>
      }
  }
}
