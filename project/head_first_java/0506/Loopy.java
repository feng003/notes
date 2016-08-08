public class Loopy
{
    public static void main(String[] args) {
        int x = 1;
        System.out.println("Before the loopy");
        while (x<4) {
            System.out.println("In the loopy");
            System.out.println("value of x is"+x);
            x = x + 1;
        }
        System.out.println("This is after the loopy");
    }        
}
