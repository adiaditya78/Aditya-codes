class Animal{
  static void Dog(){
System.out.print("Two dogs are ");
}
}
class single_in extends Animal{
static void Bark(){
System.out.print("Barking.");
}
 public static void main(String[] args){
   single_in obj = new single_in();
   obj.Dog();
   obj.Bark();
}}
