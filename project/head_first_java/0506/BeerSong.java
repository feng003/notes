public class BeerSong
{
    public static void main(String[] args) {
        int beerNum = 99;
        String word = "bottles";
        while (beerNum  > 0) {
            if (beerNum == 01) {
                word = "bottle";
            }
            System.out.println();
            System.out.println();
            System.out.println();

            beerNum = beerNum - 1;
            if (beerNum > 0) {
                System.out.println();
            }else{
                System.out.println();
            }
        }
    }
}
