//Hybrid inheritance

class car{
  void car1(){
  System.out.println("Car is Audi");
}
}

class truck extends car{
  void truck1(){
  System.out.println("Truck of TATA");
  }
}

class plane extends truck{
  void plane1(){
  System.out.println("Plane service of Air India");
 }
}

class Ship extends car{
  void ship1(){
  System.out.println("Ships are big");
  }
}

 

public class Hybrid_in{ 
public static void main(String [] args){
   plane vehi =new plane();
   vehi.plane1();
   vehi.truck1();
   vehi.car1();
   Ship ve = new Ship();
   ve.ship1();

  }
 }
