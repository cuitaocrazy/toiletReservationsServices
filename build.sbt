name := "toiletReservationsServices"

version := "1.0"

lazy val `toiletreservationsservices` = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.8"

libraryDependencies ++= Seq( jdbc , cache , ws   , specs2 % Test,
  "org.apache.httpcomponents" % "fluent-hc" % "4.5.2",
  "commons-logging" % "commons-logging" % "1.2"
)

unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )  

resolvers += "scalaz-bintray" at "https://dl.bintray.com/scalaz/releases"  