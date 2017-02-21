package globals

import com.google.inject.AbstractModule

/**
  * Created by cuitao on 2017/1/8.
  */
class ServicesModule extends AbstractModule{
  override def configure(): Unit = bind(classOf[ServicesActorComponent])
}
