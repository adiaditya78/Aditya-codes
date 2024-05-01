// Example of multi Inheritance
 

class car{
 static void car1(){
  System.out.println("Car is Audi");
}
}

class truck extends car{
 static void truck1(){
  System.out.println("Truck of TATA");
  }
}

class multi_in extends truck{
 static void plane1(){
  System.out.println("Plane service of Air India");
} 
public static void main(String [] args){
multi_in ob = new multi_in();
ob.car1();
ob.truck1();
ob.plane1();
}
}