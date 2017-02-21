package controllers

import javax.inject.Inject

import globals.ServicesActorComponent
import play.api._
import play.api.mvc._

class Application extends Controller {

  def index = Action {
    Ok(views.html.index())
  }

}