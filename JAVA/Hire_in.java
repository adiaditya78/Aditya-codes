// Hirarchical Inheritance
// Super class

class Animal {
  void sound(){
  System.out.println("Animal makes a sound");
   }
}

// subclass A
 class Cat extends Animal{
   void sound(){
   System.out.println("Cat meows");
  }
}   

//subclass B
class Dog extends Animal{
 void sound(){
 System.out.println("Dog barks");
 }
}

public class Hire_in{
 public static void main(String[] args){
   Dog dog = new Dog();
   Cat cat = new Cat();
   cat.sound();
   dog.sound();
 }
}
   
  
