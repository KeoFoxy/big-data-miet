/*
  1. Single Responsibility Principle (SRP)  

  +------------------+
  | ReportGenerator  |
  +------------------+
  |                  |
  +------------------+
  | + generateReport()|
  +------------------+

  +------------------+
  |  ReportPrinter   |
  +------------------+
  |                  |
  +------------------+
  | + printReport(r) |
  +------------------+

  2. Open/Closed Principle (OCP)

          +---------+
          |  Shape  |
          +---------+
          |         |
          +---------+
          |+ area() |
          +----|----+
               |
        ______|______
       |             |
    +--------+     +---------+
    | Circle |     |Rectangle|
    +--------+     +---------+
    |- radius|     |- width  |
    |        |     |- height |
    |+ area()|     |+ area() |
    +--------+     +---------+

  3. Liskov Substitution Principle (LSP)

        +-------+
        |  Bird |
        +-------+
        |       |
        +-------+
        | + fly()|
        +---|---+
            |
       _____|_____
      |           |
    +--------+ +--------+
    |Sparrow | |Penguin |
    +--------+ +--------+
    |        | |        |
    |        | | + fly()|
    +--------+ +--------+

  4. Interface Segregation Principle (ISP)

    +------------------+        +-------------------+
    | DocumentPrinter  |        |   PhotoPrinter    |
    +------------------+        +-------------------+
    |+ printDocument() |        | + printPhoto()    |
    +---------|--------+        +---------|---------+
              |                           |
              |                           |
              |          +---------------------------+
              +----------|   MultiFunctionPrinter    |
                         +---------------------------+
                         | + printDocument()         |
                         | + printPhoto()            |
                         +---------------------------+

  5. Dependency Inversion Principle (DIP)

    +---------------+
    |  Switchable   |
    +---------------+
    |+ turnOn()    |
    |+ turnOff()   |
    +-------|-------+
            |
      +-----|-----+
      |           |
    +---------+   |
    | LightBulb|  |
    +---------+   |
    |+ turnOn()|  |
    |+ turnOff()| |
    +---------+   |
                  |
                  |    +--------+
                  +----| Switch |
                       +--------+
                       |        |
                       |+operate|
                       +--------+

*/
