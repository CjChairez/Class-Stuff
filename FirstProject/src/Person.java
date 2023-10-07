public class Person {
    public int age;
    public String name;
    public boolean sex;
    public float height;

    public String FindHeight(float height) {
        float feet;
        float inches;

        feet = (int)height/12;
        inches = height % 12;
        String NewHeight = (int)feet + "'" + (int)inches;

        return NewHeight;
    }
}
