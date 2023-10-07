public class App {
    public static void main(String[] args) throws Exception {
       Person Jesus = new Person();
       Jesus.age = 28;
       Jesus.name = "Jesus";
       Jesus.sex = true;
       Jesus.FindHeight(64);
    
       System.out.println(Jesus.name);
       System.out.println(Jesus.age);
       System.out.println("Jesus' Height is: " + Jesus.FindHeight(68));
       if(Jesus.sex) {
        System.out.println("Gender: Male");
       }
       else {
        System.out.println("Gender: Female");
       }
     
    }
}
