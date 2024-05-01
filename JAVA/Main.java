// Instance Variable

 class Main {
  int i;
  int j=10;
 public static void main(String[] args){
  Main t1 = new Main();
  t1.i= 10;
  t1.j=20;
  Main t2 = new Main();
  System.out.println(t1.i);
  System.out.println(t1.j);
  System.out.println(t2.i);
  System.out.println(t2.j);
 } 
}