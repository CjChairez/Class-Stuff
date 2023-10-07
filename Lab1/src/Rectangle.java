public class Rectangle {
    public int length;
    public int width;

    public static int GetArea(int length, int width) {
        int area = length * width;

        return area;
    }

    public static int GetPerimeter(int length, int width) {
        int perimeter = (length * 2) + (width * 2);

        return perimeter;
    }
}
