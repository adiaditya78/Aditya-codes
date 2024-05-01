 class Static_val {
  static int i;
  static int j=10;
   static void change(){
   i=20;
   j=40;
}
 public static void main(String[] args){

  Static_val t1 = new Static_val();
  t1.i= 10;
  t1.j=20;
  Static_val t2 = new Static_val();
  System.out.println(t1.i);
  System.out.println(t1.j);
  System.out.println(t2.i);
  System.out.println(t2.j);
  change();
 System.out.println(i);
 System.out.println(j);
 } 
}