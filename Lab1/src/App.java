import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner myRectangleScanner = new Scanner(System.in);
        Scanner mySquareScanner = new Scanner(System.in);

        System.out.println("Enter the length of the rectangle: ");
        int lengthRec = myRectangleScanner.nextInt();
        System.out.println("Enter the width of the rectangle: ");
        int widthRec = myRectangleScanner.nextInt();

        System.out.println("The area of the rectangle is: " + Rectangle.GetArea(lengthRec, widthRec));
        System.out.println("The Peremter of the rectangle is: " + Rectangle.GetPerimeter(lengthRec, widthRec));

        System.out.println("Enter the length of the Square: ");
        int lengthSqa = mySquareScanner.nextInt();
        System.out.println("Enter the width of the square: ");
        int widthSqa = mySquareScanner.nextInt();

        System.out.println("The area of the square is: " + Square.GetArea(lengthSqa, widthSqa));
        System.out.println("The peremter of the square is: " + Square.GetPerimeter(lengthSqa, widthSqa));

    }
}
