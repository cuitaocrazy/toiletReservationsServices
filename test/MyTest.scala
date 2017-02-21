import scala.collection.immutable.Queue

/**
  * Created by cuitao on 2017/2/14.
  */
object MyTest extends App {
  var set = Set("ct", "lfh")
  set += "ctk"
  set += "ct"
  println(set)
  set -= "ct"
  println(set)
}
